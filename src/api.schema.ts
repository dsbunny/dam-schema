// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { AssetSchema } from './asset.schema.js';
import { PresignedIndexedUrlSchema } from './presigned-url.schema.js';
import { UploadSchema } from './upload.schema.js';

// #region Assets
export const ListAssetsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListAssetsRequestSchema',
	description: 'List assets request schema',
});
export type ListAssetsRequest = z.infer<typeof ListAssetsRequestSchema>;
export const ListAssetsResponseSchema = z.object({
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListAssetsResponseSchema',
	description: 'List assets response schema',
});
export type ListAssetsResponse = z.infer<typeof ListAssetsResponseSchema>;

export const ListDeletedAssetsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListDeletedAssetsRequestSchema',
	description: 'List deleted assets request schema',
});
export type ListDeletedAssetsRequest = z.infer<typeof ListDeletedAssetsRequestSchema>;
export const ListDeletedAssetsResponseSchema = z.object({
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListDeletedAssetsResponseSchema',
	description: 'List deleted assets response schema',
});
export type ListDeletedAssetsResponse = z.infer<typeof ListDeletedAssetsResponseSchema>;

export const GetAssetSuggestionsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetSuggestionsRequestSchema',
	description: 'Get asset suggestions request schema',
});
export type GetAssetSuggestionsRequest = z.infer<typeof GetAssetSuggestionsRequestSchema>;
export const GetAssetSuggestionsResponseSchema = z.object({
	c: z.string()
		.describe('Asset name auto-complete for given prefix'),
	s: z.array(z.string())
		.describe('Asset name suggestions for given input'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetSuggestionsResponseSchema',
	description: 'Get asset suggestions response schema',
});
export type GetAssetSuggestionsResponse = z.infer<typeof GetAssetSuggestionsResponseSchema>;

export const GetAssetAvailabilityRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetAvailabilityRequestSchema',
	description: 'Get asset availability request schema',
});
export type GetAssetAvailabilityRequest = z.infer<typeof GetAssetAvailabilityRequestSchema>;
export const GetAssetAvailabilityResponseSchema = z.object({
	is_available: z.boolean()
		.describe('Indicates if the asset name is available'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetAvailabilityResponseSchema',
	description: 'Get asset availability response schema',
});
export type GetAssetAvailabilityResponse = z.infer<typeof GetAssetAvailabilityResponseSchema>;

export const GetAssetRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetRequestSchema',
	description: 'Get asset request schema',
});
export type GetAssetRequest = z.infer<typeof GetAssetRequestSchema>;
export const GetAssetResponseSchema = AssetSchema.register(dsbunnyRegistry, {
	id: 'GetAssetResponseSchema',
	description: 'Get asset response schema',
});
export type GetAssetResponse = z.infer<typeof GetAssetResponseSchema>;

export const DeleteAssetRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeleteAssetRequestSchema',
	description: 'Delete asset request schema',
});
export type DeleteAssetRequest = z.infer<typeof DeleteAssetRequestSchema>;
export const DeleteAssetResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'DeleteAssetResponseSchema',
	description: 'Delete asset response schema',
});
export type DeleteAssetResponse = z.infer<typeof DeleteAssetResponseSchema>;

export const RecoverAssetRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'RecoverAssetRequestSchema',
	description: 'Recover asset request schema',
});
export type RecoverAssetRequest = z.infer<typeof RecoverAssetRequestSchema>;
export const RecoverAssetResponseSchema = AssetSchema.register(dsbunnyRegistry, {
	id: 'RecoverAssetResponseSchema',
	description: 'Recover asset response schema',
});
export type RecoverAssetResponse = z.infer<typeof RecoverAssetResponseSchema>;

export const GetAssetDownloadLocationRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetDownloadLocationRequestSchema',
	description: 'Get download location request schema',
});
export type GetAssetDownloadLocationRequest = z.infer<typeof GetAssetDownloadLocationRequestSchema>;
export const GetAssetDownloadLocationResponseSchema = z.object({
	url: z.url(),
	expires: z.iso.datetime(),
}).register(dsbunnyRegistry, {
	id: 'GetAssetDownloadLocationResponseSchema',
	description: 'Get download location response schema',
});
export type GetAssetDownloadLocationResponse = z.infer<typeof GetAssetDownloadLocationResponseSchema>;

