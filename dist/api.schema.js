// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { ErrorResponse } from "@dsbunny/error-schema";
import { Asset } from './asset.schema.js';
import { JsonPatchOperation } from './patch-operation.schema.js';
import { PresignedIndexedUrl } from './presigned-url.schema.js';
import { Upload } from './upload.schema.js';
// #region Assets
export const ListAssetsRequest = z.object({})
    .describe('List assets request schema');
export const ListAssetsResponse = z.object({
    assets: z.array(Asset),
    next_token: z.string().nullable(),
})
    .describe('List assets response schema');
export const ListDeletedAssetsRequest = z.object({})
    .describe('List deleted assets request schema');
export const ListDeletedAssetsResponse = z.object({
    assets: z.array(Asset),
    next_token: z.string().nullable(),
})
    .describe('List deleted assets response schema');
export const GetAssetSuggestionsRequest = z.object({})
    .describe('Get asset suggestions request schema');
export const GetAssetSuggestionsResponse = z.object({
    c: z.string()
        .describe('Asset name auto-complete for given prefix'),
    s: z.array(z.string())
        .describe('Asset name suggestions for given input'),
})
    .describe('Get asset suggestions response schema');
export const GetAssetAvailabilityRequest = z.object({})
    .describe('Get asset availability request schema');
export const GetAssetAvailabilityResponse = z.object({
    is_available: z.boolean()
        .describe('Indicates if the asset name is available'),
})
    .describe('Get asset availability response schema');
export const GetAssetRequest = z.object({})
    .describe('Get asset request schema');
export const GetAssetResponse = Asset
    .describe('Get asset response schema');
export const DeleteAssetRequest = z.object({})
    .describe('Delete asset request schema');
export const DeleteAssetResponse = z.object({})
    .describe('Delete asset response schema');
export const RecoverAssetRequest = z.object({})
    .describe('Recover asset request schema');
export const RecoverAssetResponse = Asset
    .describe('Recover asset response schema');
export const GetAssetDownloadLocationRequest = z.object({})
    .describe('Get download location request schema');
export const GetAssetDownloadLocationResponse = z.object({
    url: z.url(),
    expires: z.iso.datetime(),
})
    .describe('Get download location response schema');
export const PatchAssetRequest = z.array(JsonPatchOperation).max(50)
    .describe('Patch asset request schema');
export const PatchAssetResponse = Asset
    .describe('Patch asset response schema');
export const ListAssetPostersRequest = z.object({})
    .describe('List asset posters request schema');
export const ListAssetPostersResponse = z.array(PresignedIndexedUrl)
    .describe('List asset posters response schema');
export const UpdateAssetPosterRequest = z.coerce.number().min(1).max(3)
    .describe('Update asset poster request schema');
export const UpdateAssetPosterResponse = z.object({})
    .describe('Update asset poster response schema');
export const GetAssetPosterRequest = z.object({})
    .describe('Get asset poster request schema');
export const GetAssetPosterResponse = z.url()
    .describe('Get asset poster response schema');
export const GetAssetThumbnailRequest = z.object({})
    .describe('Get asset thumbnail request schema');
export const GetAssetThumbnailResponse = z.url()
    .describe('Get asset thumbnail response schema');
// #endregion
// #region Uploads
export const ListUploadsRequest = z.object({})
    .describe('List uploads request schema');
export const ListUploadsResponse = z.object({
    uploads: z.array(Upload),
    next_token: z.string().nullable(),
})
    .describe('List uploads response schema');
export const CreateUploadRequest = z.object({
    filename: z.string()
        .describe('Original name of the file to be uploaded.'),
    user_tags: z.array(z.string().max(64)).optional()
        .describe('List of user-defined tags associated with the upload.'),
    system_tags: z.array(z.string().max(64)).optional()
        .describe('List of system-defined tags associated with the upload.'),
})
    .describe('Create upload request schema');
