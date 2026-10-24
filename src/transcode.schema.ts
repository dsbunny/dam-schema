// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
//			      ┌─────────────┐
//	TranscodeRequest      │		    │
//    ───────────────────────►│		    │
//			      │  DAM	    │
//	TranscodeProgress     │  Transcoder │	  ┌────────────────┐
//    ◄◄──────────────────────┤  Driver     │────►│ Transcoder ONE │
//			      │		    │	  └────────────────┘
//			      └─────────────┘
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { AllMetadataSchema } from '@dsbunny/metadata-schema';
import { S3URISchema } from '@dsbunny/net-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { S3ClientConfigSchema } from './s3-client-config.schema.js';

export const ReturnResourceSchema = z.object({
	content_type: z.string().min(5).max(255)
		.describe('Content type of the resource'),
	s3_uri: S3URISchema.min(20).max(2048)
		.describe('S3 URI of the resource'),
	s3_filename: z.string().min(2).max(255)
		.describe('Name of the resource'),
}).register(dsbunnyRegistry, {
	id: 'ReturnResourceSchema',
	description: 'The return resource of a transcode job',
});
export type ReturnResource = z.infer<typeof ReturnResourceSchema>;

export const RequestBaseSchema = z.object({
	tenant_id: z.uuid()
		.describe('The tenant ID of the asset'),
	reference_id: z.uuid()
		.describe('The caller reference ID for the request'),
	asset_id: z.uuid()
		.describe('The asset ID'),
	s3_client_config: S3ClientConfigSchema
		.describe('The S3 client configuration for accessing the asset'),
	s3_uri: S3URISchema.min(20).max(2048)
		.describe('The S3 URI of the asset'),
	s3_version_id: z.string().min(2).max(255)
		.describe('The version ID of the file in S3.'),
	s3_etag: z.string().min(2).max(2048)
		.describe('The S3 ETag of the asset'),
	s3_parts: z.array(z.number().max(5368709120)).min(1).max(10000)  // 5GB per part
		.describe('The S3 part lengths of the asset'),
	s3_filename: z.string().min(2).max(255)
		.describe('The name of the asset'),
	content_type: z.string().min(5).max(255)
		.describe('The content type of the asset'),
	content_length: z.number().max(5497558138880)  // 5TB
		.describe('The content length of the asset'),
}).register(dsbunnyRegistry, {
	id: 'RequestBaseSchema',
	description: 'The base schema for a transcode request, including tenant ID, reference ID, asset ID, S3 client configuration, and asset details',
});
export type RequestBase = z.infer<typeof RequestBaseSchema>;

export const MetadataRequestSchema = RequestBaseSchema.extend({
	type: z.literal('metadata'),
	metadata: ReturnResourceSchema
		.describe('The metadata of the asset'),
}).register(dsbunnyRegistry, {
	id: 'MetadataRequestSchema',
	description: 'Schema for a metadata request of an asset',
});
export type MetadataRequest = z.infer<typeof MetadataRequestSchema>;

export const PosterRequestEntrySchema = z.object({
	quality: z.enum(['medium', 'high', 'sample'])
		.describe('The quality of the poster'),
	poster: ReturnResourceSchema,
}).register(dsbunnyRegistry, {
	id: 'PosterRequestEntrySchema',
	description: 'The poster entry of the asset',
});
export type PosterRequestEntry = z.infer<typeof PosterRequestEntrySchema>;

export const PosterRequestSchema = RequestBaseSchema.extend({
	type: z.literal('poster'),
	poster: z.array(PosterRequestEntrySchema)
		.describe('The poster entries of the asset'),
}).register(dsbunnyRegistry, {
	id: 'PosterRequestSchema',
	description: 'Poster job for an asset',
});
export type PosterRequest = z.infer<typeof PosterRequestSchema>;

export const AnimatedPosterRequestSchema = RequestBaseSchema.extend({
	type: z.literal('animated-poster'),
	'animated-poster': ReturnResourceSchema
		.describe('The poster of the asset'),
}).register(dsbunnyRegistry, {
	id: 'AnimatedPosterRequestSchema',
	description: 'Animated poster job for an asset',
});
export type AnimatedPosterRequest = z.infer<typeof AnimatedPosterRequestSchema>;

