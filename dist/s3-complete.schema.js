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
import { S3ClientConfigSchema } from './s3-client-config.schema.js';
import { URI } from './uri.schema.js';
export const UploadPart = z.object({
    part_number: z.number().min(1).max(10000)
        .describe('The part number of the upload'),
    s3_etag: z.string().min(2).max(2048)
        .describe('The S3 ETag of the part'),
})
    .describe('The S3 part of the upload');
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
export const S3CompleteProgress = z.object({
    elapsed_seconds: z.number().min(0)
        .describe('The elapsed seconds of the upload completion job'),
})
    .describe('The progress of the upload completion job');
// `CompleteMultipartUploadCommandOutput` serialized as a string.
export const S3CompleteResponse = z.string().max(65535)
    .describe('The output of the upload completion job');
//# sourceMappingURL=s3-complete.schema.js.map