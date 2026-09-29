// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { AssetSchema } from './asset.schema.js';
import { JsonPatchOperationSchema } from './patch-operation.schema.js';
import { PresignedIndexedUrlSchema } from './presigned-url.schema.js';
import { UploadSchema } from './upload.schema.js';
// #region Assets
export const ListAssetsRequestSchema = z.object({})
    .describe('List assets request schema');
export const ListAssetsResponseSchema = z.object({
    assets: z.array(AssetSchema),
    next_token: z.string().nullable(),
})
    .describe('List assets response schema');
export const ListDeletedAssetsRequestSchema = z.object({})
    .describe('List deleted assets request schema');
export const ListDeletedAssetsResponseSchema = z.object({
    assets: z.array(AssetSchema),
    next_token: z.string().nullable(),
})
    .describe('List deleted assets response schema');
export const GetAssetSuggestionsRequestSchema = z.object({})
    .describe('Get asset suggestions request schema');
export const GetAssetSuggestionsResponseSchema = z.object({
    c: z.string()
        .describe('Asset name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Asset name suggestions for given input'),
})
    .describe('Get asset suggestions response schema');
export const GetAssetAvailabilityRequestSchema = z.object({})
    .describe('Get asset availability request schema');
export const GetAssetAvailabilityResponseSchema = z.object({
    is_available: z.boolean()
        .describe('Indicates if the asset name is available'),
})
    .describe('Get asset availability response schema');
export const GetAssetRequestSchema = z.object({})
    .describe('Get asset request schema');
export const GetAssetResponseSchema = AssetSchema
    .describe('Get asset response schema');
export const DeleteAssetRequestSchema = z.object({})
    .describe('Delete asset request schema');
export const DeleteAssetResponseSchema = z.object({})
    .describe('Delete asset response schema');
export const RecoverAssetRequestSchema = z.object({})
    .describe('Recover asset request schema');
export const RecoverAssetResponseSchema = AssetSchema
    .describe('Recover asset response schema');
export const GetAssetDownloadLocationRequestSchema = z.object({})
    .describe('Get download location request schema');
export const GetAssetDownloadLocationResponseSchema = z.object({
    url: z.url(),
    expires: z.iso.datetime(),
})
    .describe('Get download location response schema');
export const PatchAssetRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Patch asset request schema');
export const PatchAssetResponseSchema = AssetSchema
    .describe('Patch asset response schema');
export const ListAssetPostersRequestSchema = z.object({})
    .describe('List asset posters request schema');
export const ListAssetPostersResponseSchema = z.array(PresignedIndexedUrlSchema)
    .describe('List asset posters response schema');
export const UpdateAssetPosterRequestSchema = z.coerce.number().min(1).max(3)
    .describe('Update asset poster request schema');
export const UpdateAssetPosterResponseSchema = z.object({})
    .describe('Update asset poster response schema');
export const GetAssetPosterRequestSchema = z.object({})
    .describe('Get asset poster request schema');
export const GetAssetPosterResponseSchema = z.url()
    .describe('Get asset poster response schema');
export const GetAssetThumbnailRequestSchema = z.object({})
    .describe('Get asset thumbnail request schema');
export const GetAssetThumbnailResponseSchema = z.url()
    .describe('Get asset thumbnail response schema');
// #endregion
// #region Uploads
export const ListUploadsRequestSchema = z.object({})
    .describe('List uploads request schema');
export const ListUploadsResponseSchema = z.object({
    uploads: z.array(UploadSchema),
    next_token: z.string().nullable(),
})
    .describe('List uploads response schema');
export const CreateUploadRequestSchema = z.object({
    filename: z.string()
        .describe('Original name of the file to be uploaded.'),
    user_tags: z.array(z.string().max(64)).optional()
        .describe('List of user-defined tags associated with the upload.'),
    system_tags: z.array(z.string().max(64)).optional()
        .describe('List of system-defined tags associated with the upload.'),
})
    .describe('Create upload request schema');
