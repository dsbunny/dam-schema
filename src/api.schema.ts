// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { JsonPatchOperationSchema } from '@dsbunny/patch-schema';
import { AssetSchema } from './asset.schema.js';
import {
	PresignedIndexedUrlSchema,
	PresignedUrlSchema,
} from './presigned-url.schema.js';
import { UploadSchema } from './upload.schema.js';

export const DamPingResponseSchema = z.object({
	ping: z.literal('pong'),
	timestamp: z.iso.datetime(),
}).register(dsbunnyRegistry, {
	id: 'DamPingResponseSchema',
	description: 'DAM ping response schema',
});
export type DamPingResponse = z.infer<typeof DamPingResponseSchema>;

// #region Assets
export const ListAssetsRequestSchema = z.object({
	'@type': z.literal('ListAssetsRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'ListAssetsRequestSchema',
	description: 'List assets request schema',
});
export type ListAssetsRequest = z.infer<typeof ListAssetsRequestSchema>;
export const ListAssetsResponseSchema = z.object({
	'@type': z.literal('ListAssetsResponse'),
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListAssetsResponseSchema',
	description: 'List assets response schema',
});
export type ListAssetsResponse = z.infer<typeof ListAssetsResponseSchema>;

export const ListDeletedAssetsRequestSchema = z.object({
	'@type': z.literal('ListDeletedAssetsRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'ListDeletedAssetsRequestSchema',
	description: 'List deleted assets request schema',
});
export type ListDeletedAssetsRequest = z.infer<typeof ListDeletedAssetsRequestSchema>;
export const ListDeletedAssetsResponseSchema = z.object({
	'@type': z.literal('ListDeletedAssetsResponse'),
	assets: z.array(AssetSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListDeletedAssetsResponseSchema',
	description: 'List deleted assets response schema',
});
export type ListDeletedAssetsResponse = z.infer<typeof ListDeletedAssetsResponseSchema>;

export const GetAssetSuggestionsRequestSchema = z.object({
	'@type': z.literal('GetAssetSuggestionsRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetSuggestionsRequestSchema',
	description: 'Get asset suggestions request schema',
});
export type GetAssetSuggestionsRequest = z.infer<typeof GetAssetSuggestionsRequestSchema>;
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
export type GetAssetSuggestionsResponse = z.infer<typeof GetAssetSuggestionsResponseSchema>;

export const GetAssetAvailabilityRequestSchema = z.object({
	'@type': z.literal('GetAssetAvailabilityRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetAvailabilityRequestSchema',
	description: 'Get asset availability request schema',
});
export type GetAssetAvailabilityRequest = z.infer<typeof GetAssetAvailabilityRequestSchema>;
export const GetAssetAvailabilityResponseSchema = z.object({
	'@type': z.literal('GetAssetAvailabilityResponse'),
	is_available: z.boolean()
		.describe('Indicates if the asset name is available'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetAvailabilityResponseSchema',
	description: 'Get asset availability response schema',
});
export type GetAssetAvailabilityResponse = z.infer<typeof GetAssetAvailabilityResponseSchema>;

export const GetAssetRequestSchema = z.object({
	'@type': z.literal('GetAssetRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetRequestSchema',
	description: 'Get asset request schema',
});
export type GetAssetRequest = z.infer<typeof GetAssetRequestSchema>;
export const GetAssetResponseSchema = z.object({
	'@type': z.literal('GetAssetResponse').optional(),
	asset: AssetSchema,
}).register(dsbunnyRegistry, {
	id: 'GetAssetResponseSchema',
	description: 'Get asset response schema',
});
export type GetAssetResponse = z.infer<typeof GetAssetResponseSchema>;

export const DeleteAssetRequestSchema = z.object({
	'@type': z.literal('DeleteAssetRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'DeleteAssetRequestSchema',
	description: 'Delete asset request schema',
});
export type DeleteAssetRequest = z.infer<typeof DeleteAssetRequestSchema>;
export const DeleteAssetResponseSchema = z.object({
	'@type': z.literal('DeleteAssetResponse'),
}).register(dsbunnyRegistry, {
	id: 'DeleteAssetResponseSchema',
	description: 'Delete asset response schema',
});
export type DeleteAssetResponse = z.infer<typeof DeleteAssetResponseSchema>;

export const RecoverAssetBodySchema = z.object({
	'@type': z.literal('RecoverAssetRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecoverAssetRequestSchema',
	description: 'Recover asset request schema',
});
export type RecoverAssetBody = z.infer<typeof RecoverAssetBodySchema>;
/** @deprecated Use RecoverAssetBodySchema. */
export const RecoverAssetRequestSchema = RecoverAssetBodySchema;
/** @deprecated Use RecoverAssetBody. */
export type RecoverAssetRequest = RecoverAssetBody;
export const RecoverAssetResponseSchema = z.object({
	'@type': z.literal('RecoverAssetResponse'),
	asset: AssetSchema,
}).register(dsbunnyRegistry, {
	id: 'RecoverAssetResponseSchema',
	description: 'Recover asset response schema',
});
export type RecoverAssetResponse = z.infer<typeof RecoverAssetResponseSchema>;

export const GetAssetDownloadLocationRequestSchema = z.object({
	'@type': z.literal('GetAssetDownloadLocationRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetDownloadLocationRequestSchema',
	description: 'Get download location request schema',
});
export type GetAssetDownloadLocationRequest = z.infer<typeof GetAssetDownloadLocationRequestSchema>;
export const GetAssetDownloadLocationResponseSchema = z.object({
	'@type': z.literal('GetAssetDownloadLocationResponse'),
	presigned_url: PresignedUrlSchema
		.describe('Presigned URL for downloading the asset'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetDownloadLocationResponseSchema',
	description: 'Get download location response schema',
});
export type GetAssetDownloadLocationResponse = z.infer<typeof GetAssetDownloadLocationResponseSchema>;

export const PatchAssetBodySchema = z.object({
	'@type': z.literal('PatchAssetRequest'),
	patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
	id: 'PatchAssetRequestSchema',
	description: 'Patch asset request schema',
});
export type PatchAssetBody = z.infer<typeof PatchAssetBodySchema>;
/** @deprecated Use PatchAssetBodySchema. */
export const PatchAssetRequestSchema = PatchAssetBodySchema;
/** @deprecated Use PatchAssetBody. */
export type PatchAssetRequest = PatchAssetBody;
export const PatchAssetResponseSchema = z.object({
	'@type': z.literal('PatchAssetResponse'),
	asset: AssetSchema,
}).register(dsbunnyRegistry, {
	id: 'PatchAssetResponseSchema',
	description: 'Patch asset response schema',
});
export type PatchAssetResponse = z.infer<typeof PatchAssetResponseSchema>;

export const ListAssetPostersRequestSchema = z.object({
	'@type': z.literal('ListAssetPostersRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'ListAssetPostersRequestSchema',
	description: 'List asset posters request schema',
});
export type ListAssetPostersRequest = z.infer<typeof ListAssetPostersRequestSchema>;
export const ListAssetPostersResponseSchema = z.object({
	'@type': z.literal('ListAssetPostersResponse'),
	posters: z.array(PresignedIndexedUrlSchema)
		.describe('List of presigned URLs for asset posters'),
}).register(dsbunnyRegistry, {
	id: 'ListAssetPostersResponseSchema',
	description: 'List asset posters response schema',
});
export type ListAssetPostersResponse = z.infer<typeof ListAssetPostersResponseSchema>;

export const UpdateAssetPosterRequestSchema = z.object({
	'@type': z.literal('UpdateAssetPosterRequest'),
	index: z.coerce.number().min(1).max(3)
		.describe('Index of the asset poster to update'),
}).register(dsbunnyRegistry, {
	id: 'UpdateAssetPosterRequestSchema',
	description: 'Update asset poster request schema',
});
export type UpdateAssetPosterRequest = z.infer<typeof UpdateAssetPosterRequestSchema>;
export const UpdateAssetPosterResponseSchema = z.object({
	'@type': z.literal('UpdateAssetPosterResponse'),
}).register(dsbunnyRegistry, {
	id: 'UpdateAssetPosterResponseSchema',
	description: 'Update asset poster response schema',
});
export type UpdateAssetPosterResponse = z.infer<typeof UpdateAssetPosterResponseSchema>;

export const GetAssetPosterRequestSchema = z.object({
	'@type': z.literal('GetAssetPosterRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetPosterRequestSchema',
	description: 'Get asset poster request schema',
});
export type GetAssetPosterRequest = z.infer<typeof GetAssetPosterRequestSchema>;
export const GetAssetPosterResponseSchema = z.object({
	'@type': z.literal('GetAssetPosterResponse'),
	presigned_url: PresignedUrlSchema
		.describe('Presigned URL for the asset poster'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetPosterResponseSchema',
	description: 'Get asset poster response schema',
});
export type GetAssetPosterResponse = z.infer<typeof GetAssetPosterResponseSchema>;

export const GetAssetThumbnailRequestSchema = z.object({
	'@type': z.literal('GetAssetThumbnailRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetAssetThumbnailRequestSchema',
	description: 'Get asset thumbnail request schema',
});
export type GetAssetThumbnailRequest = z.infer<typeof GetAssetThumbnailRequestSchema>;
export const GetAssetThumbnailResponseSchema = z.object({
	'@type': z.literal('GetAssetThumbnailResponse'),
	presigned_url: PresignedUrlSchema
		.describe('Presigned URL for the asset thumbnail'),
}).register(dsbunnyRegistry, {
	id: 'GetAssetThumbnailResponseSchema',
	description: 'Get asset thumbnail response schema',
});
export type GetAssetThumbnailResponse = z.infer<typeof GetAssetThumbnailResponseSchema>;

export const RecreateAssetMetadataBodySchema = z.object({
	'@type': z.literal('RecreateAssetMetadataRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetMetadataRequestSchema',
	description: 'Recreate asset metadata request schema',
});
export type RecreateAssetMetadataBody = z.infer<typeof RecreateAssetMetadataBodySchema>;
/** @deprecated Use RecreateAssetMetadataBodySchema. */
export const RecreateAssetMetadataRequestSchema = RecreateAssetMetadataBodySchema;
/** @deprecated Use RecreateAssetMetadataBody. */
export type RecreateAssetMetadataRequest = RecreateAssetMetadataBody;
export const RecreateAssetMetadataResponseSchema = z.object({
	'@type': z.literal('RecreateAssetMetadataResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetMetadataResponseSchema',
	description: 'Recreate asset metadata response schema',
});
export type RecreateAssetMetadataResponse = z.infer<typeof RecreateAssetMetadataResponseSchema>;

export const RecreateAssetAnimatedPosterBodySchema = z.object({
	'@type': z.literal('RecreateAssetAnimatedPosterRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetAnimatedPosterRequestSchema',
	description: 'Recreate asset animated poster request schema',
});
export type RecreateAssetAnimatedPosterBody = z.infer<typeof RecreateAssetAnimatedPosterBodySchema>;
/** @deprecated Use RecreateAssetAnimatedPosterBodySchema. */
export const RecreateAssetAnimatedPosterRequestSchema = RecreateAssetAnimatedPosterBodySchema;
/** @deprecated Use RecreateAssetAnimatedPosterBody. */
export type RecreateAssetAnimatedPosterRequest = RecreateAssetAnimatedPosterBody;
export const RecreateAssetAnimatedPosterResponseSchema = z.object({
	'@type': z.literal('RecreateAssetAnimatedPosterResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetAnimatedPosterResponseSchema',
	description: 'Recreate asset animated poster response schema',
});
export type RecreateAssetAnimatedPosterResponse = z.infer<typeof RecreateAssetAnimatedPosterResponseSchema>;

export const RecreateAssetPosterSeriesBodySchema = z.object({
	'@type': z.literal('RecreateAssetPosterSeriesRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetPosterSeriesRequestSchema',
	description: 'Recreate asset poster series request schema',
});
export type RecreateAssetPosterSeriesBody = z.infer<typeof RecreateAssetPosterSeriesBodySchema>;
/** @deprecated Use RecreateAssetPosterSeriesBodySchema. */
export const RecreateAssetPosterSeriesRequestSchema = RecreateAssetPosterSeriesBodySchema;
/** @deprecated Use RecreateAssetPosterSeriesBody. */
export type RecreateAssetPosterSeriesRequest = RecreateAssetPosterSeriesBody;
export const RecreateAssetPosterSeriesResponseSchema = z.object({
	'@type': z.literal('RecreateAssetPosterSeriesResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetPosterSeriesResponseSchema',
	description: 'Recreate asset poster series response schema',
});
export type RecreateAssetPosterSeriesResponse = z.infer<typeof RecreateAssetPosterSeriesResponseSchema>;

export const RecreateAssetTileSeriesBodySchema = z.object({
	'@type': z.literal('RecreateAssetTileSeriesRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetTileSeriesRequestSchema',
	description: 'Recreate asset tile series request schema',
});
export type RecreateAssetTileSeriesBody = z.infer<typeof RecreateAssetTileSeriesBodySchema>;
/** @deprecated Use RecreateAssetTileSeriesBodySchema. */
export const RecreateAssetTileSeriesRequestSchema = RecreateAssetTileSeriesBodySchema;
/** @deprecated Use RecreateAssetTileSeriesBody. */
export type RecreateAssetTileSeriesRequest = RecreateAssetTileSeriesBody;
export const RecreateAssetTileSeriesResponseSchema = z.object({
	'@type': z.literal('RecreateAssetTileSeriesResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetTileSeriesResponseSchema',
	description: 'Recreate asset tile series response schema',
});
export type RecreateAssetTileSeriesResponse = z.infer<typeof RecreateAssetTileSeriesResponseSchema>;

export const RecreateAssetPrevueBodySchema = z.object({
	'@type': z.literal('RecreateAssetPrevueRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetPrevueRequestSchema',
	description: 'Recreate asset prevue request schema',
});
export type RecreateAssetPrevueBody = z.infer<typeof RecreateAssetPrevueBodySchema>;
/** @deprecated Use RecreateAssetPrevueBodySchema. */
export const RecreateAssetPrevueRequestSchema = RecreateAssetPrevueBodySchema;
/** @deprecated Use RecreateAssetPrevueBody. */
export type RecreateAssetPrevueRequest = RecreateAssetPrevueBody;
export const RecreateAssetPrevueResponseSchema = z.object({
	'@type': z.literal('RecreateAssetPrevueResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetPrevueResponseSchema',
	description: 'Recreate asset prevue response schema',
});
export type RecreateAssetPrevueResponse = z.infer<typeof RecreateAssetPrevueResponseSchema>;

export const RecreateAssetPosterBodySchema = z.object({
	'@type': z.literal('RecreateAssetPosterRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'RecreateAssetPosterRequestSchema',
	description: 'Recreate asset poster request schema',
});
export type RecreateAssetPosterBody = z.infer<typeof RecreateAssetPosterBodySchema>;
/** @deprecated Use RecreateAssetPosterBodySchema. */
export const RecreateAssetPosterRequestSchema = RecreateAssetPosterBodySchema;
/** @deprecated Use RecreateAssetPosterBody. */
export type RecreateAssetPosterRequest = RecreateAssetPosterBody;
export const RecreateAssetPosterResponseSchema = z.object({
	'@type': z.literal('RecreateAssetPosterResponse'),
}).register(dsbunnyRegistry, {
	id: 'RecreateAssetPosterResponseSchema',
	description: 'Recreate asset poster response schema',
});
export type RecreateAssetPosterResponse = z.infer<typeof RecreateAssetPosterResponseSchema>;
// #endregion

// #region Uploads
export const ListUploadsRequestSchema = z.object({
	'@type': z.literal('ListUploadsRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'ListUploadsRequestSchema',
	description: 'List uploads request schema',
});
export type ListUploadsRequest = z.infer<typeof ListUploadsRequestSchema>;
export const ListUploadsResponseSchema = z.object({
	'@type': z.literal('ListUploadsResponse'),
	uploads: z.array(UploadSchema),
	next_token: z.string().nullable(),
}).register(dsbunnyRegistry, {
	id: 'ListUploadsResponseSchema',
	description: 'List uploads response schema',
});
export type ListUploadsResponse = z.infer<typeof ListUploadsResponseSchema>;

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
export type CreateUploadBody = z.infer<typeof CreateUploadBodySchema>;
/** @deprecated Use CreateUploadBodySchema. */
export const CreateUploadRequestSchema = CreateUploadBodySchema;
/** @deprecated Use CreateUploadBody. */
export type CreateUploadRequest = CreateUploadBody;
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
export type CreateUploadResponse = z.infer<typeof CreateUploadResponseSchema>;

export const GetUploadRequestSchema = z.object({
	'@type': z.literal('GetUploadRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'GetUploadRequestSchema',
	description: 'Get upload request schema',
});
export type GetUploadRequest = z.infer<typeof GetUploadRequestSchema>;
export const GetUploadResponseSchema = z.object({
	'@type': z.literal('GetUploadResponse'),
	upload: UploadSchema,
}).register(dsbunnyRegistry, {
	id: 'GetUploadResponseSchema',
	description: 'Get upload response schema',
});
export type GetUploadResponse = z.infer<typeof GetUploadResponseSchema>;

export const CreateUploadVersionBodySchema = z.object({
	'@type': z.literal('CreateUploadVersionRequest'),
	filename: z.string()
}).register(dsbunnyRegistry, {
	id: 'CreateUploadVersionRequestSchema',
	description: 'Create upload version request schema',
});
export type CreateUploadVersionBody = z.infer<typeof CreateUploadVersionBodySchema>;
/** @deprecated Use CreateUploadVersionBodySchema. */
export const CreateUploadVersionRequestSchema = CreateUploadVersionBodySchema;
/** @deprecated Use CreateUploadVersionBody. */
export type CreateUploadVersionRequest = CreateUploadVersionBody;
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
export type CreateUploadVersionResponse = z.infer<typeof CreateUploadVersionResponseSchema>;

export const CreateUploadUrlBodySchema = z.object({
	'@type': z.literal('CreateUploadUrlRequest'),
	partNumber: z.number()
		.describe('Part number for the upload.'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadUrlRequestSchema',
	description: 'Create upload URL request schema',
});
export type CreateUploadUrlBody = z.infer<typeof CreateUploadUrlBodySchema>;
/** @deprecated Use CreateUploadUrlBodySchema. */
export const CreateUploadUrlRequestSchema = CreateUploadUrlBodySchema;
/** @deprecated Use CreateUploadUrlBody. */
export type CreateUploadUrlRequest = CreateUploadUrlBody;
export const CreateUploadUrlResponseSchema = z.object({
	'@type': z.literal('CreateUploadUrlResponse'),
	presigned_url: PresignedUrlSchema
		.describe('Presigned URL for uploading the asset.'),
}).register(dsbunnyRegistry, {
	id: 'CreateUploadUrlResponseSchema',
	description: 'Create upload URL response schema',
});
export type CreateUploadUrlResponse = z.infer<typeof CreateUploadUrlResponseSchema>;

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
export type UploadPartBody = z.infer<typeof UploadPartBodySchema>;
/** @deprecated Use UploadPartBodySchema. */
export const UploadPartRequestSchema = UploadPartBodySchema;
/** @deprecated Use UploadPartBody. */
export type UploadPartRequest = UploadPartBody;
export const UploadPartResponseSchema = z.object({
	'@type': z.literal('UploadPartResponse'),
}).register(dsbunnyRegistry, {
	id: 'UploadPartResponseSchema',
	description: 'Upload part response schema',
});
export type UploadPartResponse = z.infer<typeof UploadPartResponseSchema>;

export const PatchUploadBodySchema = z.object({
	'@type': z.literal('PatchUploadRequest'),
	patch_operations: z.array(JsonPatchOperationSchema).max(50),
}).register(dsbunnyRegistry, {
	id: 'PatchUploadRequestSchema',
	description: 'Patch upload request schema',
});
export type PatchUploadBody = z.infer<typeof PatchUploadBodySchema>;
/** @deprecated Use PatchUploadBodySchema. */
export const PatchUploadRequestSchema = PatchUploadBodySchema;
/** @deprecated Use PatchUploadBody. */
export type PatchUploadRequest = PatchUploadBody;
export const PatchUploadResponseSchema = z.object({
	'@type': z.literal('PatchUploadResponse'),
	upload: UploadSchema
		.describe('The patched upload object.'),
}).register(dsbunnyRegistry, {
	id: 'PatchUploadResponseSchema',
	description: 'Patch upload response schema',
});
export type PatchUploadResponse = z.infer<typeof PatchUploadResponseSchema>;

export const UploadCompleteBodySchema = z.object({
	'@type': z.literal('UploadCompleteRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'UploadCompleteRequestSchema',
	description: 'Upload complete request schema',
});
export type UploadCompleteBody = z.infer<typeof UploadCompleteBodySchema>;
/** @deprecated Use UploadCompleteBodySchema. */
export const UploadCompleteRequestSchema = UploadCompleteBodySchema;
/** @deprecated Use UploadCompleteBody. */
export type UploadCompleteRequest = UploadCompleteBody;
export const UploadCompleteResponseSchema = z.object({
	'@type': z.literal('UploadCompleteResponse'),
}).register(dsbunnyRegistry, {
	id: 'UploadCompleteResponseSchema',
	description: 'Upload complete response schema',
});
export type UploadCompleteResponse = z.infer<typeof UploadCompleteResponseSchema>;

export const UploadPollRequestSchema = z.object({
	'@type': z.literal('UploadPollRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'UploadPollRequestSchema',
	description: 'Upload poll request schema',
});
export type UploadPollRequest = z.infer<typeof UploadPollRequestSchema>;
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
export type UploadPollResponse = z.infer<typeof UploadPollResponseSchema>;

export const CreateAssetFromUploadBodySchema = z.object({
	'@type': z.literal('CreateAssetFromUploadRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadRequestSchema',
	description: 'Create asset from upload request schema',
});
export type CreateAssetFromUploadBody = z.infer<typeof CreateAssetFromUploadBodySchema>;
/** @deprecated Use CreateAssetFromUploadBodySchema. */
export const CreateAssetFromUploadRequestSchema = CreateAssetFromUploadBodySchema;
/** @deprecated Use CreateAssetFromUploadBody. */
export type CreateAssetFromUploadRequest = CreateAssetFromUploadBody;
export const CreateAssetFromUploadResponseSchema = z.object({
	'@type': z.literal('CreateAssetFromUploadResponse'),
	asset: AssetSchema,
}).register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadResponseSchema',
	description: 'Create asset from upload response schema',
});
export type CreateAssetFromUploadResponse = z.infer<typeof CreateAssetFromUploadResponseSchema>;

export const CreateAssetFromUploadVersionBodySchema = z.object({
	'@type': z.literal('CreateAssetFromUploadVersionRequest'),
}).optional().register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadVersionRequestSchema',
	description: 'Create asset from upload version request schema',
});
export type CreateAssetFromUploadVersionBody = z.infer<typeof CreateAssetFromUploadVersionBodySchema>;
/** @deprecated Use CreateAssetFromUploadVersionBodySchema. */
export const CreateAssetFromUploadVersionRequestSchema = CreateAssetFromUploadVersionBodySchema;
/** @deprecated Use CreateAssetFromUploadVersionBody. */
export type CreateAssetFromUploadVersionRequest = CreateAssetFromUploadVersionBody;
export const CreateAssetFromUploadVersionResponseSchema = z.object({
	'@type': z.literal('CreateAssetFromUploadVersionResponse'),
	asset: AssetSchema,
}).register(dsbunnyRegistry, {
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
export type DamAssetRequest = z.infer<typeof DamAssetRequestSchema>;

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

export const UploadIdParamsSchema = z.object({ uploadId: z.string() }).register(dsbunnyRegistry, {
	id: 'UploadIdParamsSchema',
	description: 'UploadIdParams schema',
});
export type UploadIdParams = z.infer<typeof UploadIdParamsSchema>;

export const AssetIdParamsSchema = z.object({ assetId: z.string() }).register(dsbunnyRegistry, {
	id: 'AssetIdParamsSchema',
	description: 'AssetIdParams schema',
});
export type AssetIdParams = z.infer<typeof AssetIdParamsSchema>;

export const AssetVersionParamsSchema = z.object({ assetId: z.string(), versionNumber: z.string() }).register(dsbunnyRegistry, {
	id: 'AssetVersionParamsSchema',
	description: 'AssetVersionParams schema',
});
export type AssetVersionParams = z.infer<typeof AssetVersionParamsSchema>;

export const AssetUploadParamsSchema = z.object({ assetId: z.string(), uploadId: z.string() }).register(dsbunnyRegistry, {
	id: 'AssetUploadParamsSchema',
	description: 'AssetUploadParams schema',
});
export type AssetUploadParams = z.infer<typeof AssetUploadParamsSchema>;

export const GetAssetQuerySchema = z.object({ projection: z.array(z.string()).optional() }).register(dsbunnyRegistry, {
	id: 'GetAssetQuerySchema',
	description: 'GetAssetQuery schema',
});
export type GetAssetQuery = z.infer<typeof GetAssetQuerySchema>;

export const PollUploadQuerySchema = z.object({ uploadId: z.array(z.string()) }).register(dsbunnyRegistry, {
	id: 'PollUploadQuerySchema',
	description: 'PollUploadQuery schema',
});
export type PollUploadQuery = z.infer<typeof PollUploadQuerySchema>;

export const ListUploadsQuerySchema = z.object({ id: z.array(z.string()) }).register(dsbunnyRegistry, {
	id: 'ListUploadsQuerySchema',
	description: 'ListUploadsQuery schema',
});
export type ListUploadsQuery = z.infer<typeof ListUploadsQuerySchema>;

export const ListAssetsQuerySchema = z.object({
	asset_type: z.string().optional(), sort_by: z.string().optional(), sort_dir: z.string().optional(),
	projection: z.array(z.string()).optional(), max_results: z.string().optional(), next_token: z.string().optional(),
	q: z.string().optional(), tags: z.array(z.string()).optional(), id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
	id: 'ListAssetsQuerySchema',
	description: 'ListAssetsQuery schema',
});
export type ListAssetsQuery = z.infer<typeof ListAssetsQuerySchema>;

export const ListDeletedAssetsQuerySchema = z.object({
	asset_type: z.string().optional(), sort_by: z.string().optional(), sort_dir: z.string().optional(),
	projection: z.array(z.string()).optional(), max_results: z.string().optional(), next_token: z.string().optional(),
	q: z.string().optional(), tags: z.array(z.string()).optional(), id: z.array(z.string()).optional(),
}).register(dsbunnyRegistry, {
	id: 'ListDeletedAssetsQuerySchema',
	description: 'ListDeletedAssetsQuery schema',
});
export type ListDeletedAssetsQuery = z.infer<typeof ListDeletedAssetsQuerySchema>;

export const GetAssetSuggestionsQuerySchema = z.object({ q: z.string() }).register(dsbunnyRegistry, {
	id: 'GetAssetSuggestionsQuerySchema',
	description: 'GetAssetSuggestionsQuery schema',
});
export type GetAssetSuggestionsQuery = z.infer<typeof GetAssetSuggestionsQuerySchema>;

export const GetAssetAvailabilityQuerySchema = z.object({ name: z.string() }).register(dsbunnyRegistry, {
	id: 'GetAssetAvailabilityQuerySchema',
	description: 'GetAssetAvailabilityQuery schema',
});
export type GetAssetAvailabilityQuery = z.infer<typeof GetAssetAvailabilityQuerySchema>;

export const GetAssetDownloadLocationQuerySchema = z.object({ version: z.string().optional() }).register(dsbunnyRegistry, {
	id: 'GetAssetDownloadLocationQuerySchema',
	description: 'GetAssetDownloadLocationQuery schema',
});
export type GetAssetDownloadLocationQuery = z.infer<typeof GetAssetDownloadLocationQuerySchema>;

export const ListAssetPostersQuerySchema = z.object({ quality: z.string() }).register(dsbunnyRegistry, {
	id: 'ListAssetPostersQuerySchema',
	description: 'ListAssetPostersQuery schema',
});
export type ListAssetPostersQuery = z.infer<typeof ListAssetPostersQuerySchema>;

export const GetAssetThumbnailQuerySchema = z.object({ version: z.string().optional() }).register(dsbunnyRegistry, {
	id: 'GetAssetThumbnailQuerySchema',
	description: 'GetAssetThumbnailQuery schema',
});
export type GetAssetThumbnailQuery = z.infer<typeof GetAssetThumbnailQuerySchema>;

export const CreateAssetFromUploadQuerySchema = z.object({ projection: z.string() }).register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadQuerySchema',
	description: 'CreateAssetFromUploadQuery schema',
});
export type CreateAssetFromUploadQuery = z.infer<typeof CreateAssetFromUploadQuerySchema>;

export const CreateAssetFromUploadVersionQuerySchema = z.object({ projection: z.string() }).register(dsbunnyRegistry, {
	id: 'CreateAssetFromUploadVersionQuerySchema',
	description: 'CreateAssetFromUploadVersionQuery schema',
});
export type CreateAssetFromUploadVersionQuery = z.infer<typeof CreateAssetFromUploadVersionQuerySchema>;
