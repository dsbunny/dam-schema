import { z } from 'zod';
export declare const UploadStateEnum: z.ZodEnum<["pending", "uploading", "uploaded", "error"]>;
export type UploadStateEnum = z.infer<typeof UploadStateEnum>;
export declare const CanSaveStatus: z.ZodObject<{
    upload_id: z.ZodString;
    can_save: z.ZodBoolean;
    is_rejected: z.ZodBoolean;
    has_error: z.ZodBoolean;
    is_pending: z.ZodBoolean;
    is_processing: z.ZodBoolean;
    modify_timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    modify_timestamp: string;
    upload_id: string;
    can_save: boolean;
    is_rejected: boolean;
    has_error: boolean;
    is_pending: boolean;
    is_processing: boolean;
}, {
    modify_timestamp: string;
    upload_id: string;
    can_save: boolean;
    is_rejected: boolean;
    has_error: boolean;
    is_pending: boolean;
    is_processing: boolean;
}>;
export type CanSaveStatus = z.infer<typeof CanSaveStatus>;
export declare const DbDtoToCanSaveStatus: z.ZodEffects<z.ZodObject<{
    upload_id: z.ZodString;
    can_save: z.ZodNumber;
    is_rejected: z.ZodNumber;
    has_error: z.ZodNumber;
    is_pending: z.ZodNumber;
    is_processing: z.ZodNumber;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    modify_timestamp: string;
    upload_id: string;
    can_save: number;
    is_rejected: number;
    has_error: number;
    is_pending: number;
    is_processing: number;
}, {
    modify_timestamp: string;
    upload_id: string;
    can_save: number;
    is_rejected: number;
    has_error: number;
    is_pending: number;
    is_processing: number;
}>, {
    modify_timestamp: string;
    upload_id: string;
    can_save: boolean;
    is_rejected: boolean;
    has_error: boolean;
    is_pending: boolean;
    is_processing: boolean;
}, {
    modify_timestamp: string;
    upload_id: string;
    can_save: number;
    is_rejected: number;
    has_error: number;
    is_pending: number;
    is_processing: number;
}>;
export declare const SaveStateEnum: z.ZodEnum<["pending", "saving", "saved", "conflict", "error"]>;
export type SaveStateEnum = z.infer<typeof SaveStateEnum>;
export declare const S3Metadata: z.ZodObject<{
    $metadata: z.ZodObject<{
        attempts: z.ZodNumber;
        httpStatusCode: z.ZodNumber;
        requestId: z.ZodString;
        totalRetryDelay: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        attempts: number;
        httpStatusCode: number;
        requestId: string;
        totalRetryDelay: number;
    }, {
        attempts: number;
        httpStatusCode: number;
        requestId: string;
        totalRetryDelay: number;
    }>;
    Bucket: z.ZodString;
    ETag: z.ZodString;
    Key: z.ZodString;
    Location: z.ZodString;
    VersionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    $metadata: {
        attempts: number;
        httpStatusCode: number;
        requestId: string;
        totalRetryDelay: number;
    };
    Bucket: string;
    ETag: string;
    Key: string;
    Location: string;
    VersionId: string;
}, {
    $metadata: {
        attempts: number;
        httpStatusCode: number;
        requestId: string;
        totalRetryDelay: number;
    };
    Bucket: string;
    ETag: string;
    Key: string;
    Location: string;
    VersionId: string;
}>;
export type S3Metadata = z.infer<typeof S3Metadata>;
export declare const S3Parts: z.ZodArray<z.ZodNumber, "many">;
export type S3Parts = z.infer<typeof S3Parts>;
export declare const UploadMetadata: z.ZodRecord<z.ZodString, z.ZodString>;
export type UploadMetadata = z.infer<typeof UploadMetadata>;
export declare const UploadTag: z.ZodString;
export type UploadTag = z.infer<typeof UploadTag>;
export declare const Upload: z.ZodObject<{
    upload_id: z.ZodString;
    tenant_id: z.ZodString;
    asset_id: z.ZodString;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }>>;
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
    }, {
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }>>;
    upload_state: z.ZodEnum<["pending", "uploading", "uploaded", "error"]>;
    s3_complete_state: z.ZodEnum<["pending", "completing", "completed", "error"]>;
    metadata_state: z.ZodEnum<["pending", "processing", "processed", "rejected", "error"]>;
    save_state: z.ZodEnum<["pending", "saving", "saved", "conflict", "error"]>;
    tags: z.ZodArray<z.ZodString, "many">;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    is_deleted?: boolean | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}>;
