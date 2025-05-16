// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';
import {
	AnimatedPosterMetadata,
	FileStatAndChecksums,
	MetadataMetadata,
	PosterMetadata,
	PosterSeriesMetadata,
	PrevueMetadata,
	TileSeriesMetadataMetadata,
} from '@dsbunny/metadata-schema';
import { PosterAnalysis } from './poster-analysis.schema.js';

// `file` and `poster` will be present if the version is not current.
export const CurrentVersionMetadata = z.object({
	is_current: z.literal(true)
		.describe('This version is the current version'),
	version: z.number().min(1)
		.describe('The version number of the asset'),
	origin_name: z.string()
		.describe('The name of the file at the time of upload'),
});
export type CurrentVersionMetadata = z.infer<typeof CurrentVersionMetadata>;

export const OldVersionMetadata = z.object({
	is_current: z.literal(false)
		.describe('This version is not the current version'),
	version: z.number().min(1)
		.describe('The version number of the asset'),
	origin_name: z.string()
		.describe('The name of the file at the time of upload'),
	keep_forever: z.boolean()
		.describe('Whether to keep this version forever'),
	file: FileStatAndChecksums
		.describe('The file metadata of the version'),
	metadata_metadata: MetadataMetadata
		.describe('The metadata of the asset'),
	poster_metadata: PosterMetadata.optional()
		.describe('The poster entry of the asset'),
	poster_analysis: PosterAnalysis.optional()
		.describe('The poster analysis of the asset'),
	animated_poster_metadata: AnimatedPosterMetadata.optional()
		.describe('The animated poster entry of the asset'),
	poster_series_metadata: PosterSeriesMetadata.optional()
		.describe('The poster entries of the asset'),
	tile_series_metadata: TileSeriesMetadataMetadata.optional()
		.describe('The tile entries of the asset'),
	prevue_metadata: PrevueMetadata.optional()
		.describe('The prevue entry of the asset'),
})
	.describe('The version metadata of an asset');
export type OldVersionMetadata = z.infer<typeof OldVersionMetadata>;

export const VersionMetadata = CurrentVersionMetadata.or(OldVersionMetadata);
export type VersionMetadata = z.infer<typeof VersionMetadata>;
