// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';
import { Asset, PresignedPosterUrl } from './asset.schema.js';
import { Upload } from './upload.schema.js';

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
export type ErrorResponse = z.infer<typeof ErrorResponse>;
// #endregion

// #region WebHook
export const WebHookRequest = z.object({
	ref_id: z.string(),
	class: z.string(),
})
	  .describe('WebHook request schema');
export type WebHookRequest = z.infer<typeof WebHookRequest>;

export const WebHookResponse = z.object({})
	  .describe('WebHook response schema');
export type WebHookResponse = z.infer<typeof WebHookResponse>;
// #endregion

// #region Assets
export const ListAssetsRequest = z.object({})
	.describe('List assets request schema');
export type ListAssetsRequest = z.infer<typeof ListAssetsRequest>;
export const ListAssetsResponse = z.object({
	assets: z.array(Asset),
	next_token: z.string().nullable(),
})
	.describe('List assets response schema');
export type ListAssetsResponse = z.infer<typeof ListAssetsResponse>;

export const ListDeletedAssetsRequest = z.object({})
	.describe('List deleted assets request schema');
export type ListDeletedAssetsRequest = z.infer<typeof ListDeletedAssetsRequest>;
export const ListDeletedAssetsResponse = z.object({
	assets: z.array(Asset),
	next_token: z.string().nullable(),
})
	.describe('List deleted assets response schema');
export type ListDeletedAssetsResponse = z.infer<typeof ListDeletedAssetsResponse>;

export const GetAssetSuggestionsRequest = z.object({})
	.describe('Get asset suggestions request schema');
export type GetAssetSuggestionsRequest = z.infer<typeof GetAssetSuggestionsRequest>;
export const GetAssetSuggestionsResponse = z.object({
	c: z.string()
		.describe('Asset name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Asset name suggestions for given input'),
})
	.describe('Get asset suggestions response schema');
export type GetAssetSuggestionsResponse = z.infer<typeof GetAssetSuggestionsResponse>;

export const GetAssetRequest = z.object({})
	.describe('Get asset request schema');
export type GetAssetRequest = z.infer<typeof GetAssetRequest>;
export const GetAssetResponse = Asset
	.describe('Get asset response schema');
export type GetAssetResponse = z.infer<typeof GetAssetResponse>;

export const DeleteAssetRequest = z.object({})
	.describe('Delete asset request schema');
export type DeleteAssetRequest = z.infer<typeof DeleteAssetRequest>;
export const DeleteAssetResponse = z.object({})
	.describe('Delete asset response schema');
export type DeleteAssetResponse = z.infer<typeof DeleteAssetResponse>;

export const RecoverAssetRequest = z.object({})
	.describe('Recover asset request schema');
export type RecoverAssetRequest = z.infer<typeof RecoverAssetRequest>;
export const RecoverAssetResponse = Asset
	.describe('Recover asset response schema');
export type RecoverAssetResponse = z.infer<typeof RecoverAssetResponse>;

export const GetAssetDownloadLocationRequest = z.object({})
	.describe('Get download location request schema');
export type GetAssetDownloadLocationRequest = z.infer<typeof GetAssetDownloadLocationRequest>;
export const GetAssetDownloadLocationResponse = z.object({
	url: z.url(),
	expires: z.iso.datetime(),
})
	.describe('Get download location response schema');
export type GetAssetDownloadLocationResponse = z.infer<typeof GetAssetDownloadLocationResponse>;

export const JsonPatchOperation = z.discriminatedUnion([
	z.object({ path: z.string(), op: z.literal('add'), value: z.any() }),
	z.object({ path: z.string(), op: z.literal('remove') }),
	z.object({ path: z.string(), op: z.literal('replace'), value: z.any() }),
	z.object({ path: z.string(), op: z.literal('move'), from: z.string() }),
	z.object({ path: z.string(), op: z.literal('copy'), from: z.string() }),
	z.object({ path: z.string(), op: z.literal('test'), value: z.any() }),
	z.object({ path: z.string(), op: z.literal('_get'), value: z.any() }),
])
	.describe('JSON Patch operation schema');
export type JsonPatchOperation = z.infer<typeof JsonPatchOperation>;

export const UpdateAssetRequest = z.array(JsonPatchOperation)
	.describe('Update asset request schema');
export type UpdateAssetRequest = z.infer<typeof UpdateAssetRequest>;
export const UpdateAssetResponse = Asset
	.describe('Update asset response schema');
export type UpdateAssetResponse = z.infer<typeof UpdateAssetResponse>;

export const ListAssetPostersRequest = z.object({})
	.describe('List asset posters request schema');
export type ListAssetPostersRequest = z.infer<typeof ListAssetPostersRequest>;
export const ListAssetPostersResponse = z.array(PresignedPosterUrl)
	.describe('List asset posters response schema');
export type ListAssetPostersResponse = z.infer<typeof ListAssetPostersResponse>;

export const UpdateAssetPosterRequest = z.coerce.number().min(1).max(3)
	.describe('Update asset poster request schema');