export const PatchAssetRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
	id: 'PatchAssetRequestSchema',
	description: 'Patch asset request schema',
});
export type PatchAssetRequest = z.infer<typeof PatchAssetRequestSchema>;
export const PatchAssetResponseSchema = AssetSchema.register(dsbunnyRegistry, {
	id: 'PatchAssetResponseSchema',
	description: 'Patch asset response schema',
});
export type PatchAssetResponse = z.infer<typeof PatchAssetResponseSchema>;

export const ListAssetPostersRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListAssetPostersRequestSchema',
	description: 'List asset posters request schema',
});
export type ListAssetPostersRequest = z.infer<typeof ListAssetPostersRequestSchema>;
export const ListAssetPostersResponseSchema = z.array(PresignedIndexedUrlSchema).register(dsbunnyRegistry, {
	id: 'ListAssetPostersResponseSchema',
	description: 'List asset posters response schema',
});
export type ListAssetPostersResponse = z.infer<typeof ListAssetPostersResponseSchema>;

export const UpdateAssetPosterRequestSchema = z.coerce.number().min(1).max(3).register(dsbunnyRegistry, {
	id: 'UpdateAssetPosterRequestSchema',
	description: 'Update asset poster request schema',
});
export type UpdateAssetPosterRequest = z.infer<typeof UpdateAssetPosterRequestSchema>;
export const UpdateAssetPosterResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'UpdateAssetPosterResponseSchema',
	description: 'Update asset poster response schema',
});
export type UpdateAssetPosterResponse = z.infer<typeof UpdateAssetPosterResponseSchema>;

export const GetAssetPosterRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetPosterRequestSchema',
	description: 'Get asset poster request schema',
});
export type GetAssetPosterRequest = z.infer<typeof GetAssetPosterRequestSchema>;
export const GetAssetPosterResponseSchema = z.url().register(dsbunnyRegistry, {
	id: 'GetAssetPosterResponseSchema',
	description: 'Get asset poster response schema',
});
export type GetAssetPosterResponse = z.infer<typeof GetAssetPosterResponseSchema>;

export const GetAssetThumbnailRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetAssetThumbnailRequestSchema',
	description: 'Get asset thumbnail request schema',
});
export type GetAssetThumbnailRequest = z.infer<typeof GetAssetThumbnailRequestSchema>;
export const GetAssetThumbnailResponseSchema = z.url().register(dsbunnyRegistry, {
	id: 'GetAssetThumbnailResponseSchema',
	description: 'Get asset thumbnail response schema',
});
export type GetAssetThumbnailResponse = z.infer<typeof GetAssetThumbnailResponseSchema>;
// #endregion

// #region Uploads
export const ListUploadsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListUploadsRequestSchema',
	description: 'List uploads request schema',
});
export type ListUploadsRequest = z.infer<typeof ListUploadsRequestSchema>;
export const ListUploadsResponseSchema = z.object({
	uploads: z.array(UploadSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListUploadsResponseSchema',
	description: 'List uploads response schema',
});
export type ListUploadsResponse = z.infer<typeof ListUploadsResponseSchema>;

export const CreateUploadRequestSchema = z.object({
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
export type CreateUploadRequest = z.infer<typeof CreateUploadRequestSchema>;
export const CreateUploadResponseSchema = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadResponseSchema',
	description: 'Create upload response schema',
});
export type CreateUploadResponse = z.infer<typeof CreateUploadResponseSchema>;

export const GetUploadRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetUploadRequestSchema',
	description: 'Get upload request schema',
});
export type GetUploadRequest = z.infer<typeof GetUploadRequestSchema>;
export const GetUploadResponseSchema = UploadSchema.register(dsbunnyRegistry, {
	id: 'GetUploadResponseSchema',
	description: 'Get upload response schema',
});
export type GetUploadResponse = z.infer<typeof GetUploadResponseSchema>;