export const CreateUploadResponse = z.object({
    uploadId: z.string()
        .describe('Unique identifier of the upload.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
})
    .describe('Create upload response schema');
export const GetUploadRequest = z.object({})
    .describe('Get upload request schema');
export const GetUploadResponse = Upload
    .describe('Get upload response schema');
export const CreateUploadVersionRequest = z.object({
    filename: z.string()
})
    .describe('Create upload version request schema');
export const CreateUploadVersionResponse = z.object({
    uploadId: z.string()
        .describe('Unique identifier of the upload version.'),
    assetName: z.string()
        .describe('Name of the asset to be uploaded.'),
})
    .describe('Create upload version response schema');
export const CreateUploadUrlRequest = z.object({
    partNumber: z.number()
        .describe('Part number for the upload.'),
})
    .describe('Create upload URL request schema');
export const CreateUploadUrlResponse = z.object({
    url: z.string()
        .describe('Presigned URL for uploading the asset.'),
    expires: z.iso.datetime()
        .describe('Expiration date and time of the presigned URL (ISO_8601 format).'),
})
    .describe('Create upload URL response schema');
export const UploadPartRequest = z.object({
    partNumber: z.number()
        .describe('Part number for the upload.'),
    ETag: z.string()
        .describe('ETag of the uploaded part, used for validation.'),
    size: z.number()
        .describe('Size of the uploaded part in bytes.'),
})
    .describe('Upload part request schema');
export const UploadPartResponse = z.object({})
    .describe('Upload part response schema');
export const PatchUploadRequest = z.array(JsonPatchOperation).max(50)
    .describe('Patch upload request schema');
export const PatchUploadResponse = z.object({})
    .describe('Patch upload response schema');
export const UploadCompleteRequest = z.object({})
    .describe('Upload complete request schema');
export const UploadCompleteResponse = z.object({})
    .describe('Upload complete response schema');
export const UploadPollRequest = z.object({})
    .describe('Upload poll request schema');
export const UploadPollResponse = z.object({
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
export const CreateAssetFromUploadRequest = z.object({})
    .describe('Create asset from upload request schema');
export const CreateAssetFromUploadResponse = Asset
    .describe('Create asset from upload response schema');
export const CreateAssetFromUploadVersionRequest = z.object({})
    .describe('Create asset from upload version request schema');
export const CreateAssetFromUploadVersionResponse = Asset
    .describe('Create asset from upload version response schema');
// #endregion
// #region API
export const DamAssetRequest = z.union([
    ListAssetsRequest,
    ListDeletedAssetsRequest,
    GetAssetSuggestionsRequest,
    GetAssetAvailabilityRequest,
    GetAssetRequest,
    DeleteAssetRequest,
    RecoverAssetRequest,
    GetAssetDownloadLocationRequest,
    PatchAssetRequest,
    ListAssetPostersRequest,
    UpdateAssetPosterRequest,
    GetAssetPosterRequest,
    GetAssetThumbnailRequest,
])
    .describe('DAM API request schema');
export const DamUploadRequest = z.union([
    ListUploadsRequest,
    CreateUploadRequest,
    GetUploadRequest,
    CreateUploadVersionRequest,
    CreateUploadUrlRequest,
    UploadPartRequest,
    PatchUploadRequest,
    UploadCompleteRequest,
    UploadPollRequest,
    CreateAssetFromUploadRequest,
    CreateAssetFromUploadVersionRequest,
])
    .describe('DAM API request schema');
export const DamRequest = z.union([
    DamAssetRequest,
    DamUploadRequest,
])
    .describe('DAM API request schema');
export const DamAssetResponse = z.union([
    ListAssetsResponse,
    ListDeletedAssetsResponse,
    GetAssetSuggestionsResponse,
    GetAssetAvailabilityResponse,
    GetAssetResponse,
    DeleteAssetResponse,
    RecoverAssetResponse,
    GetAssetDownloadLocationResponse,
    PatchAssetResponse,
    ListAssetPostersResponse,
    UpdateAssetPosterResponse,
    GetAssetPosterResponse,
    GetAssetThumbnailResponse,
    ErrorResponse,
])
    .describe('DAM API response schema');
export const DamUploadResponse = z.union([
    ListUploadsResponse,
    CreateUploadResponse,
    GetUploadResponse,
    CreateUploadVersionResponse,
    CreateUploadUrlResponse,
    UploadPartResponse,
    PatchUploadResponse,
    UploadCompleteResponse,
    UploadPollResponse,
    CreateAssetFromUploadResponse,
    CreateAssetFromUploadVersionResponse,
    ErrorResponse,
])
    .describe('DAM API response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map