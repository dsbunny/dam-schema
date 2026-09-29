import * as z from "zod";
export declare const CanSaveStatusSchema: z.ZodObject<{
    upload_id: z.ZodUUID;
    can_save: z.ZodBoolean;
    is_rejected: z.ZodBoolean;
    has_error: z.ZodBoolean;
    is_pending: z.ZodBoolean;
    is_processing: z.ZodBoolean;
    modify_timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CanSaveStatus = z.infer<typeof CanSaveStatusSchema>;
export declare const DbDtoToCanSaveStatusSchema: z.ZodPipe<z.ZodObject<{
    upload_id: z.ZodUUID;
    can_save: z.ZodNumber;
    is_rejected: z.ZodNumber;
    has_error: z.ZodNumber;
    is_pending: z.ZodNumber;
    is_processing: z.ZodNumber;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
}, z.core.$strip>, z.ZodTransform<{
    upload_id: string;
    can_save: boolean;
    is_rejected: boolean;
    has_error: boolean;
    is_pending: boolean;
    is_processing: boolean;
    modify_timestamp: string;
}, {
    upload_id: string;
    can_save: number;
    is_rejected: number;
    has_error: number;
    is_pending: number;
    is_processing: number;
    modify_timestamp: string;
}>>;
export declare const S3PartSchema: z.ZodObject<{
    part_number: z.ZodNumber;
    etag: z.ZodString;
    size: z.ZodNumber;
}, z.core.$strip>;
export type S3Part = z.infer<typeof S3PartSchema>;
export declare const UploadMetadataSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export type UploadMetadata = z.infer<typeof UploadMetadataSchema>;
export declare const UploadSchema: z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
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
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        part_number: z.ZodNumber;
        etag: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strip>>>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    task_upload_status: z.ZodEnum<{
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
    task_s3_complete_state: z.ZodObject<{
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
    task_s3_complete_status: z.ZodEnum<{
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
    task_gen_metadata_state: z.ZodObject<{
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
        progress: z.ZodOptional<z.ZodNumber>;
        result: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"poster">;
                poster: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-image">;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                        poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ck_duration: z.ZodNumber;
                        poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"animated-poster">;
                poster: z.ZodObject<{
                    type: z.ZodLiteral<"animated-poster-image">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        animated_poster_ffmpeg_duration: z.ZodNumber;
                        animated_poster_ck_duration: z.ZodNumber;
                        animated_poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"poster-series">;
                series: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-series-image">;
                    index: z.ZodNumber;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_series_ffmpeg_duration: z.ZodNumber;
                        poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_ck_duration: z.ZodNumber;
                        poster_series_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"tile-series-metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"prevue">;
                prevue: z.ZodObject<{
                    type: z.ZodLiteral<"prevue-video">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        prevue_ffmpeg_duration: z.ZodNumber;
                        prevue_ck_duration: z.ZodNumber;
                        prevue_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>], "type">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    task_gen_metadata_status: z.ZodEnum<{
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
    task_save_status: z.ZodEnum<{
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
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type Upload = z.infer<typeof UploadSchema>;
export declare const ValidatedUploadSchema: z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
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
    s3_version_id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_etag: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_parts: z.ZodNonOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        part_number: z.ZodNumber;
        etag: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strip>>>>;
    size: z.ZodNonOptional<z.ZodOptional<z.ZodNumber>>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    task_upload_status: z.ZodEnum<{
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
    task_s3_complete_state: z.ZodObject<{
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
    task_s3_complete_status: z.ZodEnum<{
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
    task_gen_metadata_state: z.ZodObject<{
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
        progress: z.ZodOptional<z.ZodNumber>;
        result: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"poster">;
                poster: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-image">;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                        poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ck_duration: z.ZodNumber;
                        poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"animated-poster">;
                poster: z.ZodObject<{
                    type: z.ZodLiteral<"animated-poster-image">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        animated_poster_ffmpeg_duration: z.ZodNumber;
                        animated_poster_ck_duration: z.ZodNumber;
                        animated_poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"poster-series">;
                series: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-series-image">;
                    index: z.ZodNumber;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_series_ffmpeg_duration: z.ZodNumber;
                        poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_ck_duration: z.ZodNumber;
                        poster_series_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"tile-series-metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"prevue">;
                prevue: z.ZodObject<{
                    type: z.ZodLiteral<"prevue-video">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        prevue_ffmpeg_duration: z.ZodNumber;
                        prevue_ck_duration: z.ZodNumber;
                        prevue_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>], "type">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    task_gen_metadata_status: z.ZodEnum<{
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
    task_save_status: z.ZodEnum<{
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
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type ValidatedUpload = z.infer<typeof ValidatedUploadSchema>;
export declare const ValidatedUploadWithMetadataSchema: z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
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
    s3_version_id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_etag: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_parts: z.ZodNonOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        part_number: z.ZodNumber;
        etag: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strip>>>>;
    size: z.ZodNonOptional<z.ZodOptional<z.ZodNumber>>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodNonOptional<z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    task_upload_status: z.ZodEnum<{
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
    task_s3_complete_state: z.ZodObject<{
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
    task_s3_complete_status: z.ZodEnum<{
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
    task_gen_metadata_state: z.ZodObject<{
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
        progress: z.ZodOptional<z.ZodNumber>;
        result: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"poster">;
                poster: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-image">;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                        poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ck_duration: z.ZodNumber;
                        poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"animated-poster">;
                poster: z.ZodObject<{
                    type: z.ZodLiteral<"animated-poster-image">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        animated_poster_ffmpeg_duration: z.ZodNumber;
                        animated_poster_ck_duration: z.ZodNumber;
                        animated_poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"poster-series">;
                series: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-series-image">;
                    index: z.ZodNumber;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_series_ffmpeg_duration: z.ZodNumber;
                        poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_ck_duration: z.ZodNumber;
                        poster_series_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"tile-series-metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"prevue">;
                prevue: z.ZodObject<{
                    type: z.ZodLiteral<"prevue-video">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        prevue_ffmpeg_duration: z.ZodNumber;
                        prevue_ck_duration: z.ZodNumber;
                        prevue_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>], "type">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    task_gen_metadata_status: z.ZodEnum<{
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
    task_save_status: z.ZodEnum<{
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
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type ValidatedUploadWithMetadata = z.infer<typeof ValidatedUploadWithMetadataSchema>;
export declare const DbDtoFromUploadSchema: z.ZodPipe<z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
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
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        part_number: z.ZodNumber;
        etag: z.ZodString;
        size: z.ZodNumber;
    }, z.core.$strip>>>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    task_upload_status: z.ZodEnum<{
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
    task_s3_complete_state: z.ZodObject<{
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
    task_s3_complete_status: z.ZodEnum<{
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
    task_gen_metadata_state: z.ZodObject<{
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
        progress: z.ZodOptional<z.ZodNumber>;
        result: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
                type: z.ZodLiteral<"poster">;
                poster: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-image">;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                        poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_ck_duration: z.ZodNumber;
                        poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"animated-poster">;
                poster: z.ZodObject<{
                    type: z.ZodLiteral<"animated-poster-image">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        animated_poster_ffmpeg_duration: z.ZodNumber;
                        animated_poster_ck_duration: z.ZodNumber;
                        animated_poster_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"poster-series">;
                series: z.ZodArray<z.ZodObject<{
                    type: z.ZodLiteral<"poster-series-image">;
                    index: z.ZodNumber;
                    quality: z.ZodEnum<{
                        medium: "medium";
                        high: "high";
                        sample: "sample";
                    }>;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    blurhash: z.ZodOptional<z.ZodString>;
                    timings: z.ZodObject<{
                        poster_series_ffmpeg_duration: z.ZodNumber;
                        poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                        poster_series_ck_duration: z.ZodNumber;
                        poster_series_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"tile-series-metadata">;
                timings: z.ZodObject<{
                    metadata_http_duration: z.ZodNumber;
                }, z.core.$strip>;
                file: z.ZodObject<{
                    s3_filename: z.ZodString;
                    content_type: z.ZodString;
                    size: z.ZodNumber;
                    mtime: z.ZodString;
                    md5: z.ZodString;
                    sha256: z.ZodString;
                    s3_uri: z.ZodString;
                    s3_version_id: z.ZodString;
                    s3_etag: z.ZodString;
                    s3_parts: z.ZodArray<z.ZodNumber>;
                }, z.core.$strip>;
                tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"prevue">;
                prevue: z.ZodObject<{
                    type: z.ZodLiteral<"prevue-video">;
                    width: z.ZodNumber;
                    height: z.ZodNumber;
                    timings: z.ZodObject<{
                        prevue_ffmpeg_duration: z.ZodNumber;
                        prevue_ck_duration: z.ZodNumber;
                        prevue_http_duration: z.ZodNumber;
                    }, z.core.$strip>;
                    file: z.ZodObject<{
                        s3_filename: z.ZodString;
                        content_type: z.ZodString;
                        size: z.ZodNumber;
                        mtime: z.ZodString;
                        md5: z.ZodString;
                        sha256: z.ZodString;
                        s3_uri: z.ZodString;
                        s3_version_id: z.ZodString;
                        s3_etag: z.ZodString;
                        s3_parts: z.ZodArray<z.ZodNumber>;
                    }, z.core.$strip>;
                    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
            }, z.core.$strip>], "type">]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    task_gen_metadata_status: z.ZodEnum<{
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
    task_save_status: z.ZodEnum<{
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
    user_tags: z.ZodArray<z.ZodString>;
    system_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, z.ZodTransform<{
    s3_metadata: string;
    s3_parts: string;
    metadata_metadata: string;
    task_s3_complete_state: string;
    task_gen_metadata_state: string;
    user_tags: string;
    system_tags: string;
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    task_upload_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_s3_complete_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_gen_metadata_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_save_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    s3_upload_id?: string | undefined;
    s3_version_id?: string | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
}, {
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    task_upload_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_s3_complete_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: {
            elapsed_seconds: number;
        } | undefined;
        result?: {
            Location: string;
            Bucket: string;
            Key: string;
            ETag: string;
            Expiration?: string | undefined;
            ChecksumCRC32?: string | undefined;
            ChecksumCRC32C?: string | undefined;
            ChecksumSHA1?: string | undefined;
            ChecksumSHA256?: string | undefined;
            ServerSideEncryption?: "AES256" | "aws:kms" | "aws:kms:dsse" | undefined;
            VersionId?: string | undefined;
            SSEKMSKeyId?: string | undefined;
            BucketKeyEnabled?: boolean | undefined;
            RequestCharged?: "requester" | undefined;
        } | undefined;
    };
    task_s3_complete_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_gen_metadata_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: number | undefined;
        result?: {
            metadata: {
                type: "metadata";
                timings: {
                    metadata_http_duration: number;
                };
                file: {
                    s3_filename: string;
                    content_type: string;
                    size: number;
                    mtime: string;
                    md5: string;
                    sha256: string;
                    s3_uri: string;
                    s3_version_id: string;
                    s3_etag: string;
                    s3_parts: number[];
                };
                tags?: string[] | undefined;
            } | {
                type: "poster";
                poster: {
                    type: "poster-image";
                    quality: "medium" | "high" | "sample";
                    width: number;
                    height: number;
                    timings: {
                        poster_ck_duration: number;
                        poster_http_duration: number;
                        poster_canvas_duration?: number | undefined;
                        poster_ffmpeg_duration?: number | undefined;
                        poster_avifenc_duration?: number | undefined;
                        poster_sharp_duration?: number | undefined;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    blurhash?: string | undefined;
                    tags?: string[] | undefined;
                }[];
            } | {
                type: "animated-poster";
                poster: {
                    type: "animated-poster-image";
                    width: number;
                    height: number;
                    timings: {
                        animated_poster_ffmpeg_duration: number;
                        animated_poster_ck_duration: number;
                        animated_poster_http_duration: number;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    tags?: string[] | undefined;
                };
            } | {
                type: "poster-series";
                series: {
                    type: "poster-series-image";
                    index: number;
                    quality: "medium" | "high" | "sample";
                    width: number;
                    height: number;
                    timings: {
                        poster_series_ffmpeg_duration: number;
                        poster_series_ck_duration: number;
                        poster_series_http_duration: number;
                        poster_series_avifenc_duration?: number | undefined;
                        poster_series_sharp_duration?: number | undefined;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    blurhash?: string | undefined;
                    tags?: string[] | undefined;
                }[];
            } | {
                type: "tile-series-metadata";
                timings: {
                    metadata_http_duration: number;
                };
                file: {
                    s3_filename: string;
                    content_type: string;
                    size: number;
                    mtime: string;
                    md5: string;
                    sha256: string;
                    s3_uri: string;
                    s3_version_id: string;
                    s3_etag: string;
                    s3_parts: number[];
                };
                tags?: string[] | undefined;
            } | {
                type: "prevue";
                prevue: {
                    type: "prevue-video";
                    width: number;
                    height: number;
                    timings: {
                        prevue_ffmpeg_duration: number;
                        prevue_ck_duration: number;
                        prevue_http_duration: number;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    tags?: string[] | undefined;
                };
            };
        } | undefined;
    };
    task_gen_metadata_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_save_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    user_tags: string[];
    system_tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        Location: string;
        Bucket: string;
        Key: string;
        ETag: string;
        Expiration?: string | undefined;
        ChecksumCRC32?: string | undefined;
        ChecksumCRC32C?: string | undefined;
        ChecksumSHA1?: string | undefined;
        ChecksumSHA256?: string | undefined;
        ServerSideEncryption?: "AES256" | "aws:kms" | "aws:kms:dsse" | undefined;
        VersionId?: string | undefined;
        SSEKMSKeyId?: string | undefined;
        BucketKeyEnabled?: boolean | undefined;
        RequestCharged?: "requester" | undefined;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_etag?: string | undefined;
    s3_parts?: {
        part_number: number;
        etag: string;
        size: number;
    }[] | undefined;
    size?: number | undefined;
    metadata_metadata?: {
        type: "metadata";
        timings: {
            metadata_http_duration: number;
        };
        file: {
            s3_filename: string;
            content_type: string;
            size: number;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        tags?: string[] | undefined;
    } | undefined;
}>>;
export declare const DbDtoToUploadSchema: z.ZodPipe<z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodNullable<z.ZodString>;
    s3_metadata: z.ZodNullable<z.ZodString>;
    s3_version_id: z.ZodNullable<z.ZodString>;
    s3_etag: z.ZodNullable<z.ZodString>;
    s3_parts: z.ZodNullable<z.ZodString>;
    size: z.ZodNullable<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodNullable<z.ZodString>;
    task_upload_status: z.ZodEnum<{
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
    task_s3_complete_state: z.ZodNullable<z.ZodString>;
    task_s3_complete_status: z.ZodEnum<{
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
    task_gen_metadata_state: z.ZodNullable<z.ZodString>;
    task_gen_metadata_status: z.ZodEnum<{
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
    task_save_status: z.ZodEnum<{
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
    user_tags: z.ZodString;
    system_tags: z.ZodString;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>, z.ZodTransform<{
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    task_upload_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_s3_complete_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: {
            elapsed_seconds: number;
        } | undefined;
        result?: {
            Location: string;
            Bucket: string;
            Key: string;
            ETag: string;
            Expiration?: string | undefined;
            ChecksumCRC32?: string | undefined;
            ChecksumCRC32C?: string | undefined;
            ChecksumSHA1?: string | undefined;
            ChecksumSHA256?: string | undefined;
            ServerSideEncryption?: "AES256" | "aws:kms" | "aws:kms:dsse" | undefined;
            VersionId?: string | undefined;
            SSEKMSKeyId?: string | undefined;
            BucketKeyEnabled?: boolean | undefined;
            RequestCharged?: "requester" | undefined;
        } | undefined;
    };
    task_s3_complete_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_gen_metadata_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: number | undefined;
        result?: {
            metadata: {
                type: "metadata";
                timings: {
                    metadata_http_duration: number;
                };
                file: {
                    s3_filename: string;
                    content_type: string;
                    size: number;
                    mtime: string;
                    md5: string;
                    sha256: string;
                    s3_uri: string;
                    s3_version_id: string;
                    s3_etag: string;
                    s3_parts: number[];
                };
                tags?: string[] | undefined;
            } | {
                type: "poster";
                poster: {
                    type: "poster-image";
                    quality: "medium" | "high" | "sample";
                    width: number;
                    height: number;
                    timings: {
                        poster_ck_duration: number;
                        poster_http_duration: number;
                        poster_canvas_duration?: number | undefined;
                        poster_ffmpeg_duration?: number | undefined;
                        poster_avifenc_duration?: number | undefined;
                        poster_sharp_duration?: number | undefined;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    blurhash?: string | undefined;
                    tags?: string[] | undefined;
                }[];
            } | {
                type: "animated-poster";
                poster: {
                    type: "animated-poster-image";
                    width: number;
                    height: number;
                    timings: {
                        animated_poster_ffmpeg_duration: number;
                        animated_poster_ck_duration: number;
                        animated_poster_http_duration: number;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    tags?: string[] | undefined;
                };
            } | {
                type: "poster-series";
                series: {
                    type: "poster-series-image";
                    index: number;
                    quality: "medium" | "high" | "sample";
                    width: number;
                    height: number;
                    timings: {
                        poster_series_ffmpeg_duration: number;
                        poster_series_ck_duration: number;
                        poster_series_http_duration: number;
                        poster_series_avifenc_duration?: number | undefined;
                        poster_series_sharp_duration?: number | undefined;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    blurhash?: string | undefined;
                    tags?: string[] | undefined;
                }[];
            } | {
                type: "tile-series-metadata";
                timings: {
                    metadata_http_duration: number;
                };
                file: {
                    s3_filename: string;
                    content_type: string;
                    size: number;
                    mtime: string;
                    md5: string;
                    sha256: string;
                    s3_uri: string;
                    s3_version_id: string;
                    s3_etag: string;
                    s3_parts: number[];
                };
                tags?: string[] | undefined;
            } | {
                type: "prevue";
                prevue: {
                    type: "prevue-video";
                    width: number;
                    height: number;
                    timings: {
                        prevue_ffmpeg_duration: number;
                        prevue_ck_duration: number;
                        prevue_http_duration: number;
                    };
                    file: {
                        s3_filename: string;
                        content_type: string;
                        size: number;
                        mtime: string;
                        md5: string;
                        sha256: string;
                        s3_uri: string;
                        s3_version_id: string;
                        s3_etag: string;
                        s3_parts: number[];
                    };
                    tags?: string[] | undefined;
                };
            };
        } | undefined;
    };
    task_gen_metadata_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_save_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    user_tags: string[];
    system_tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        Location: string;
        Bucket: string;
        Key: string;
        ETag: string;
        Expiration?: string | undefined;
        ChecksumCRC32?: string | undefined;
        ChecksumCRC32C?: string | undefined;
        ChecksumSHA1?: string | undefined;
        ChecksumSHA256?: string | undefined;
        ServerSideEncryption?: "AES256" | "aws:kms" | "aws:kms:dsse" | undefined;
        VersionId?: string | undefined;
        SSEKMSKeyId?: string | undefined;
        BucketKeyEnabled?: boolean | undefined;
        RequestCharged?: "requester" | undefined;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_etag?: string | undefined;
    s3_parts?: {
        part_number: number;
        etag: string;
        size: number;
    }[] | undefined;
    size?: number | undefined;
    metadata_metadata?: {
        type: "metadata";
        timings: {
            metadata_http_duration: number;
        };
        file: {
            s3_filename: string;
            content_type: string;
            size: number;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        tags?: string[] | undefined;
    } | undefined;
}, {
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    s3_upload_id: string | null;
    s3_metadata: string | null;
    s3_version_id: string | null;
    s3_etag: string | null;
    s3_parts: string | null;
    size: number | null;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    metadata_metadata: string | null;
    task_upload_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_s3_complete_state: string | null;
    task_s3_complete_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_gen_metadata_state: string | null;
    task_gen_metadata_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    task_save_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    user_tags: string;
    system_tags: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
//# sourceMappingURL=upload.schema.d.ts.map