export const CreateUploadVersionRequestSchema = z.object({
	filename: z.string()
}).register(dsbunnyRegistry, {
	id: 'CreateUploadVersionRequestSchema',
	description: 'Create upload version request schema',
});
export type CreateUploadVersionRequest = z.infer<typeof CreateUploadVersionRequestSchema>;
export const CreateUploadVersionResponseSchema = z.object({
	uploadId: z.string()
		.describe('Unique identifier of the upload version.'),
	assetName: z.string()
		.describe('Name of the asset to be uploaded.'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadVersionResponseSchema',
	description: 'Create upload version response schema',
});
export type CreateUploadVersionResponse = z.infer<typeof CreateUploadVersionResponseSchema>;

export const CreateUploadUrlRequestSchema = z.object({
	partNumber: z.number()
		.describe('Part number for the upload.'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadUrlRequestSchema',
	description: 'Create upload URL request schema',
});
export type CreateUploadUrlRequest = z.infer<typeof CreateUploadUrlRequestSchema>;
export const CreateUploadUrlResponseSchema = z.object({
	url: z.string()
		.describe('Presigned URL for uploading the asset.'),
	expires: z.iso.datetime()
		.describe('Expiration date and time of the presigned URL (ISO_8601 format).'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadUrlResponseSchema',
	description: 'Create upload URL response schema',
});
export type CreateUploadUrlResponse = z.infer<typeof CreateUploadUrlResponseSchema>;

export const UploadPartRequestSchema = z.object({
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
export type UploadPartRequest = z.infer<typeof UploadPartRequestSchema>;
export const UploadPartResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'UploadPartResponseSchema',
	description: 'Upload part response schema',
});
export type UploadPartResponse = z.infer<typeof UploadPartResponseSchema>;

export const PatchUploadRequestSchema = z.array(JsonPatchOperationSchema).max(50).register(dsbunnyRegistry, {
	id: 'PatchUploadRequestSchema',
	description: 'Patch upload request schema',
});
export type PatchUploadRequest = z.infer<typeof PatchUploadRequestSchema>;
export const PatchUploadResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'PatchUploadResponseSchema',
	description: 'Patch upload response schema',
});
export type PatchUploadResponse = z.infer<typeof PatchUploadResponseSchema>;

export const UploadCompleteRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'UploadCompleteRequestSchema',
	description: 'Upload complete request schema',
});
export type UploadCompleteRequest = z.infer<typeof UploadCompleteRequestSchema>;
export const UploadCompleteResponseSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'UploadCompleteResponseSchema',
	description: 'Upload complete response schema',
});
export type UploadCompleteResponse = z.infer<typeof UploadCompleteResponseSchema>;

export const UploadPollRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'UploadPollRequestSchema',
	description: 'Upload poll request schema',
});
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
}).register(dsbunnyRegistry, {
	id: 'UploadPollResponseSchema',
	description: 'Upload poll response schema',
});
export type UploadPollResponse = z.infer<typeof UploadPollResponseSchema>;

export const CreateAssetFromUploadRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadRequestSchema',
	description: 'Create asset from upload request schema',
});
export type CreateAssetFromUploadRequest = z.infer<typeof CreateAssetFromUploadRequestSchema>;
export const CreateAssetFromUploadResponseSchema = AssetSchema.register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadResponseSchema',
	description: 'Create asset from upload response schema',
});
export type CreateAssetFromUploadResponse = z.infer<typeof CreateAssetFromUploadResponseSchema>;

export const CreateAssetFromUploadVersionRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadVersionRequestSchema',
	description: 'Create asset from upload version request schema',
});
export type CreateAssetFromUploadVersionRequest = z.infer<typeof CreateAssetFromUploadVersionRequestSchema>;
export const CreateAssetFromUploadVersionResponseSchema = AssetSchema.register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadVersionResponseSchema',
	description: 'Create asset from upload version response schema',
});
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
]).register(dsbunnyRegistry, {
	id: 'DamAssetRequestSchema',
	description: 'DAM asset request schema',
});
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
]).register(dsbunnyRegistry, {
	id: 'DamUploadRequestSchema',
	description: 'DAM upload request schema',
});
export type DamUploadRequest = z.infer<typeof DamUploadRequestSchema>;

export const DamRequestSchema = z.union([
	DamAssetRequestSchema,
	DamUploadRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'DamRequestSchema',
	description: 'DAM API request schema',
});
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
]).register(dsbunnyRegistry, {
	id: 'DamAssetResponseSchema',
	description: 'DAM asset response schema'
});
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
]).register(dsbunnyRegistry, {
	id: 'DamUploadResponseSchema',
	description: 'DAM upload response schema'
});
export type DamUploadResponse = z.infer<typeof DamUploadResponseSchema>;

// `DamResponse` exceeds the maximum length the compiler will serialize.
export type DamResponse = DamAssetResponse | DamUploadResponse;
// #endregion
