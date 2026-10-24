// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export const S3ClientConfigSchema = z.object({
        region: z.string().min(2).max(255)
                .describe('The AWS region of the S3 bucket'),
        endpoint: z.string().min(5).max(2048)
                .describe('The endpoint of the S3 service'),
        forcePathStyle: z.boolean()
                .describe('Whether to force path style URLs for S3 requests'),
        credentials: z.object({
                accessKeyId: z.string().min(2).max(255)
                        .describe('The access key ID for the S3 client'),
                secretAccessKey: z.string().min(2).max(255)
                        .describe('The secret access key for the S3 client'),
        })
                .describe('The credentials for the S3 client'),
}).register(dsbunnyRegistry, {
        id: 'S3ClientConfigSchema',
        description: 'S3 client configuration schema',
});
export type S3ClientConfig = z.infer<typeof S3ClientConfigSchema>;