export const CreateUploadResponseSchema = z.object({
    uploadId: z.string()
        .describe('Unique identifier of the upload.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
})
    .describe('Create upload response schema');
export const GetUploadRequestSchema = z.object({})
    .describe('Get upload request schema');
export const GetUploadResponseSchema = UploadSchema
    .describe('Get upload response schema');
export const CreateUploadVersionRequestSchema = z.object({
    filename: z.string()
})
    .describe('Create upload version request schema');
export const CreateUploadVersionResponseSchema = z.object({
    uploadId: z.string()
        .describe('Unique identifier of the upload version.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
})
    .describe('Create upload version response schema');
export const CreateUploadUrlRequestSchema = z.object({
    partNumber: z.number()
        .describe('Part number for the upload.'),
})
    .describe('Create upload URL request schema');
export const CreateUploadUrlResponseSchema = z.object({
    url: z.string()
        .describe('Presigned URL for uploading the asset.'),
    expires: z.iso.datetime()
        .describe('Expiration date and time of the presigned URL (ISO_8601 format).'),
})
    .describe('Create upload URL response schema');
export const UploadPartRequestSchema = z.object({
    partNumber: z.number()
        .describe('Part number for the upload.'),
    ETag: z.string()
        .describe('ETag of the uploaded part, used for validation.'),
    size: z.number()
        .describe('Size of the uploaded part in bytes.'),
})
    .describe('Upload part request schema');
export const UploadPartResponseSchema = z.object({})
    .describe('Upload part response schema');
export const PatchUploadRequestSchema = z.array(JsonPatchOperationSchema).max(50)
    .describe('Patch upload request schema');
export const PatchUploadResponseSchema = z.object({})
    .describe('Patch upload response schema');
export const UploadCompleteRequestSchema = z.object({})
    .describe('Upload complete request schema');
export const UploadCompleteResponseSchema = z.object({})
    .describe('Upload complete response schema');
export const UploadPollRequestSchema = z.object({})
    .describe('Upload poll request schema');
export const UploadPollResponseSchema = z.object({
    itemsDone: z.array(z.string())
        .describe('List of upload IDs that have been successfully completed.'),
    itemsFailed: z.array(z.string())
        .describe('List of upload IDs that have failed.'),
    itemsRejected: z.array(z.string())
        .describe('List of upload IDs that have been rejected.'),
    itemsProgress: z.array(z.string())
        .describe('List of upload IDs that are still in progress.'),
})
    .describe('Upload poll response schema');
export const CreateAssetFromUploadRequestSchema = z.object({})
    .describe('Create asset from upload request schema');
export const CreateAssetFromUploadResponseSchema = AssetSchema
    .describe('Create asset from upload response schema');
export const CreateAssetFromUploadVersionRequestSchema = z.object({})
    .describe('Create asset from upload version request schema');
export const CreateAssetFromUploadVersionResponseSchema = AssetSchema
    .describe('Create asset from upload version response schema');
// #endregion
// #region API
export const DamAssetRequestSchema = z.union([
    ListAssetsRequestSchema,
    ListDeletedAssetsRequestSchema,
    GetAssetSuggestionsRequestSchema,
    GetAssetAvailabilityRequestSchema,
    GetAssetRequestSchema,
    DeleteAssetRequestSchema,
    RecoverAssetRequestSchema,
    GetAssetDownloadLocationRequestSchema,
    PatchAssetRequestSchema,
    ListAssetPostersRequestSchema,
    UpdateAssetPosterRequestSchema,
    GetAssetPosterRequestSchema,
    GetAssetThumbnailRequestSchema,
])
    .describe('DAM API request schema');
export const DamUploadRequestSchema = z.union([
    ListUploadsRequestSchema,
    CreateUploadRequestSchema,
    GetUploadRequestSchema,
    CreateUploadVersionRequestSchema,
    CreateUploadUrlRequestSchema,
    UploadPartRequestSchema,
    PatchUploadRequestSchema,
    UploadCompleteRequestSchema,
    UploadPollRequestSchema,
    CreateAssetFromUploadRequestSchema,
    CreateAssetFromUploadVersionRequestSchema,
])
    .describe('DAM API request schema');
export const DamRequestSchema = z.union([
    DamAssetRequestSchema,
    DamUploadRequestSchema,
])
    .describe('DAM API request schema');
export const DamAssetResponseSchema = z.union([
    ListAssetsResponseSchema,
    ListDeletedAssetsResponseSchema,
    GetAssetSuggestionsResponseSchema,
    GetAssetAvailabilityResponseSchema,
    GetAssetResponseSchema,
    DeleteAssetResponseSchema,
    RecoverAssetResponseSchema,
    GetAssetDownloadLocationResponseSchema,
    PatchAssetResponseSchema,
    ListAssetPostersResponseSchema,
    UpdateAssetPosterResponseSchema,
    GetAssetPosterResponseSchema,
    GetAssetThumbnailResponseSchema,
    ErrorResponseSchema,
])
    .describe('DAM API response schema');
export const DamUploadResponseSchema = z.union([
    ListUploadsResponseSchema,
    CreateUploadResponseSchema,
    GetUploadResponseSchema,
    CreateUploadVersionResponseSchema,
    CreateUploadUrlResponseSchema,
    UploadPartResponseSchema,
    PatchUploadResponseSchema,
    UploadCompleteResponseSchema,
    UploadPollResponseSchema,
    CreateAssetFromUploadResponseSchema,
    CreateAssetFromUploadVersionResponseSchema,
    ErrorResponseSchema,
])
    .describe('DAM API response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map