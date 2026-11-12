// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// AWS specific schemas.

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export namespace AWSSchema {
        // REF: https://docs.aws.amazon.com/AmazonS3/latest/API/API_CompleteMultipartUpload.html#API_CompleteMultipartUpload_ResponseSyntax
        // REF: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-client-s3/Interface/CompleteMultipartUploadCommandOutput/
        // Schema to validate multipart upload response from S3.
        export const CompleteMultipartUploadResponseSchema = z.object({
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
        }).register(dsbunnyRegistry, {
                id: 'CompleteMultipartUploadResponseSchema',
                description: 'Schema for the response of completing a multipart upload',
        });
        export type CompleteMultipartUploadResponse = z.infer<typeof CompleteMultipartUploadResponseSchema>;
}