export type Upload = z.infer<typeof Upload>;
export declare const ValidatedUpload: z.ZodObject<{
    metadata_metadata: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
    }, {
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }>>;
    tenant_id: z.ZodString;
    metadata_state: z.ZodEnum<["pending", "processing", "processed", "rejected", "error"]>;
    tags: z.ZodArray<z.ZodString, "many">;
    asset_id: z.ZodString;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    upload_id: z.ZodString;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }>>;
    s3_version_id: z.ZodString;
    s3_parts: z.ZodArray<z.ZodNumber, "many">;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    upload_state: z.ZodEnum<["pending", "uploading", "uploaded", "error"]>;
    s3_complete_state: z.ZodEnum<["pending", "completing", "completed", "error"]>;
    save_state: z.ZodEnum<["pending", "saving", "saved", "conflict", "error"]>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    s3_etag: string;
    size: number;
    s3_version_id: string;
    s3_parts: number[];
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
}, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    s3_etag: string;
    size: number;
    s3_version_id: string;
    s3_parts: number[];
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    is_deleted?: boolean | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
}>;
export type ValidatedUpload = z.infer<typeof ValidatedUpload>;
export declare const DbDtoFromUpload: z.ZodEffects<z.ZodObject<{
    upload_id: z.ZodString;
    tenant_id: z.ZodString;
    asset_id: z.ZodString;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }, {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        }>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }, {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    }>>;
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
    }, {
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    }>>;
    upload_state: z.ZodEnum<["pending", "uploading", "uploaded", "error"]>;
    s3_complete_state: z.ZodEnum<["pending", "completing", "completed", "error"]>;
    metadata_state: z.ZodEnum<["pending", "processing", "processed", "rejected", "error"]>;
    save_state: z.ZodEnum<["pending", "saving", "saved", "conflict", "error"]>;
    tags: z.ZodArray<z.ZodString, "many">;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    is_deleted?: boolean | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}>, {
    s3_metadata: string;
    s3_parts: string;
    metadata_metadata: string;
    tags: string;
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_version_id?: string | undefined;
}, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    is_deleted?: boolean | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}>;
export declare const DbDtoToUpload: z.ZodEffects<z.ZodObject<{
    upload_id: z.ZodString;
    tenant_id: z.ZodString;
    asset_id: z.ZodString;
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
    upload_state: z.ZodEnum<["pending", "uploading", "uploaded", "error"]>;
    s3_complete_state: z.ZodEnum<["pending", "completing", "completed", "error"]>;
    metadata_state: z.ZodEnum<["pending", "processing", "processed", "rejected", "error"]>;
    save_state: z.ZodEnum<["pending", "saving", "saved", "conflict", "error"]>;
    tags: z.ZodString;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    metadata_metadata: string | null;
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string;
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    upload_id: string;
    s3_etag: string | null;
    size: number | null;
    s3_upload_id: string | null;
    s3_metadata: string | null;
    s3_version_id: string | null;
    s3_parts: string | null;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
}, {
    metadata_metadata: string | null;
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string;
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    s3_etag: string | null;
    size: number | null;
    s3_upload_id: string | null;
    s3_metadata: string | null;
    s3_version_id: string | null;
    s3_parts: string | null;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    is_deleted?: number | undefined;
}>, {
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string[];
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    metadata_metadata?: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
    } | undefined;
    s3_etag?: string | undefined;
    size?: number | undefined;
    s3_upload_id?: string | undefined;
    s3_metadata?: {
        $metadata: {
            attempts: number;
            httpStatusCode: number;
            requestId: string;
            totalRetryDelay: number;
        };
        Bucket: string;
        ETag: string;
        Key: string;
        Location: string;
        VersionId: string;
    } | undefined;
    s3_version_id?: string | undefined;
    s3_parts?: number[] | undefined;
}, {
    metadata_metadata: string | null;
    tenant_id: string;
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    tags: string;
    asset_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    s3_etag: string | null;
    size: number | null;
    s3_upload_id: string | null;
    s3_metadata: string | null;
    s3_version_id: string | null;
    s3_parts: string | null;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    is_deleted?: number | undefined;
}>;
//# sourceMappingURL=upload.schema.d.ts.map