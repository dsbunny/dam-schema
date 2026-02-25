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
import { AllMetadata } from '@dsbunny/metadata-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { S3ClientConfigSchema } from './s3-client-config.schema.js';
import { S3URI } from './uri.schema.js';
export const ReturnResource = z.object({
    content_type: z.string().min(5).max(255)
        .describe('Content type of the resource'),
    s3_uri: S3URI.min(20).max(2048)
        .describe('S3 URI of the resource'),
    s3_filename: z.string().min(2).max(255)
        .describe('Name of the resource'),
})
    .describe('The return resource');
export const RequestBase = z.object({
    tenant_id: z.uuid()
        .describe('The tenant ID of the asset'),
    reference_id: z.uuid()
        .describe('The caller reference ID for the request'),
    asset_id: z.uuid()
        .describe('The asset ID'),
    s3_client_config: S3ClientConfigSchema
        .describe('The S3 client configuration for accessing the asset'),
    s3_uri: S3URI.min(20).max(2048)
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
export const MetadataRequest = RequestBase.extend({
    type: z.literal('metadata'),
    metadata: ReturnResource
        .describe('The metadata of the asset'),
})
    .describe('Metadata job for an asset.');
export const PosterRequestEntry = z.object({
    quality: z.enum(['medium', 'high', 'sample'])
        .describe('The quality of the poster'),
    poster: ReturnResource,
})
    .describe('The poster entry of the asset');
export const PosterRequest = RequestBase.extend({
    type: z.literal('poster'),
    poster: z.array(PosterRequestEntry)
        .describe('The poster entries of the asset'),
})
    .describe('Poster job for an asset.');
export const AnimatedPosterRequest = RequestBase.extend({
    type: z.literal('animated-poster'),
    'animated-poster': ReturnResource
        .describe('The poster of the asset'),
})
    .describe('Animated poster job for an asset.');
export const PosterSeriesRequestEntry = z.object({
    index: z.number().int().min(1).max(3)
        .describe('The index of the poster'),
    quality: z.enum(['medium', 'high', 'sample'])
        .describe('The quality of the poster'),
    poster: ReturnResource,
})
    .describe('The poster entry of the asset');
export const PosterSeriesRequest = RequestBase.extend({
    type: z.literal('poster-series'),
    'poster-series': z.array(PosterSeriesRequestEntry)
        .describe('The poster entries of the asset'),
})
    .describe('Poster series job for an asset.');
export const TileSeriesRequestEntry = z.object({
    content_type: z.string().min(5).max(255)
        .describe('The content type of the tile series'),
    quality: z.enum(['low'])
        .describe('The quality of the tile series'),
    s3_base_uri: S3URI.min(20).max(2048)
        .describe('The S3 base URI of the tile series'),
    s3_filename_format: z.string().min(2).max(255)
        .describe('The name format of the tile series'),
    metadata_s3_filename: z.string().min(2).max(255)
        .describe('Name of the metadata file'),
    metadata_s3_uri: S3URI.min(2).max(2048)
        .describe('S3 URI of the metadata file'),
    metadata_content_type: z.string().min(5).max(255)
        .describe('Content type of the metadata file'),
})
    .describe('The tile series entry of the asset');
export const TileSeriesRequest = RequestBase.extend({
    type: z.literal('tile-series'),
    'tile-series': TileSeriesRequestEntry,
})
    .describe('Tile series job for an asset.');
export const PrevueRequest = RequestBase.extend({
    type: z.literal('prevue'),
    prevue: ReturnResource
        .describe('The prevue of the asset'),
})
    .describe('Prevue job for an asset.');
export const TranscodeRequest = z.discriminatedUnion("type", [
    MetadataRequest,
    PosterRequest,
    AnimatedPosterRequest,
    PosterSeriesRequest,
    TileSeriesRequest,
    PrevueRequest,
])
    .describe('The transcode request');
export const TranscodeOutputMetadata = AllMetadata
    .describe('The output metadata of the transcode');
export const TranscodeProgress = z.number().min(0).max(100)
    .describe('The status of the transcode');
export const TranscodeResponse = z.object({
    metadata: TranscodeOutputMetadata
})
    .describe('The output of the transcode');
export const TranscodeTaskStateSchema = RobustTask.TaskStateSchema.extend({
    progress: TranscodeProgress.optional(),
    result: TranscodeResponse.optional(),
})
    .describe('The state of the transcode task');
//# sourceMappingURL=transcode.schema.js.map