export type UpdateAssetPosterRequest = z.infer<typeof UpdateAssetPosterRequest>;
export const UpdateAssetPosterResponse = z.object({})
	.describe('Update asset poster response schema');
export type UpdateAssetPosterResponse = z.infer<typeof UpdateAssetPosterResponse>;

export const GetAssetPosterRequest = z.object({})
	.describe('Get asset poster request schema');
export type GetAssetPosterRequest = z.infer<typeof GetAssetPosterRequest>;
export const GetAssetPosterResponse = z.url()
	.describe('Get asset poster response schema');
export type GetAssetPosterResponse = z.infer<typeof GetAssetPosterResponse>;

export const GetAssetThumbnailRequest = z.object({})
	.describe('Get asset thumbnail request schema');
export type GetAssetThumbnailRequest = z.infer<typeof GetAssetThumbnailRequest>;
export const GetAssetThumbnailResponse = z.url()
	.describe('Get asset thumbnail response schema');
export type GetAssetThumbnailResponse = z.infer<typeof GetAssetThumbnailResponse>;
// #endregion

// #region Uploads
export const CreateUploadRequest = z.object({
	filename: z.string()
})
	.describe('Create upload request schema');
export type CreateUploadRequest = z.infer<typeof CreateUploadRequest>;
export const CreateUploadResponse = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
})
	.describe('Create upload response schema');
export type CreateUploadResponse = z.infer<typeof CreateUploadResponse>;

export const GetUploadRequest = z.object({})
	.describe('Get upload request schema');
export type GetUploadRequest = z.infer<typeof GetUploadRequest>;
export const GetUploadResponse = Upload
	.describe('Get upload response schema');
export type GetUploadResponse = z.infer<typeof GetUploadResponse>;

export const CreateUploadVersionRequest = z.object({
	filename: z.string()
})
	.describe('Create upload version request schema');
export type CreateUploadVersionRequest = z.infer<typeof CreateUploadVersionRequest>;
export const CreateUploadVersionResponse = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload version.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
})
	.describe('Create upload version response schema');
export type CreateUploadVersionResponse = z.infer<typeof CreateUploadVersionResponse>;

export const CreateUploadUrlRequest = z.object({
	partNumber: z.number()
		.describe('Part number for the upload.'),
})
	.describe('Create upload URL request schema');
export type CreateUploadUrlRequest = z.infer<typeof CreateUploadUrlRequest>;
export const CreateUploadUrlResponse = z.object({
	url: z.string()
		.describe('Presigned URL for uploading the asset.'),
	expires: z.iso.datetime()
		.describe('Expiration date and time of the presigned URL (ISO_8601 format).'),
})
	.describe('Create upload URL response schema');
export type CreateUploadUrlResponse = z.infer<typeof CreateUploadUrlResponse>;

export const UploadPartRequest = z.object({
	partNumber: z.number()
		.describe('Part number for the upload.'),
	ETag: z.string()
		.describe('ETag of the uploaded part, used for validation.'),
	size: z.number()
		.describe('Size of the uploaded part in bytes.'),
})
	.describe('Upload part request schema');
export type UploadPartRequest = z.infer<typeof UploadPartRequest>;
export const UploadPartResponse = z.object({})
	.describe('Upload part response schema');
export type UploadPartResponse = z.infer<typeof UploadPartResponse>;

export const UpdateUploadRequest = z.array(JsonPatchOperation)
	.describe('Update upload request schema');
export type UpdateUploadRequest = z.infer<typeof UpdateUploadRequest>;
export const UpdateUploadResponse = z.object({})
	.describe('Update upload response schema');
export type UpdateUploadResponse = z.infer<typeof UpdateUploadResponse>;

export const UploadCompleteRequest = z.object({})
	.describe('Upload complete request schema');
export type UploadCompleteRequest = z.infer<typeof UploadCompleteRequest>;
export const UploadCompleteResponse = z.object({})
	.describe('Upload complete response schema');
export type UploadCompleteResponse = z.infer<typeof UploadCompleteResponse>;

export const UploadPollRequest = z.object({})
	.describe('Upload poll request schema');
export type UploadPollRequest = z.infer<typeof UploadPollRequest>;
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
export type UploadPollResponse = z.infer<typeof UploadPollResponse>;

export const CreateAssetFromUploadRequest = z.object({})
	.describe('Create asset from upload request schema');
export type CreateAssetFromUploadRequest = z.infer<typeof CreateAssetFromUploadRequest>;
export const CreateAssetFromUploadResponse = Asset
	.describe('Create asset from upload response schema');
export type CreateAssetFromUploadResponse = z.infer<typeof CreateAssetFromUploadResponse>;

export const CreateAssetFromUploadVersionRequest = z.object({})
	.describe('Create asset from upload version request schema');
export type CreateAssetFromUploadVersionRequest = z.infer<typeof CreateAssetFromUploadVersionRequest>;
export const CreateAssetFromUploadVersionResponse = Asset
	.describe('Create asset from upload version response schema');
export type CreateAssetFromUploadVersionResponse = z.infer<typeof CreateAssetFromUploadVersionResponse>;
// #endregion
