import * as z from "zod";
export declare const UploadPart: z.ZodObject<{
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
}, z.core.$strip>;
export type UploadPart = z.infer<typeof UploadPart>;
export declare const S3CompleteRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    reference_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_client_config: z.ZodObject<{
        region: z.ZodString;
        endpoint: z.ZodString;
        forcePathStyle: z.ZodBoolean;
        credentials: z.ZodObject<{
            accessKeyId: z.ZodString;
            secretAccessKey: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    s3_upload_id: z.ZodString;
    s3_uri: z.ZodString;
    s3_parts: z.ZodArray<z.ZodObject<{
        part_number: z.ZodNumber;
        s3_etag: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type S3CompleteRequest = z.infer<typeof S3CompleteRequest>;
export declare const S3CompleteProgress: z.ZodObject<{
    elapsed_seconds: z.ZodNumber;
}, z.core.$strip>;
export type S3CompleteProgress = z.infer<typeof S3CompleteProgress>;
export declare const S3CompleteResponse: z.ZodString;
export type S3CompleteResponse = z.infer<typeof S3CompleteResponse>;
//# sourceMappingURL=s3-complete.schema.d.ts.map