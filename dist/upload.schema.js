// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { MetadataMetadata } from '@dsbunny/metadata-schema';
import { S3CompleteStateEnum } from './s3-complete-state.schema.js';
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { TranscodeStateEnum } from './transcode-state.js';
import { jsonSafeParser } from './json-safe-parser.js';
import { S3URI } from './uri.schema.js';
export const UploadStateEnum = z.enum([
    'pending',
    'uploading',
    'uploaded',
    'error',
])
    .describe('The state of the upload job');
export const CanSaveStatus = z.object({
    upload_id: z.uuid(),
    can_save: z.boolean(),
    is_rejected: z.boolean(),
    has_error: z.boolean(),
    is_pending: z.boolean(),
    is_processing: z.boolean(),
    modify_timestamp: z.iso.datetime(),
});
export const DbDtoToCanSaveStatus = z.object({
    upload_id: z.uuid(),
    can_save: z.number(),
    is_rejected: z.number(),
    has_error: z.number(),
    is_pending: z.number(),
    is_processing: z.number(),
    modify_timestamp: sqliteDateSchema,
})
    .transform((dto) => {
    return {
        ...dto,
        can_save: Boolean(dto.can_save),
        is_rejected: Boolean(dto.is_rejected),
        has_error: Boolean(dto.has_error),
        is_pending: Boolean(dto.is_pending),
        is_processing: Boolean(dto.is_processing),
    };
});
export const SaveStateEnum = z.enum([
    'pending',
    'saving',
    'saved',
    'conflict',
    'error',
])
    .describe('The state of saving the asset');
export const S3Metadata = z.object({
    "$metadata": z.object({
        attempts: z.number()
            .describe('The number of times this operation was attempted.'),
        httpStatusCode: z.number()
            .describe('The status code of the last HTTP response received for this operation.'),
        requestId: z.string()
            .describe('A unique identifier for the last request sent for this operation. Often requested by AWS service teams to aid in debugging.'),
        totalRetryDelay: z.number()
            .describe('The total amount of time (in milliseconds) that was spent waiting between retry attempts.'),
    })
        .describe('Metadata pertaining to this request.'),
    Bucket: z.string()
        .describe('The name of the bucket that contains the newly created object.'),
    ETag: z.string()
        .describe('Entity tag that identifies the newly created object\'s data.'),
    Key: z.string()
        .describe('The object key of the newly created object.'),
    Location: z.string()
        .describe('The URI that identifies the newly created object.'),
    VersionId: z.string()
        .describe('Version ID of the newly created object, in case the bucket has versioning turned on.'),
});
export const S3Parts = z.array(z.number().min(20).max(5497558138880)).min(1).max(10000);
export const UploadMetadata = z.record(z.string(), z.string().max(255));
export const Upload = z.object({
    upload_id: z.uuid()
        .describe('The upload ID'),
    tenant_id: z.uuid()
        .describe('The tenant ID of the upload'),
    asset_id: z.uuid()
        .describe('The asset ID of the upload'),
    s3_upload_id: z.string().min(2).max(2048).optional()
        .describe('The S3 upload ID of the upload'),
    s3_metadata: S3Metadata.optional()
        .describe('The S3 metadata of the upload'),
    s3_version_id: z.string().min(2).max(255).optional()
        .describe('The S3 version ID of the upload'),
    s3_etag: z.string().min(2).max(2048).optional()
        .describe('The S3 ETag of the upload'),
    s3_parts: S3Parts.optional()
        .describe('The S3 parts of the upload'),
    size: z.number().min(20).max(5497558138880).optional() // 5TB
        .describe('The size of the upload in bytes'),
    origin_filename: z.string().min(1).max(255)
        .describe('The original filename of the upload'),
    s3_filename: z.string().min(1).max(255)
        .describe('The normalized filename of the upload'),
    content_type: z.string().min(5).max(255)
        .describe('The content type of the upload'),
    s3_uri: S3URI.min(20).max(2048)
        .describe('The S3 URI of the upload'),
    asset_name: z.string().min(1).max(255)
        .describe('The asset name of the upload'),
    metadata_metadata: MetadataMetadata.optional()
        .describe('The metadata of the upload'),
    upload_state: UploadStateEnum
        .describe('The status of the upload job'),
    s3_complete_state: S3CompleteStateEnum
        .describe('The status of the upload completion'),
    metadata_state: TranscodeStateEnum
        .describe('The status of the metadata transcode'),
    save_state: SaveStateEnum
        .describe('The status of the asset save'),
    user_tags: z.array(z.string().max(64))
        .describe('The tags of the upload'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime when the upload was created'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime when the upload was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the upload is deleted'),
});
export const ValidatedUpload = Upload.required({
    s3_version_id: true,
    s3_etag: true,
    s3_parts: true,
    size: true,
});
export const DbDtoFromUpload = Upload.transform((upload) => {
    return {
        ...upload,
        s3_metadata: JSON.stringify(upload.s3_metadata),
        s3_parts: JSON.stringify(upload.s3_parts),
        metadata_metadata: JSON.stringify(upload.metadata_metadata),
        user_tags: JSON.stringify(upload.user_tags),
    };
});
export const DbDtoToUpload = z.object({
    upload_id: z.uuid(),
    tenant_id: z.uuid(),
    asset_id: z.uuid(),
    s3_upload_id: z.string().min(2).max(2048).nullable(),
    s3_metadata: z.string().max(65535).nullable(),
    s3_version_id: z.string().min(2).max(255).nullable(),
    s3_etag: z.string().min(2).max(2048).nullable(),
    s3_parts: z.string().max(65535).nullable(),
    size: z.number().min(20).max(5497558138880).nullable(), // 5TB
    origin_filename: z.string().min(1).max(255),
    s3_filename: z.string().min(1).max(255),
    content_type: z.string().min(5).max(255),
    s3_uri: S3URI.min(20).max(2048),
    asset_name: z.string().min(1).max(255),
    metadata_metadata: z.string().max(65535).nullable(),
    upload_state: UploadStateEnum,
    s3_complete_state: S3CompleteStateEnum,
    metadata_state: TranscodeStateEnum,
    save_state: SaveStateEnum,
    user_tags: z.string().max(65535),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto, ctx) => {
    const s3_metadata_result = !dto.s3_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(S3Metadata).safeParse(dto.s3_metadata);
    if (!s3_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid S3 metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const s3_parts_result = !dto.s3_parts
        ? { success: true, data: undefined }
        : jsonSafeParser(S3Parts).safeParse(dto.s3_parts);
    if (!s3_parts_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid S3 parts',
            fatal: true,
        });
        return z.NEVER;
    }
    const metadata_metadata_result = !dto.metadata_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(MetadataMetadata).safeParse(dto.metadata_metadata);
    if (!metadata_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid metadata-metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const user_tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.user_tags);
    if (!user_tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tags',
            fatal: true,
        });
        return z.NEVER;
    }
    return {
        ...dto,
        s3_upload_id: dto.s3_upload_id ?? undefined,
        s3_metadata: s3_metadata_result.data,
        s3_version_id: dto.s3_version_id ?? undefined,
        s3_etag: dto.s3_etag ?? undefined,
        s3_parts: s3_parts_result.data,
        size: dto.size ?? undefined,
        metadata_metadata: metadata_metadata_result.data,
        user_tags: user_tags_result.data,
        is_deleted: Boolean(dto.is_deleted),
    };
});
//# sourceMappingURL=upload.schema.js.map