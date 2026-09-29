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
export type ListAssetsRequest = z.infer<typeof ListAssetsRequestSchema>;
export const ListAssetsResponseSchema = z.object({
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
})
	.describe('List assets response schema');
export type ListAssetsResponse = z.infer<typeof ListAssetsResponseSchema>;

export const ListDeletedAssetsRequestSchema = z.object({})
	.describe('List deleted assets request schema');
export type ListDeletedAssetsRequest = z.infer<typeof ListDeletedAssetsRequestSchema>;
export const ListDeletedAssetsResponseSchema = z.object({
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
})
	.describe('List deleted assets response schema');
export type ListDeletedAssetsResponse = z.infer<typeof ListDeletedAssetsResponseSchema>;

export const GetAssetSuggestionsRequestSchema = z.object({})
	.describe('Get asset suggestions request schema');
export type GetAssetSuggestionsRequest = z.infer<typeof GetAssetSuggestionsRequestSchema>;
export const GetAssetSuggestionsResponseSchema = z.object({
	c: z.string()
		.describe('Asset name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Asset name suggestions for given input'),
})
	.describe('Get asset suggestions response schema');
export type GetAssetSuggestionsResponse = z.infer<typeof GetAssetSuggestionsResponseSchema>;

export const GetAssetAvailabilityRequestSchema = z.object({})
	.describe('Get asset availability request schema');
export type GetAssetAvailabilityRequest = z.infer<typeof GetAssetAvailabilityRequestSchema>;
export const GetAssetAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the asset name is available'),
})
	.describe('Get asset availability response schema');
export type GetAssetAvailabilityResponse = z.infer<typeof GetAssetAvailabilityResponseSchema>;

export const GetAssetRequestSchema = z.object({})
	.describe('Get asset request schema');
export type GetAssetRequest = z.infer<typeof GetAssetRequestSchema>;
export const GetAssetResponseSchema = AssetSchema
	.describe('Get asset response schema');
export type GetAssetResponse = z.infer<typeof GetAssetResponseSchema>;

export const DeleteAssetRequestSchema = z.object({})
	.describe('Delete asset request schema');
export type DeleteAssetRequest = z.infer<typeof DeleteAssetRequestSchema>;
export const DeleteAssetResponseSchema = z.object({})
	.describe('Delete asset response schema');
export type DeleteAssetResponse = z.infer<typeof DeleteAssetResponseSchema>;

export const RecoverAssetRequestSchema = z.object({})
	.describe('Recover asset request schema');
export type RecoverAssetRequest = z.infer<typeof RecoverAssetRequestSchema>;
export const RecoverAssetResponseSchema = AssetSchema
	.describe('Recover asset response schema');
export type RecoverAssetResponse = z.infer<typeof RecoverAssetResponseSchema>;

export const GetAssetDownloadLocationRequestSchema = z.object({})
	.describe('Get download location request schema');
export type GetAssetDownloadLocationRequest = z.infer<typeof GetAssetDownloadLocationRequestSchema>;
export const GetAssetDownloadLocationResponseSchema = z.object({
	url: z.url(),
	expires: z.iso.datetime(),
})
	.describe('Get download location response schema');
export type GetAssetDownloadLocationResponse = z.infer<typeof GetAssetDownloadLocationResponseSchema>;

export const PatchAssetRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Patch asset request schema');
export type PatchAssetRequest = z.infer<typeof PatchAssetRequestSchema>;
export const PatchAssetResponseSchema = AssetSchema
	.describe('Patch asset response schema');
export type PatchAssetResponse = z.infer<typeof PatchAssetResponseSchema>;

export const ListAssetPostersRequestSchema = z.object({})
	.describe('List asset posters request schema');
export type ListAssetPostersRequest = z.infer<typeof ListAssetPostersRequestSchema>;
export const ListAssetPostersResponseSchema = z.array(PresignedIndexedUrlSchema)
	.describe('List asset posters response schema');
export type ListAssetPostersResponse = z.infer<typeof ListAssetPostersResponseSchema>;

export const UpdateAssetPosterRequestSchema = z.coerce.number().min(1).max(3)
	.describe('Update asset poster request schema');
export type UpdateAssetPosterRequest = z.infer<typeof UpdateAssetPosterRequestSchema>;
export const UpdateAssetPosterResponseSchema = z.object({})
	.describe('Update asset poster response schema');
export type UpdateAssetPosterResponse = z.infer<typeof UpdateAssetPosterResponseSchema>;

export const GetAssetPosterRequestSchema = z.object({})
	.describe('Get asset poster request schema');
export type GetAssetPosterRequest = z.infer<typeof GetAssetPosterRequestSchema>;
export const GetAssetPosterResponseSchema = z.url()
	.describe('Get asset poster response schema');
export type GetAssetPosterResponse = z.infer<typeof GetAssetPosterResponseSchema>;

export const GetAssetThumbnailRequestSchema = z.object({})
	.describe('Get asset thumbnail request schema');
export type GetAssetThumbnailRequest = z.infer<typeof GetAssetThumbnailRequestSchema>;
export const GetAssetThumbnailResponseSchema = z.url()
	.describe('Get asset thumbnail response schema');
export type GetAssetThumbnailResponse = z.infer<typeof GetAssetThumbnailResponseSchema>;
// #endregion

// #region Uploads
export const ListUploadsRequestSchema = z.object({})
	.describe('List uploads request schema');
export type ListUploadsRequest = z.infer<typeof ListUploadsRequestSchema>;
export const ListUploadsResponseSchema = z.object({
	uploads: z.array(UploadSchema),
	next_token: z.string().nullable(),
})
	.describe('List uploads response schema');
