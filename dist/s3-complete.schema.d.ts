import * as z from "zod";
import { RobustTask } from "@dsbunny/robust-task-schema";
export declare const UploadPartSchema: z.ZodObject<{
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
}, z.core.$strip>;
export type UploadPart = z.infer<typeof UploadPartSchema>;
export declare const S3CompleteRequestSchema: z.ZodObject<{
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
export type S3CompleteRequest = z.infer<typeof S3CompleteRequestSchema>;
export declare const S3CompleteProgressSchema: z.ZodObject<{
    elapsed_seconds: z.ZodNumber;
}, z.core.$strip>;
export type S3CompleteProgress = z.infer<typeof S3CompleteProgressSchema>;
export declare const CompleteMultipartUploadResponseSchema: z.ZodObject<{
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
export type CompleteMultipartUploadResponse = z.infer<typeof CompleteMultipartUploadResponseSchema>;
export declare const S3CompleteResponseSchema: z.ZodObject<{
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
export type S3CompleteResponse = z.infer<typeof S3CompleteResponseSchema>;
export declare const S3MetadataResponseSchema: z.ZodObject<{
    $metadata: z.ZodObject<{
        attempts: z.ZodNumber;
        httpStatusCode: z.ZodNumber;
        requestId: z.ZodString;
        totalRetryDelay: z.ZodNumber;
    }, z.core.$strip>;
    Bucket: z.ZodString;
    ETag: z.ZodString;
    Key: z.ZodString;
    Location: z.ZodString;
    VersionId: z.ZodString;
}, z.core.$strip>;
export type S3MetadataResponse = z.infer<typeof S3MetadataResponseSchema>;
export declare const S3CompleteTaskStateSchema: z.ZodObject<{
    status: z.ZodEnum<{
        pending: "pending";
        running: "running";
        succeeded: "succeeded";
        failed: "failed";
        rejected: "rejected";
        "blocked-dependency": "blocked-dependency";
        "blocked-input": "blocked-input";
        skipped: "skipped";
        "pending-paused": "pending-paused";
        "blocked-dependency-paused": "blocked-dependency-paused";
        "blocked-input-paused": "blocked-input-paused";
    }>;
    createdAt: z.ZodISODateTime;
    startedAt: z.ZodOptional<z.ZodISODateTime>;
    updatedAt: z.ZodOptional<z.ZodISODateTime>;
    finishedAt: z.ZodOptional<z.ZodISODateTime>;
    attempts: z.ZodNumber;
    runtimeToken: z.ZodOptional<z.ZodString>;
    data: z.ZodOptional<z.ZodUnknown>;
    config: z.ZodOptional<z.ZodObject<{
        timeoutMs: z.ZodNumber;
        maxAttempts: z.ZodNumber;
    }, z.core.$strip>>;
    error: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        code: z.ZodOptional<z.ZodString>;
        stack: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodISODateTime;
    }, z.core.$strip>>;
    rejection: z.ZodOptional<z.ZodObject<{
        reason: z.ZodString;
        issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
        timestamp: z.ZodISODateTime;
    }, z.core.$strip>>;
    progress: z.ZodOptional<z.ZodObject<{
        elapsed_seconds: z.ZodNumber;
    }, z.core.$strip>>;
    result: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type S3CompleteTaskState = RobustTask.TaskState<S3CompleteRequest, RobustTask.TaskConfig, S3CompleteProgress, S3CompleteResponse>;
//# sourceMappingURL=s3-complete.schema.d.ts.map