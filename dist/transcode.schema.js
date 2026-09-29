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
import { AllMetadataSchema } from '@dsbunny/metadata-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { S3ClientConfigSchema } from './s3-client-config.schema.js';
import { S3URISchema } from './uri.schema.js';
export const ReturnResourceSchema = z.object({
    content_type: z.string().min(5).max(255)
        .describe('Content type of the resource'),
    s3_uri: S3URISchema.min(20).max(2048)
        .describe('S3 URI of the resource'),
    s3_filename: z.string().min(2).max(255)
        .describe('Name of the resource'),
})
    .describe('The return resource');
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
    s3_parts: z.array(z.number().max(5368709120)).min(1).max(10000) // 5GB per part
        .describe('The S3 part lengths of the asset'),
    s3_filename: z.string().min(2).max(255)
        .describe('The name of the asset'),
    content_type: z.string().min(5).max(255)
        .describe('The content type of the asset'),
    content_length: z.number().max(5497558138880) // 5TB
        .describe('The content length of the asset'),
});
export const MetadataRequestSchema = RequestBaseSchema.extend({
    type: z.literal('metadata'),
    metadata: ReturnResourceSchema
        .describe('The metadata of the asset'),
})
    .describe('Metadata job for an asset.');
export const PosterRequestEntrySchema = z.object({
    quality: z.enum(['medium', 'high', 'sample'])
        .describe('The quality of the poster'),
    poster: ReturnResourceSchema,
})
    .describe('The poster entry of the asset');
export const PosterRequestSchema = RequestBaseSchema.extend({
    type: z.literal('poster'),
    poster: z.array(PosterRequestEntrySchema)
        .describe('The poster entries of the asset'),
})
    .describe('Poster job for an asset.');
export const AnimatedPosterRequestSchema = RequestBaseSchema.extend({
    type: z.literal('animated-poster'),
    'animated-poster': ReturnResourceSchema
        .describe('The poster of the asset'),
})
    .describe('Animated poster job for an asset.');
export const PosterSeriesRequestEntrySchema = z.object({
    index: z.number().int().min(1).max(3)
        .describe('The index of the poster'),
    quality: z.enum(['medium', 'high', 'sample'])
        .describe('The quality of the poster'),
    poster: ReturnResourceSchema,
})
    .describe('The poster entry of the asset');
export const PosterSeriesRequestSchema = RequestBaseSchema.extend({
    type: z.literal('poster-series'),
    'poster-series': z.array(PosterSeriesRequestEntrySchema)
        .describe('The poster entries of the asset'),
})
    .describe('Poster series job for an asset.');
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
})
    .describe('The tile series entry of the asset');
export const TileSeriesRequestSchema = RequestBaseSchema.extend({
    type: z.literal('tile-series'),
    'tile-series': TileSeriesRequestEntrySchema,
})
    .describe('Tile series job for an asset.');
export const PrevueRequestSchema = RequestBaseSchema.extend({
    type: z.literal('prevue'),
    prevue: ReturnResourceSchema
        .describe('The prevue of the asset'),
})
    .describe('Prevue job for an asset.');
export const TranscodeRequestSchema = z.discriminatedUnion("type", [
    MetadataRequestSchema,
    PosterRequestSchema,
    AnimatedPosterRequestSchema,
    PosterSeriesRequestSchema,
    TileSeriesRequestSchema,
    PrevueRequestSchema,
])
    .describe('The transcode request');
export const TranscodeOutputMetadataSchema = AllMetadataSchema
    .describe('The output metadata of the transcode');
export const TranscodeProgressSchema = z.number().min(0).max(100)
    .describe('The status of the transcode');
export const TranscodeResponseSchema = z.object({
    metadata: TranscodeOutputMetadataSchema
})
    .describe('The output of the transcode');
export const TranscodeTaskStateSchema = RobustTask.TaskStateSchema.extend({
    progress: TranscodeProgressSchema.optional(),
    result: TranscodeResponseSchema.optional(),
})
    .describe('The state of the transcode task');
//# sourceMappingURL=transcode.schema.js.map