import * as z from "zod";
export declare const S3ClientConfigSchema: z.ZodObject<{
    region: z.ZodString;
    endpoint: z.ZodString;
    forcePathStyle: z.ZodBoolean;
    credentials: z.ZodObject<{
        accessKeyId: z.ZodString;
        secretAccessKey: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type S3ClientConfig = z.infer<typeof S3ClientConfigSchema>;
//# sourceMappingURL=s3-client-config.schema.d.ts.map