// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { AssetSchema } from './asset.schema.js';
import { PresignedIndexedUrlSchema, PresignedUrlSchema, } from './presigned-url.schema.js';
import { UploadSchema } from './upload.schema.js';
// #region Assets
export const ListAssetsRequestSchema = z.object({
    '@type': z.literal('ListAssetsRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListAssetsRequestSchema',
    description: 'List assets request schema',
});
export const ListAssetsResponseSchema = z.object({
    '@type': z.literal('ListAssetsResponse'),
    assets: z.array(AssetSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListAssetsResponseSchema',
    description: 'List assets response schema',
});
export const ListDeletedAssetsRequestSchema = z.object({
    '@type': z.literal('ListDeletedAssetsRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListDeletedAssetsRequestSchema',
    description: 'List deleted assets request schema',
});
export const ListDeletedAssetsResponseSchema = z.object({
    '@type': z.literal('ListDeletedAssetsResponse'),
    assets: z.array(AssetSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListDeletedAssetsResponseSchema',
    description: 'List deleted assets response schema',
});
export const GetAssetSuggestionsRequestSchema = z.object({
    '@type': z.literal('GetAssetSuggestionsRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetSuggestionsRequestSchema',
    description: 'Get asset suggestions request schema',
});
export const GetAssetSuggestionsResponseSchema = z.object({
    '@type': z.literal('GetAssetSuggestionsResponse').optional(),
    c: z.string()
        .describe('Asset name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Asset name suggestions for given input'),
}).register(dsbunnyRegistry, {
    id: 'GetAssetSuggestionsResponseSchema',
    description: 'Get asset suggestions response schema',
});
export const GetAssetAvailabilityRequestSchema = z.object({
    '@type': z.literal('GetAssetAvailabilityRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetAvailabilityRequestSchema',
    description: 'Get asset availability request schema',
});
export const GetAssetAvailabilityResponseSchema = z.object({
    '@type': z.literal('GetAssetAvailabilityResponse'),
    is_available: z.boolean()
        .describe('Indicates if the asset name is available'),
}).register(dsbunnyRegistry, {
    id: 'GetAssetAvailabilityResponseSchema',
    description: 'Get asset availability response schema',
});
export const GetAssetRequestSchema = z.object({
    '@type': z.literal('GetAssetRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetRequestSchema',
    description: 'Get asset request schema',
});
export const GetAssetResponseSchema = z.object({
    '@type': z.literal('GetAssetResponse').optional(),
    asset: AssetSchema,
}).register(dsbunnyRegistry, {
    id: 'GetAssetResponseSchema',
    description: 'Get asset response schema',
});
export const DeleteAssetRequestSchema = z.object({
    '@type': z.literal('DeleteAssetRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'DeleteAssetRequestSchema',
    description: 'Delete asset request schema',
});
export const DeleteAssetResponseSchema = z.object({
    '@type': z.literal('DeleteAssetResponse'),
}).register(dsbunnyRegistry, {
    id: 'DeleteAssetResponseSchema',
    description: 'Delete asset response schema',
});
export const RecoverAssetBodySchema = z.object({
    '@type': z.literal('RecoverAssetRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecoverAssetRequestSchema',
    description: 'Recover asset request schema',
});
/** @deprecated Use RecoverAssetBodySchema. */
export const RecoverAssetRequestSchema = RecoverAssetBodySchema;
export const RecoverAssetResponseSchema = z.object({
    '@type': z.literal('RecoverAssetResponse'),
    asset: AssetSchema,
}).register(dsbunnyRegistry, {
    id: 'RecoverAssetResponseSchema',
    description: 'Recover asset response schema',
});
export const GetAssetDownloadLocationRequestSchema = z.object({
    '@type': z.literal('GetAssetDownloadLocationRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetDownloadLocationRequestSchema',
    description: 'Get download location request schema',
});
export const GetAssetDownloadLocationResponseSchema = z.object({
    '@type': z.literal('GetAssetDownloadLocationResponse'),
    presigned_url: PresignedUrlSchema
        .describe('Presigned URL for downloading the asset'),
}).register(dsbunnyRegistry, {
    id: 'GetAssetDownloadLocationResponseSchema',
    description: 'Get download location response schema',
});
export const PatchAssetBodySchema = z.object({
    '@type': z.literal('PatchAssetRequest'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchAssetRequestSchema',
    description: 'Patch asset request schema',
});
/** @deprecated Use PatchAssetBodySchema. */
export const PatchAssetRequestSchema = PatchAssetBodySchema;
export const PatchAssetResponseSchema = z.object({
    '@type': z.literal('PatchAssetResponse'),
    asset: AssetSchema,
}).register(dsbunnyRegistry, {
    id: 'PatchAssetResponseSchema',
    description: 'Patch asset response schema',
});
export const ListAssetPostersRequestSchema = z.object({
    '@type': z.literal('ListAssetPostersRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListAssetPostersRequestSchema',
    description: 'List asset posters request schema',
});
export const ListAssetPostersResponseSchema = z.object({
    '@type': z.literal('ListAssetPostersResponse'),
    posters: z.array(PresignedIndexedUrlSchema)
        .describe('List of presigned URLs for asset posters'),
}).register(dsbunnyRegistry, {
    id: 'ListAssetPostersResponseSchema',
    description: 'List asset posters response schema',
});
export const UpdateAssetPosterRequestSchema = z.object({
    '@type': z.literal('UpdateAssetPosterRequest'),
    index: z.coerce.number().min(1).max(3)
        .describe('Index of the asset poster to update'),
}).register(dsbunnyRegistry, {
    id: 'UpdateAssetPosterRequestSchema',
    description: 'Update asset poster request schema',
});
export const UpdateAssetPosterResponseSchema = z.object({
    '@type': z.literal('UpdateAssetPosterResponse'),
}).register(dsbunnyRegistry, {
    id: 'UpdateAssetPosterResponseSchema',
    description: 'Update asset poster response schema',
});
export const GetAssetPosterRequestSchema = z.object({
    '@type': z.literal('GetAssetPosterRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetPosterRequestSchema',
    description: 'Get asset poster request schema',
});
export const GetAssetPosterResponseSchema = z.object({
    '@type': z.literal('GetAssetPosterResponse'),
    presigned_url: PresignedUrlSchema
        .describe('Presigned URL for the asset poster'),
}).register(dsbunnyRegistry, {
    id: 'GetAssetPosterResponseSchema',
    description: 'Get asset poster response schema',
});
export const GetAssetThumbnailRequestSchema = z.object({
    '@type': z.literal('GetAssetThumbnailRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetAssetThumbnailRequestSchema',
    description: 'Get asset thumbnail request schema',
});
export const GetAssetThumbnailResponseSchema = z.object({
    '@type': z.literal('GetAssetThumbnailResponse'),
    presigned_url: PresignedUrlSchema
        .describe('Presigned URL for the asset thumbnail'),
}).register(dsbunnyRegistry, {
    id: 'GetAssetThumbnailResponseSchema',
    description: 'Get asset thumbnail response schema',
});
export const RecreateAssetMetadataBodySchema = z.object({
    '@type': z.literal('RecreateAssetMetadataRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetMetadataRequestSchema',
    description: 'Recreate asset metadata request schema',
});
/** @deprecated Use RecreateAssetMetadataBodySchema. */
export const RecreateAssetMetadataRequestSchema = RecreateAssetMetadataBodySchema;
export const RecreateAssetMetadataResponseSchema = z.object({
    '@type': z.literal('RecreateAssetMetadataResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetMetadataResponseSchema',
    description: 'Recreate asset metadata response schema',
});
export const RecreateAssetAnimatedPosterBodySchema = z.object({
    '@type': z.literal('RecreateAssetAnimatedPosterRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetAnimatedPosterRequestSchema',
    description: 'Recreate asset animated poster request schema',
});
/** @deprecated Use RecreateAssetAnimatedPosterBodySchema. */
export const RecreateAssetAnimatedPosterRequestSchema = RecreateAssetAnimatedPosterBodySchema;
export const RecreateAssetAnimatedPosterResponseSchema = z.object({
    '@type': z.literal('RecreateAssetAnimatedPosterResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetAnimatedPosterResponseSchema',
    description: 'Recreate asset animated poster response schema',
});
export const RecreateAssetPosterSeriesBodySchema = z.object({
    '@type': z.literal('RecreateAssetPosterSeriesRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetPosterSeriesRequestSchema',
    description: 'Recreate asset poster series request schema',
});
/** @deprecated Use RecreateAssetPosterSeriesBodySchema. */
export const RecreateAssetPosterSeriesRequestSchema = RecreateAssetPosterSeriesBodySchema;
export const RecreateAssetPosterSeriesResponseSchema = z.object({
    '@type': z.literal('RecreateAssetPosterSeriesResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetPosterSeriesResponseSchema',
    description: 'Recreate asset poster series response schema',
});
export const RecreateAssetTileSeriesBodySchema = z.object({
    '@type': z.literal('RecreateAssetTileSeriesRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetTileSeriesRequestSchema',
    description: 'Recreate asset tile series request schema',
});
/** @deprecated Use RecreateAssetTileSeriesBodySchema. */
export const RecreateAssetTileSeriesRequestSchema = RecreateAssetTileSeriesBodySchema;
export const RecreateAssetTileSeriesResponseSchema = z.object({
    '@type': z.literal('RecreateAssetTileSeriesResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetTileSeriesResponseSchema',
    description: 'Recreate asset tile series response schema',
});
export const RecreateAssetPrevueBodySchema = z.object({
    '@type': z.literal('RecreateAssetPrevueRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetPrevueRequestSchema',
    description: 'Recreate asset prevue request schema',
});
/** @deprecated Use RecreateAssetPrevueBodySchema. */
export const RecreateAssetPrevueRequestSchema = RecreateAssetPrevueBodySchema;
export const RecreateAssetPrevueResponseSchema = z.object({
    '@type': z.literal('RecreateAssetPrevueResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetPrevueResponseSchema',
    description: 'Recreate asset prevue response schema',
});
export const RecreateAssetPosterBodySchema = z.object({
    '@type': z.literal('RecreateAssetPosterRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'RecreateAssetPosterRequestSchema',
    description: 'Recreate asset poster request schema',
});
/** @deprecated Use RecreateAssetPosterBodySchema. */
export const RecreateAssetPosterRequestSchema = RecreateAssetPosterBodySchema;
export const RecreateAssetPosterResponseSchema = z.object({
    '@type': z.literal('RecreateAssetPosterResponse'),
}).register(dsbunnyRegistry, {
    id: 'RecreateAssetPosterResponseSchema',
    description: 'Recreate asset poster response schema',
});
// #endregion
// #region Uploads
export const ListUploadsRequestSchema = z.object({
    '@type': z.literal('ListUploadsRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListUploadsRequestSchema',
    description: 'List uploads request schema',
});
export const ListUploadsResponseSchema = z.object({
    '@type': z.literal('ListUploadsResponse'),
    uploads: z.array(UploadSchema),
    next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
    id: 'ListUploadsResponseSchema',
    description: 'List uploads response schema',
});
export const CreateUploadBodySchema = z.object({
    '@type': z.literal('CreateUploadRequest'),
    filename: z.string()
        .describe('Original name of the file to be uploaded.'),
    user_tags: z.array(z.string().max(64)).optional()
        .describe('List of user-defined tags associated with the upload.'),
    system_tags: z.array(z.string().max(64)).optional()
        .describe('List of system-defined tags associated with the upload.'),
}).register(dsbunnyRegistry, {
    id: 'CreateUploadRequestSchema',
    description: 'Create upload request schema',
});
/** @deprecated Use CreateUploadBodySchema. */
export const CreateUploadRequestSchema = CreateUploadBodySchema;
export const CreateUploadResponseSchema = z.object({
    '@type': z.literal('CreateUploadResponse'),
    uploadId: z.string()
        .describe('Unique identifier of the upload.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
}).register(dsbunnyRegistry, {
    id: 'CreateUploadResponseSchema',
    description: 'Create upload response schema',
});
export const GetUploadRequestSchema = z.object({
    '@type': z.literal('GetUploadRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetUploadRequestSchema',
    description: 'Get upload request schema',
});
export const GetUploadResponseSchema = z.object({
    '@type': z.literal('GetUploadResponse'),
    upload: UploadSchema,
}).register(dsbunnyRegistry, {
    id: 'GetUploadResponseSchema',
    description: 'Get upload response schema',
});
export const CreateUploadVersionBodySchema = z.object({
    '@type': z.literal('CreateUploadVersionRequest'),
    filename: z.string()
}).register(dsbunnyRegistry, {
    id: 'CreateUploadVersionRequestSchema',
    description: 'Create upload version request schema',
});
/** @deprecated Use CreateUploadVersionBodySchema. */
export const CreateUploadVersionRequestSchema = CreateUploadVersionBodySchema;
export const CreateUploadVersionResponseSchema = z.object({
    '@type': z.literal('CreateUploadVersionResponse'),
    uploadId: z.string()
        .describe('Unique identifier of the upload version.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
}).register(dsbunnyRegistry, {
    id: 'CreateUploadVersionResponseSchema',
    description: 'Create upload version response schema',
});
export const CreateUploadUrlBodySchema = z.object({
    '@type': z.literal('CreateUploadUrlRequest'),
    partNumber: z.number()
        .describe('Part number for the upload.'),
}).register(dsbunnyRegistry, {
    id: 'CreateUploadUrlRequestSchema',
    description: 'Create upload URL request schema',
});
/** @deprecated Use CreateUploadUrlBodySchema. */
export const CreateUploadUrlRequestSchema = CreateUploadUrlBodySchema;
export const CreateUploadUrlResponseSchema = z.object({
    '@type': z.literal('CreateUploadUrlResponse'),
    presigned_url: PresignedUrlSchema
        .describe('Presigned URL for uploading the asset.'),
}).register(dsbunnyRegistry, {
    id: 'CreateUploadUrlResponseSchema',
    description: 'Create upload URL response schema',
});
export const UploadPartBodySchema = z.object({
    '@type': z.literal('UploadPartRequest'),
    partNumber: z.number()
        .describe('Part number for the upload.'),
    ETag: z.string()
        .describe('ETag of the uploaded part, used for validation.'),
    size: z.number()
        .describe('Size of the uploaded part in bytes.'),
}).register(dsbunnyRegistry, {
    id: 'UploadPartRequestSchema',
    description: 'Upload part request schema',
});
/** @deprecated Use UploadPartBodySchema. */
export const UploadPartRequestSchema = UploadPartBodySchema;
export const UploadPartResponseSchema = z.object({
    '@type': z.literal('UploadPartResponse'),
}).register(dsbunnyRegistry, {
    id: 'UploadPartResponseSchema',
    description: 'Upload part response schema',
});
export const PatchUploadBodySchema = z.object({
    '@type': z.literal('PatchUploadRequest'),
    patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
    id: 'PatchUploadRequestSchema',
    description: 'Patch upload request schema',
});
/** @deprecated Use PatchUploadBodySchema. */
export const PatchUploadRequestSchema = PatchUploadBodySchema;
export const PatchUploadResponseSchema = z.object({
    '@type': z.literal('PatchUploadResponse'),
    upload: UploadSchema
        .describe('The patched upload object.'),
}).register(dsbunnyRegistry, {
    id: 'PatchUploadResponseSchema',
    description: 'Patch upload response schema',
});
export const UploadCompleteBodySchema = z.object({
    '@type': z.literal('UploadCompleteRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'UploadCompleteRequestSchema',
    description: 'Upload complete request schema',
});
/** @deprecated Use UploadCompleteBodySchema. */
export const UploadCompleteRequestSchema = UploadCompleteBodySchema;
export const UploadCompleteResponseSchema = z.object({
    '@type': z.literal('UploadCompleteResponse'),
}).register(dsbunnyRegistry, {
    id: 'UploadCompleteResponseSchema',
    description: 'Upload complete response schema',
});
export const UploadPollRequestSchema = z.object({
    '@type': z.literal('UploadPollRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'UploadPollRequestSchema',
    description: 'Upload poll request schema',
});
export const UploadPollResponseSchema = z.object({
    '@type': z.literal('UploadPollResponse'),
    itemsDone: z.array(z.string())
        .describe('List of upload IDs that have been successfully completed.'),
    itemsFailed: z.array(z.string())
        .describe('List of upload IDs that have failed.'),
    itemsRejected: z.array(z.string())
        .describe('List of upload IDs that have been rejected.'),
    itemsProgress: z.array(z.string())
        .describe('List of upload IDs that are still in progress.'),
}).register(dsbunnyRegistry, {
    id: 'UploadPollResponseSchema',
    description: 'Upload poll response schema',
});
export const CreateAssetFromUploadBodySchema = z.object({
    '@type': z.literal('CreateAssetFromUploadRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadRequestSchema',
    description: 'Create asset from upload request schema',
});
/** @deprecated Use CreateAssetFromUploadBodySchema. */
export const CreateAssetFromUploadRequestSchema = CreateAssetFromUploadBodySchema;
export const CreateAssetFromUploadResponseSchema = z.object({
    '@type': z.literal('CreateAssetFromUploadResponse'),
    asset: AssetSchema,
}).register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadResponseSchema',
    description: 'Create asset from upload response schema',
});
export const CreateAssetFromUploadVersionBodySchema = z.object({
    '@type': z.literal('CreateAssetFromUploadVersionRequest'),
}).optional().register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadVersionRequestSchema',
    description: 'Create asset from upload version request schema',
});
/** @deprecated Use CreateAssetFromUploadVersionBodySchema. */
export const CreateAssetFromUploadVersionRequestSchema = CreateAssetFromUploadVersionBodySchema;
export const CreateAssetFromUploadVersionResponseSchema = z.object({
    '@type': z.literal('CreateAssetFromUploadVersionResponse'),
    asset: AssetSchema,
}).register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadVersionResponseSchema',
    description: 'Create asset from upload version response schema',
});
// #endregion
// #region API
export const DamAssetRequestSchema = z.union([
    ListAssetsRequestSchema,
    ListDeletedAssetsRequestSchema,
    GetAssetSuggestionsRequestSchema,
    GetAssetAvailabilityRequestSchema,
    GetAssetRequestSchema,
    DeleteAssetRequestSchema,
    RecoverAssetBodySchema,
    GetAssetDownloadLocationRequestSchema,
    PatchAssetBodySchema,
    ListAssetPostersRequestSchema,
    UpdateAssetPosterRequestSchema,
    GetAssetPosterRequestSchema,
    GetAssetThumbnailRequestSchema,
]).register(dsbunnyRegistry, {
    id: 'DamAssetRequestSchema',
    description: 'DAM asset request schema',
});
export const DamUploadRequestSchema = z.union([
    ListUploadsRequestSchema,
    CreateUploadBodySchema,
    GetUploadRequestSchema,
    CreateUploadVersionBodySchema,
    CreateUploadUrlBodySchema,
    UploadPartBodySchema,
    PatchUploadBodySchema,
    UploadCompleteBodySchema,
    UploadPollRequestSchema,
    CreateAssetFromUploadBodySchema,
    CreateAssetFromUploadVersionBodySchema,
]).register(dsbunnyRegistry, {
    id: 'DamUploadRequestSchema',
    description: 'DAM upload request schema',
});
export const DamRequestSchema = z.union([
    DamAssetRequestSchema,
    DamUploadRequestSchema,
]).register(dsbunnyRegistry, {
    id: 'DamRequestSchema',
    description: 'DAM API request schema',
});
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
]).register(dsbunnyRegistry, {
    id: 'DamAssetResponseSchema',
    description: 'DAM asset response schema'
});
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
]).register(dsbunnyRegistry, {
    id: 'DamUploadResponseSchema',
    description: 'DAM upload response schema'
});
// #endregion
export const UploadIdParamsSchema = z.object({ uploadId: z.string() }).register(dsbunnyRegistry, {
    id: 'UploadIdParamsSchema',
    description: 'UploadIdParams schema',
});
export const AssetIdParamsSchema = z.object({ assetId: z.string() }).register(dsbunnyRegistry, {
    id: 'AssetIdParamsSchema',
    description: 'AssetIdParams schema',
});
export const AssetVersionParamsSchema = z.object({ assetId: z.string(), versionNumber: z.string() }).register(dsbunnyRegistry, {
    id: 'AssetVersionParamsSchema',
    description: 'AssetVersionParams schema',
});
export const AssetUploadParamsSchema = z.object({ assetId: z.string(), uploadId: z.string() }).register(dsbunnyRegistry, {
    id: 'AssetUploadParamsSchema',
    description: 'AssetUploadParams schema',
});
export const GetAssetQuerySchema = z.object({ projection: z.array(z.string()).optional() }).register(dsbunnyRegistry, {
    id: 'GetAssetQuerySchema',
    description: 'GetAssetQuery schema',
});
export const PollUploadQuerySchema = z.object({ uploadId: z.array(z.string()) }).register(dsbunnyRegistry, {
    id: 'PollUploadQuerySchema',
    description: 'PollUploadQuery schema',
});
export const ListUploadsQuerySchema = z.object({ id: z.array(z.string()) }).register(dsbunnyRegistry, {
    id: 'ListUploadsQuerySchema',
    description: 'ListUploadsQuery schema',
});
export const ListAssetsQuerySchema = z.object({
    asset_type: z.string().optional(), sort_by: z.string().optional(), sort_dir: z.string().optional(),
    projection: z.array(z.string()).optional(), max_results: z.string().optional(), next_token: z.string().optional(),
    q: z.string().optional(), tags: z.array(z.string()).optional(), id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
    id: 'ListAssetsQuerySchema',
    description: 'ListAssetsQuery schema',
});
export const ListDeletedAssetsQuerySchema = z.object({
    asset_type: z.string().optional(), sort_by: z.string().optional(), sort_dir: z.string().optional(),
    projection: z.array(z.string()).optional(), max_results: z.string().optional(), next_token: z.string().optional(),
    q: z.string().optional(), tags: z.array(z.string()).optional(), id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
    id: 'ListDeletedAssetsQuerySchema',
    description: 'ListDeletedAssetsQuery schema',
});
export const GetAssetSuggestionsQuerySchema = z.object({ q: z.string() }).register(dsbunnyRegistry, {
    id: 'GetAssetSuggestionsQuerySchema',
    description: 'GetAssetSuggestionsQuery schema',
});
export const GetAssetAvailabilityQuerySchema = z.object({ name: z.string() }).register(dsbunnyRegistry, {
    id: 'GetAssetAvailabilityQuerySchema',
    description: 'GetAssetAvailabilityQuery schema',
});
export const GetAssetDownloadLocationQuerySchema = z.object({ version: z.string().optional() }).register(dsbunnyRegistry, {
    id: 'GetAssetDownloadLocationQuerySchema',
    description: 'GetAssetDownloadLocationQuery schema',
});
export const ListAssetPostersQuerySchema = z.object({ quality: z.string() }).register(dsbunnyRegistry, {
    id: 'ListAssetPostersQuerySchema',
    description: 'ListAssetPostersQuery schema',
});
export const GetAssetThumbnailQuerySchema = z.object({ version: z.string().optional() }).register(dsbunnyRegistry, {
    id: 'GetAssetThumbnailQuerySchema',
    description: 'GetAssetThumbnailQuery schema',
});
export const CreateAssetFromUploadQuerySchema = z.object({ projection: z.string() }).register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadQuerySchema',
    description: 'CreateAssetFromUploadQuery schema',
});
export const CreateAssetFromUploadVersionQuerySchema = z.object({ projection: z.string() }).register(dsbunnyRegistry, {
    id: 'CreateAssetFromUploadVersionQuerySchema',
    description: 'CreateAssetFromUploadVersionQuery schema',
});
//# sourceMappingURL=api.schema.js.map