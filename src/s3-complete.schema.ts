// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
//                               ┌─────────────┐
//         S3CompleteRequest     │             │     ┌───────────┐
//       ───────────────────────►│             │     │           │
//                               │   DAM S3    │────►│ S3 Object │
//         S3CompleteProgress    │   Complete  │     │ Storage   │
//       ◄◄──────────────────────┤             │     │           │
//                               │             │     └───────────┘
//                               └─────────────┘

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { URISchema } from '@dsbunny/net-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { AWSSchema } from "./aws.schema.js";
import { S3ClientConfigSchema } from './s3-client-config.schema.js';

export const UploadPartSchema = z.object({
        '@type': z.literal('UploadPart')
                .describe('Type of the upload part'),
        part_number: z.number().min(1).max(10000)
                .describe('The part number of the upload'),
	s3_etag: z.string().min(2).max(2048)
                .describe('The S3 ETag of the part'),
}).register(dsbunnyRegistry, {
        id: 'UploadPartSchema',
        description: 'The S3 part of the upload',
});
export type UploadPart = z.infer<typeof UploadPartSchema>;

export const S3CompleteRequestSchema = z.object({
        '@type': z.literal('S3CompleteRequest')
                .describe('Type of the S3 complete request'),
        tenant_id: z.uuid()
                .describe('The tenant ID of the upload'),
        reference_id: z.uuid()
                .describe('The caller reference ID of the upload'),
        asset_id: z.uuid()
                .describe('The asset ID of the upload'),
        s3_client_config: S3ClientConfigSchema
                .describe('The S3 client configuration for accessing the asset'),
        s3_upload_id: z.string().min(2).max(2048)
                .describe('The S3 upload ID of the upload'),
        s3_uri: URISchema.min(20).max(2048)
                .describe('The S3 URI of the upload'),
        s3_parts: z.array(UploadPartSchema)
                .describe('The S3 parts of the upload'),
}).register(dsbunnyRegistry, {
        id: 'S3CompleteRequestSchema',
        description: 'The request schema for completing an S3 upload',
});
export type S3CompleteRequest = z.infer<typeof S3CompleteRequestSchema>;

export const S3CompleteProgressSchema = z.object({
        '@type': z.literal('S3CompleteProgress')
                .describe('Type of the S3 complete progress'),
        elapsed_seconds: z.number().min(0)
                .describe('The elapsed seconds of the upload completion job'),
}).register(dsbunnyRegistry, {
        id: 'S3CompleteProgressSchema',
        description: 'The progress of the upload completion job',
});
export type S3CompleteProgress = z.infer<typeof S3CompleteProgressSchema>;

export const S3CompleteResponseSchema = AWSSchema.CompleteMultipartUploadResponseSchema.register(dsbunnyRegistry, {
        id: 'S3CompleteResponseSchema',
        description: 'The output of the upload completion job',
});
export type S3CompleteResponse = z.infer<typeof S3CompleteResponseSchema>;

export const S3CompleteTaskStateSchema = RobustTask.TaskStateSchema.extend({
        progress: S3CompleteProgressSchema.optional(),
        result: S3CompleteResponseSchema.optional(),
}).register(dsbunnyRegistry, {
        id: 'S3CompleteTaskStateSchema',
        description: 'The state of the S3 complete task',
});
export type S3CompleteTaskState = RobustTask.TaskState<S3CompleteRequest, RobustTask.TaskConfig, S3CompleteProgress, S3CompleteResponse>;
