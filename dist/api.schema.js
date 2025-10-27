// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { Asset, PresignedPosterUrl } from './asset.schema.js';
import { Upload } from './upload.schema.js';
import { JsonPatchOperation } from './patch-operation.schema.js';
// #region Errors
export const ErrorResponse = z.object({
    code: z.string()
        .describe('Error code representing the type of error.'),
    message: z.string()
        .describe('Error message describing the issue.'),
    detail: z.string()
        .describe('Additional details about the error, if available.'),
    timestamp: z.iso.datetime()
        .describe('Timestamp when the error occurred (ISO_8601 format).'),
})
    .describe('Error response schema');
// #endregion
// #region WebHook
export const WebHookRequest = z.object({
    ref_id: z.string(),
    class: z.string(),
})
    .describe('WebHook request schema');
export const WebHookResponse = z.object({})
    .describe('WebHook response schema');
// #endregion
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
export const UpdateAssetRequest = z.array(JsonPatchOperation)
    .describe('Update asset request schema');
export const UpdateAssetResponse = Asset
    .describe('Update asset response schema');
export const ListAssetPostersRequest = z.object({})
    .describe('List asset posters request schema');
export const ListAssetPostersResponse = z.array(PresignedPosterUrl)
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
export const CreateUploadRequest = z.object({
    filename: z.string()
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
export const UpdateUploadRequest = z.array(JsonPatchOperation)
    .describe('Update upload request schema');
export const UpdateUploadResponse = z.object({})
    .describe('Update upload response schema');
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
//# sourceMappingURL=api.schema.js.map