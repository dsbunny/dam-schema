import { z } from 'zod';
export declare const UploadStateEnum: z.ZodEnum<{
    pending: "pending";
    error: "error";
    uploading: "uploading";
    uploaded: "uploaded";
}>;
export type UploadStateEnum = z.infer<typeof UploadStateEnum>;
export declare const CanSaveStatus: z.ZodObject<{
    upload_id: z.ZodUUID;
    can_save: z.ZodBoolean;
    is_rejected: z.ZodBoolean;
    has_error: z.ZodBoolean;
    is_pending: z.ZodBoolean;
    is_processing: z.ZodBoolean;
    modify_timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type CanSaveStatus = z.infer<typeof CanSaveStatus>;
export declare const DbDtoToCanSaveStatus: z.ZodPipe<z.ZodObject<{
    upload_id: z.ZodUUID;
    can_save: z.ZodNumber;
    is_rejected: z.ZodNumber;
    has_error: z.ZodNumber;
    is_pending: z.ZodNumber;
    is_processing: z.ZodNumber;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
}, {}, {}>, z.ZodTransform<{
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
export declare const SaveStateEnum: z.ZodEnum<{
    pending: "pending";
    error: "error";
    saving: "saving";
    saved: "saved";
    conflict: "conflict";
}>;
export type SaveStateEnum = z.infer<typeof SaveStateEnum>;
export declare const S3Metadata: z.ZodObject<{
    $metadata: z.ZodObject<{
        attempts: z.ZodNumber;
        httpStatusCode: z.ZodNumber;
        requestId: z.ZodString;
        totalRetryDelay: z.ZodNumber;
    }, {}, {}>;
    Bucket: z.ZodString;
    ETag: z.ZodString;
    Key: z.ZodString;
    Location: z.ZodString;
    VersionId: z.ZodString;
}, {}, {}>;
export type S3Metadata = z.infer<typeof S3Metadata>;
export declare const S3Parts: z.ZodArray<z.ZodNumber>;
export type S3Parts = z.infer<typeof S3Parts>;
export declare const UploadMetadata: z.ZodRecord<z.ZodString, z.ZodString>;
export type UploadMetadata = z.infer<typeof UploadMetadata>;
export declare const Upload: z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, {}, {}>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, {}, {}>>;
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodURL;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
    }, {}, {}>>;
    upload_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        uploading: "uploading";
        uploaded: "uploaded";
    }>;
    s3_complete_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        completing: "completing";
        completed: "completed";
    }>;
    metadata_state: z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        processed: "processed";
        rejected: "rejected";
        error: "error";
    }>;
    save_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        saving: "saving";
        saved: "saved";
        conflict: "conflict";
    }>;
    user_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type Upload = z.infer<typeof Upload>;
export declare const ValidatedUpload: z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, {}, {}>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, {}, {}>>;
    s3_version_id: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_etag: z.ZodNonOptional<z.ZodOptional<z.ZodString>>;
    s3_parts: z.ZodNonOptional<z.ZodOptional<z.ZodArray<z.ZodNumber>>>;
    size: z.ZodNonOptional<z.ZodOptional<z.ZodNumber>>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodURL;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
    }, {}, {}>>;
    upload_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        uploading: "uploading";
        uploaded: "uploaded";
    }>;
    s3_complete_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        completing: "completing";
        completed: "completed";
    }>;
    metadata_state: z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        processed: "processed";
        rejected: "rejected";
        error: "error";
    }>;
    save_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        saving: "saving";
        saved: "saved";
        conflict: "conflict";
    }>;
    user_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>;
export type ValidatedUpload = z.infer<typeof ValidatedUpload>;
export declare const DbDtoFromUpload: z.ZodPipe<z.ZodObject<{
    upload_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    asset_id: z.ZodUUID;
    s3_upload_id: z.ZodOptional<z.ZodString>;
    s3_metadata: z.ZodOptional<z.ZodObject<{
        $metadata: z.ZodObject<{
            attempts: z.ZodNumber;
            httpStatusCode: z.ZodNumber;
            requestId: z.ZodString;
            totalRetryDelay: z.ZodNumber;
        }, {}, {}>;
        Bucket: z.ZodString;
        ETag: z.ZodString;
        Key: z.ZodString;
        Location: z.ZodString;
        VersionId: z.ZodString;
    }, {}, {}>>;
    s3_version_id: z.ZodOptional<z.ZodString>;
    s3_etag: z.ZodOptional<z.ZodString>;
    s3_parts: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    size: z.ZodOptional<z.ZodNumber>;
    origin_filename: z.ZodString;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    s3_uri: z.ZodURL;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
    }, {}, {}>>;
    upload_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        uploading: "uploading";
        uploaded: "uploaded";
    }>;
    s3_complete_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        completing: "completing";
        completed: "completed";
    }>;
    metadata_state: z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        processed: "processed";
        rejected: "rejected";
        error: "error";
    }>;
    save_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        saving: "saving";
        saved: "saved";
        conflict: "conflict";
    }>;
    user_tags: z.ZodArray<z.ZodString>;
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, {}, {}>, z.ZodTransform<{
    s3_metadata: string;
    s3_parts: string;
    metadata_metadata: string;
    user_tags: string;
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
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
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    user_tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
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
    s3_etag?: string | undefined;
    s3_parts?: number[] | undefined;
    size?: number | undefined;
    metadata_metadata?: {
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
        type: "metadata";
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    } | undefined;
}>>;
export declare const DbDtoToUpload: z.ZodPipe<z.ZodObject<{
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
    s3_uri: z.ZodURL;
    asset_name: z.ZodString;
    metadata_metadata: z.ZodNullable<z.ZodString>;
    upload_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        uploading: "uploading";
        uploaded: "uploaded";
    }>;
    s3_complete_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        completing: "completing";
        completed: "completed";
    }>;
    metadata_state: z.ZodEnum<{
        pending: "pending";
        processing: "processing";
        processed: "processed";
        rejected: "rejected";
        error: "error";
    }>;
    save_state: z.ZodEnum<{
        pending: "pending";
        error: "error";
        saving: "saving";
        saved: "saved";
        conflict: "conflict";
    }>;
    user_tags: z.ZodString;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    upload_id: string;
    tenant_id: string;
    asset_id: string;
    origin_filename: string;
    s3_filename: string;
    content_type: string;
    s3_uri: string;
    asset_name: string;
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    user_tags: string[];
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
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
    s3_etag?: string | undefined;
    s3_parts?: number[] | undefined;
    size?: number | undefined;
    metadata_metadata?: {
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
        type: "metadata";
        timings: {
            metadata_http_duration: number;
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
    upload_state: "pending" | "error" | "uploading" | "uploaded";
    s3_complete_state: "pending" | "error" | "completing" | "completed";
    metadata_state: "pending" | "processing" | "processed" | "rejected" | "error";
    save_state: "pending" | "error" | "saving" | "saved" | "conflict";
    user_tags: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
//# sourceMappingURL=upload.schema.d.ts.map