export const PosterSeriesRequestEntrySchema = z.object({
	index: z.number().int().min(1).max(3)
		.describe('The index of the poster'),
	quality: z.enum(['medium', 'high', 'sample'])
		.describe('The quality of the poster'),
	poster: ReturnResourceSchema,
}).register(dsbunnyRegistry, {
	id: 'PosterSeriesRequestEntrySchema',
	description: 'The poster entry of the asset',
});
export type PosterSeriesRequestEntry = z.infer<typeof PosterSeriesRequestEntrySchema>;

export const PosterSeriesRequestSchema = RequestBaseSchema.extend({
	type: z.literal('poster-series'),
	'poster-series': z.array(PosterSeriesRequestEntrySchema)
		.describe('The poster entries of the asset'),
}).register(dsbunnyRegistry, {
	id: 'PosterSeriesRequestSchema',
	description: 'Poster series job for an asset',
});
export type PosterSeriesRequest = z.infer<typeof PosterSeriesRequestSchema>;

export const TileSeriesRequestEntrySchema = z.object({
	content_type: z.string().min(5).max(255)
		.describe('The content type of the tile series'),
	quality: z.enum(['low'])
		.describe('The quality of the tile series'),
	s3_base_uri: S3URISchema.min(20).max(2048)
		.describe('The S3 base URI of the tile series'),
	s3_filename_format: z.string().min(2).max(255)
		.describe('The name format of the tile series'),
	metadata_s3_filename: z.string().min(2).max(255)
		.describe('Name of the metadata file'),
	metadata_s3_uri: S3URISchema.min(2).max(2048)
		.describe('S3 URI of the metadata file'),
	metadata_content_type: z.string().min(5).max(255)
		.describe('Content type of the metadata file'),
}).register(dsbunnyRegistry, {
	id: 'TileSeriesRequestEntrySchema',
	description: 'The tile series entry of the asset',
});
export type TileSeriesRequestEntry = z.infer<typeof TileSeriesRequestEntrySchema>;

export const TileSeriesRequestSchema = RequestBaseSchema.extend({
	type: z.literal('tile-series'),
	'tile-series': TileSeriesRequestEntrySchema,
}).register(dsbunnyRegistry, {
	id: 'TileSeriesRequestSchema',
	description: 'Tile series job for an asset',
});
export type TileSeriesRequest = z.infer<typeof TileSeriesRequestSchema>;

export const PrevueRequestSchema = RequestBaseSchema.extend({
	type: z.literal('prevue'),
	prevue: ReturnResourceSchema
		.describe('The prevue of the asset'),
}).register(dsbunnyRegistry, {
	id: 'PrevueRequestSchema',
	description: 'Prevue job for an asset',
});
export type PrevueRequest = z.infer<typeof PrevueRequestSchema>;

export const TranscodeRequestSchema = z.discriminatedUnion("type", [
	MetadataRequestSchema,
	PosterRequestSchema,
	AnimatedPosterRequestSchema,
	PosterSeriesRequestSchema,
	TileSeriesRequestSchema,
	PrevueRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'TranscodeRequestSchema',
	description: 'The transcode request for an asset',
});
export type TranscodeRequest = z.infer<typeof TranscodeRequestSchema>;

export const TranscodeOutputMetadataSchema = AllMetadataSchema.register(dsbunnyRegistry, {
	id: 'TranscodeOutputMetadataSchema',
	description: 'The output metadata of the transcode',
});
export type TranscodeOutputMetadata = z.infer<typeof TranscodeOutputMetadataSchema>;

export const TranscodeProgressSchema = z.number().min(0).max(100).register(dsbunnyRegistry, {
	id: 'TranscodeProgressSchema',
	description: 'The status of the transcode',
});
export type TranscodeProgress = z.infer<typeof TranscodeProgressSchema>;

export const TranscodeResponseSchema = z.object({
	metadata: TranscodeOutputMetadataSchema
}).register(dsbunnyRegistry, {
	id: 'TranscodeResponseSchema',
	description: 'The output of the transcode',
});
export type TranscodeResponse = z.infer<typeof TranscodeResponseSchema>;

export const TranscodeTaskStateSchema = RobustTask.TaskStateSchema.extend({
	progress: TranscodeProgressSchema.optional(),
	result: TranscodeResponseSchema.optional(),
}).register(dsbunnyRegistry, {
	id: 'TranscodeTaskStateSchema',
	description: 'The state of the transcode task',
});
export type TranscodeTaskState =
	RobustTask.TaskState<TranscodeRequest, RobustTask.TaskConfig, TranscodeProgress, TranscodeResponse> & {
		progress? : TranscodeProgress,
		result?: TranscodeResponse,
	};