export type ListUploadsResponse = z.infer<typeof ListUploadsResponseSchema>;

export const CreateUploadRequestSchema = z.object({
	filename: z.string()
		.describe('Original name of the file to be uploaded.'),
	user_tags: z.array(z.string().max(64)).optional()
		.describe('List of user-defined tags associated with the upload.'),
	system_tags: z.array(z.string().max(64)).optional()
		.describe('List of system-defined tags associated with the upload.'),
})
	.describe('Create upload request schema');
export type CreateUploadRequest = z.infer<typeof CreateUploadRequestSchema>;
export const CreateUploadResponseSchema = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
})
	.describe('Create upload response schema');
export type CreateUploadResponse = z.infer<typeof CreateUploadResponseSchema>;

export const GetUploadRequestSchema = z.object({})
	.describe('Get upload request schema');
export type GetUploadRequest = z.infer<typeof GetUploadRequestSchema>;
export const GetUploadResponseSchema = UploadSchema
	.describe('Get upload response schema');
export type GetUploadResponse = z.infer<typeof GetUploadResponseSchema>;

export const CreateUploadVersionRequestSchema = z.object({
	filename: z.string()
})
	.describe('Create upload version request schema');
export type CreateUploadVersionRequest = z.infer<typeof CreateUploadVersionRequestSchema>;
export const CreateUploadVersionResponseSchema = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload version.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
})
	.describe('Create upload version response schema');
export type CreateUploadVersionResponse = z.infer<typeof CreateUploadVersionResponseSchema>;

export const CreateUploadUrlRequestSchema = z.object({
	partNumber: z.number()
		.describe('Part number for the upload.'),
})
	.describe('Create upload URL request schema');
export type CreateUploadUrlRequest = z.infer<typeof CreateUploadUrlRequestSchema>;
export const CreateUploadUrlResponseSchema = z.object({
	url: z.string()
		.describe('Presigned URL for uploading the asset.'),
	expires: z.iso.datetime()
		.describe('Expiration date and time of the presigned URL (ISO_8601 format).'),
})
	.describe('Create upload URL response schema');
export type CreateUploadUrlResponse = z.infer<typeof CreateUploadUrlResponseSchema>;

export const UploadPartRequestSchema = z.object({
	partNumber: z.number()
		.describe('Part number for the upload.'),
	ETag: z.string()
		.describe('ETag of the uploaded part, used for validation.'),
	size: z.number()
		.describe('Size of the uploaded part in bytes.'),
})
	.describe('Upload part request schema');
export type UploadPartRequest = z.infer<typeof UploadPartRequestSchema>;
export const UploadPartResponseSchema = z.object({})
	.describe('Upload part response schema');
export type UploadPartResponse = z.infer<typeof UploadPartResponseSchema>;

export const PatchUploadRequestSchema = z.array(JsonPatchOperationSchema).max(50)
	.describe('Patch upload request schema');
export type PatchUploadRequest = z.infer<typeof PatchUploadRequestSchema>;
export const PatchUploadResponseSchema = z.object({})
	.describe('Patch upload response schema');
export type PatchUploadResponse = z.infer<typeof PatchUploadResponseSchema>;

export const UploadCompleteRequestSchema = z.object({})
	.describe('Upload complete request schema');
export type UploadCompleteRequest = z.infer<typeof UploadCompleteRequestSchema>;
export const UploadCompleteResponseSchema = z.object({})
	.describe('Upload complete response schema');
export type UploadCompleteResponse = z.infer<typeof UploadCompleteResponseSchema>;

export const UploadPollRequestSchema = z.object({})
	.describe('Upload poll request schema');
export type UploadPollRequest = z.infer<typeof UploadPollRequestSchema>;
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
export type UploadPollResponse = z.infer<typeof UploadPollResponseSchema>;

export const CreateAssetFromUploadRequestSchema = z.object({})
	.describe('Create asset from upload request schema');
export type CreateAssetFromUploadRequest = z.infer<typeof CreateAssetFromUploadRequestSchema>;
export const CreateAssetFromUploadResponseSchema = AssetSchema
	.describe('Create asset from upload response schema');
export type CreateAssetFromUploadResponse = z.infer<typeof CreateAssetFromUploadResponseSchema>;

export const CreateAssetFromUploadVersionRequestSchema = z.object({})
	.describe('Create asset from upload version request schema');
export type CreateAssetFromUploadVersionRequest = z.infer<typeof CreateAssetFromUploadVersionRequestSchema>;
export const CreateAssetFromUploadVersionResponseSchema = AssetSchema
	.describe('Create asset from upload version response schema');
export type CreateAssetFromUploadVersionResponse = z.infer<typeof CreateAssetFromUploadVersionResponseSchema>;
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
export type DamAssetRequest = z.infer<typeof DamAssetRequestSchema>;

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
export type DamUploadRequest = z.infer<typeof DamUploadRequestSchema>;

export const DamRequestSchema = z.union([
	DamAssetRequestSchema,
	DamUploadRequestSchema,
])
	.describe('DAM API request schema');
export type DamRequest = z.infer<typeof DamRequestSchema>;

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
export type DamAssetResponse = z.infer<typeof DamAssetResponseSchema>;

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
export type DamUploadResponse = z.infer<typeof DamUploadResponseSchema>;

// `DamResponse` exceeds the maximum length the compiler will serialize.
export type DamResponse = DamAssetResponse | DamUploadResponse;
// #endregion
