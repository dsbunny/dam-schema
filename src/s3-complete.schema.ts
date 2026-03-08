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
import { RobustTask } from "@dsbunny/robust-task-schema";
import { S3ClientConfigSchema } from './s3-client-config.schema.js';
import { URI } from './uri.schema.js';

export const UploadPart = z.object({
        part_number: z.number().min(1).max(10000)
                .describe('The part number of the upload'),
	s3_etag: z.string().min(2).max(2048)
                .describe('The S3 ETag of the part'),
})
        .describe('The S3 part of the upload');
export type UploadPart = z.infer<typeof UploadPart>;

export const S3CompleteRequest = z.object({
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
        s3_uri: URI.min(20).max(2048)
                .describe('The S3 URI of the upload'),
        s3_parts: z.array(UploadPart)
                .describe('The S3 parts of the upload'),
});
export type S3CompleteRequest = z.infer<typeof S3CompleteRequest>;

export const S3CompleteProgress = z.object({
        elapsed_seconds: z.number().min(0)
                .describe('The elapsed seconds of the upload completion job'),
})
        .describe('The progress of the upload completion job');
export type S3CompleteProgress = z.infer<typeof S3CompleteProgress>;

// REF: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html#API_CompleteMultipartUpload_ResponseSyntax
// REF: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3/Interface/CompleteMultipartUploadCommandOutput/
// Schema to validate multipart upload response from S3.
export const CompleteMultipartUploadResponse = z.object({
        Location: z.string(),
        Bucket: z.string(),
        Key: z.string(),
        Expiration: z.string().optional(),
        ETag: z.string(),
        ChecksumCRC32: z.string().optional(),
        ChecksumCRC32C: z.string().optional(),
        ChecksumSHA1: z.string().optional(),
        ChecksumSHA256: z.string().optional(),
        ServerSideEncryption: z.enum(["AES256", "aws:kms", "aws:kms:dsse"]).optional(),
        VersionId: z.string().optional(),
        SSEKMSKeyId: z.string().optional(),
        BucketKeyEnabled: z.boolean().optional(),
        RequestCharged: z.enum(["requester"]).optional(),
});
export type CompleteMultipartUploadResponse = z.infer<typeof CompleteMultipartUploadResponse>;

export const S3CompleteResponse = CompleteMultipartUploadResponse
        .describe('The output of the upload completion job');
export type S3CompleteResponse = z.infer<typeof S3CompleteResponse>;

export const S3MetadataResponse = z.object({
        "$metadata": z.object({
                attempts: z.number()
                        .describe('The number of times this operation was attempted.'),
                httpStatusCode: z.number()
                        .describe('The status code of the last HTTP response received for this operation.'),
                requestId: z.string()
                        .describe('A unique identifier for the last request sent for this operation. Often requested by AWS service teams to aid in debugging.'),
                totalRetryDelay: z.number()
                        .describe('The total amount of time (in milliseconds) that was spent waiting between retry attempts.'),
        })
                .describe('Metadata pertaining to this request.'),
        Bucket: z.string()
                .describe('The name of the bucket that contains the newly created object.'),
        ETag: z.string()
                .describe('Entity tag that identifies the newly created object\'s data.'),
        Key: z.string()
                .describe('The object key of the newly created object.'),
        Location: z.string()
                .describe('The URI that identifies the newly created object.'),
        VersionId: z.string()
                .describe('Version ID of the newly created object, in case the bucket has versioning turned on.'),
});
export type S3MetadataResponse = z.infer<typeof S3MetadataResponse>;

export const S3CompleteTaskStateSchema = RobustTask.TaskStateSchema.extend({
        progress: S3CompleteProgress.optional(),
        result: S3CompleteResponse.optional(),
})
        .describe('The state of the S3 complete task');
export type S3CompleteTaskState = RobustTask.TaskState<S3CompleteRequest, RobustTask.TaskConfig, S3CompleteProgress, S3CompleteResponse>;
