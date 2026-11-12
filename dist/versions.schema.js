// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { AnimatedPosterMetadataSchema, FileStatAndChecksumsSchema, MetadataMetadataSchema, PosterMetadataSchema, PosterSeriesMetadataSchema, PrevueMetadataSchema, TileSeriesMetadataMetadataSchema, } from '@dsbunny/metadata-schema';
import { PosterAnalysisSchema } from './poster-analysis.schema.js';
// `file` and `poster` will be present if the version is not current.
export const CurrentVersionMetadataSchema = z.object({
    '@type': z.literal('CurrentVersionMetadata')
        .describe('Type of the current version metadata'),
    is_current: z.literal(true)
        .describe('This version is the current version'),
    version: z.number().min(1)
        .describe('The version number of the asset'),
    origin_name: z.string()
        .describe('The name of the file at the time of upload'),
}).register(dsbunnyRegistry, {
    id: 'CurrentVersionMetadataSchema',
    description: 'The metadata of the current version of the asset',
});
export const OldVersionMetadataSchema = z.object({
    '@type': z.literal('OldVersionMetadata')
        .describe('Type of the old version metadata'),
    is_current: z.literal(false)
        .describe('This version is not the current version'),
    version: z.number().min(1)
        .describe('The version number of the asset'),
    origin_name: z.string()
        .describe('The name of the file at the time of upload'),
    keep_forever: z.boolean()
        .describe('Whether to keep this version forever'),
    file: FileStatAndChecksumsSchema
        .describe('The file metadata of the version'),
    metadata_metadata: MetadataMetadataSchema
        .describe('The metadata of the asset'),
    poster_metadata: PosterMetadataSchema.optional()
        .describe('The poster entry of the asset'),
    poster_analysis: PosterAnalysisSchema.optional()
        .describe('The poster analysis of the asset'),
    animated_poster_metadata: AnimatedPosterMetadataSchema.optional()
        .describe('The animated poster entry of the asset'),
    poster_series_metadata: PosterSeriesMetadataSchema.optional()
        .describe('The poster entries of the asset'),
    tile_series_metadata: TileSeriesMetadataMetadataSchema.optional()
        .describe('The tile entries of the asset'),
    prevue_metadata: PrevueMetadataSchema.optional()
        .describe('The prevue entry of the asset'),
}).register(dsbunnyRegistry, {
    id: 'OldVersionMetadataSchema',
    description: 'The metadata of an old version of the asset',
});
export const VersionMetadataSchema = CurrentVersionMetadataSchema.or(OldVersionMetadataSchema).register(dsbunnyRegistry, {
    id: 'VersionMetadataSchema',
    description: 'The metadata of a version of the asset',
});
//# sourceMappingURL=versions.schema.js.map