import * as z from "zod";
export declare namespace AWSSchema {
    const CompleteMultipartUploadResponseSchema: z.ZodObject<{
        Location: z.ZodString;
        Bucket: z.ZodString;
        Key: z.ZodString;
        Expiration: z.ZodOptional<z.ZodString>;
        ETag: z.ZodString;
        ChecksumCRC32: z.ZodOptional<z.ZodString>;
        ChecksumCRC32C: z.ZodOptional<z.ZodString>;
        ChecksumSHA1: z.ZodOptional<z.ZodString>;
        ChecksumSHA256: z.ZodOptional<z.ZodString>;
        ServerSideEncryption: z.ZodOptional<z.ZodEnum<{
            AES256: "AES256";
            "aws:kms": "aws:kms";
            "aws:kms:dsse": "aws:kms:dsse";
        }>>;
        VersionId: z.ZodOptional<z.ZodString>;
        SSEKMSKeyId: z.ZodOptional<z.ZodString>;
        BucketKeyEnabled: z.ZodOptional<z.ZodBoolean>;
        RequestCharged: z.ZodOptional<z.ZodEnum<{
            requester: "requester";
        }>>;
    }, z.core.$strip>;
    type CompleteMultipartUploadResponse = z.infer<typeof CompleteMultipartUploadResponseSchema>;
}
//# sourceMappingURL=aws.schema.d.ts.map