// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import {
	AnimatedPosterMetadataSchema,
	MetadataSchema,
	MetadataMetadataSchema,
	PosterMetadataSchema,
	PosterSeriesMetadataSchema,
	PrevueMetadataSchema,
	TileSeriesMetadataMetadataSchema,
} from '@dsbunny/metadata-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { PosterAnalysisSchema } from './poster-analysis.schema.js';
import { TranscodeTaskStateSchema } from "./transcode.schema.js";
import { VersionMetadataSchema } from './versions.schema.js';

export const AssetBaseSchema = z.object({
	'@type': z.literal('AssetBase')
		.describe('Type of the asset base'),
	tenant_id: z.uuid()
		.describe('The tenant ID of the asset'),
	name: z.string().min(1).max(100)
		.describe('The name of the asset'),
	metadata: MetadataSchema,
	metadata_metadata: MetadataMetadataSchema
		.describe('The metadata of the asset'),
	poster_metadata: PosterMetadataSchema.optional()
		.describe('The poster entry of the asset'),
	poster_analysis: PosterAnalysisSchema.optional()
    		.describe('Generated analysis of the poster including caption and tags'),
	animated_poster_metadata: AnimatedPosterMetadataSchema.optional()
		.describe('The animated poster entry of the asset'),
	poster_series_metadata: PosterSeriesMetadataSchema.optional()
		.describe('The poster entries of the asset'),
	poster_series_selected_index: z.number().int().min(1).max(3).optional()
		.describe('The selected index of the poster series'),
	tile_series_metadata: TileSeriesMetadataMetadataSchema.optional()
		.describe('The tile entries of the asset'),
	prevue_metadata: PrevueMetadataSchema.optional()
		.describe('The prevue entry of the asset'),
	// Re-generation tasks
	task_gen_metadata_state: TranscodeTaskStateSchema
		.describe('The state of the metadata transcode'),
	task_gen_metadata_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the metadata transcode'),
	task_save_metadata_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the metadata save'),
	// Poster generation tasks
	task_gen_poster_state: TranscodeTaskStateSchema
		.describe('The state of the poster transcode'),
	task_gen_poster_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the poster transcode'),
	task_save_poster_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the poster save'),
	// Animated poster generation tasks
	task_gen_animated_poster_state: TranscodeTaskStateSchema
		.describe('The state of the animated poster transcode'),
	task_gen_animated_poster_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the animated poster transcode'),
	task_save_animated_poster_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the animated poster save'),
	// Poster series generation tasks
	task_gen_poster_series_state: TranscodeTaskStateSchema
		.describe('The state of the poster series transcode'),
	task_gen_poster_series_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the poster series transcode'),
	task_save_poster_series_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the poster series save'),
	// Tile series generation tasks
	task_gen_tile_series_state: TranscodeTaskStateSchema
		.describe('The state of the tile series transcode'),
	task_gen_tile_series_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the tile series transcode'),
	task_save_tile_series_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the tile series save'),
	// Prevue generation tasks
	task_gen_prevue_state: TranscodeTaskStateSchema
		.describe('The state of the prevue transcode'),
	task_gen_prevue_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the prevue transcode'),
	task_save_prevue_status: z.enum(RobustTask.StatusValues)
		.describe('The status of the prevue save'),
	// Whether all generation tasks have settled (succeeded, failed, or skipped)
	is_settled: z.boolean()
		.describe('Whether the asset is settled, not expected to change'),
	user_tags: z.array(z.string().max(64))
		.describe('The user tags of the asset'),
	system_tags: z.array(z.string().max(64))
		.describe('The system tags of the asset'),
	versions: z.array(VersionMetadataSchema)
		.describe('The versions of the asset'),
	tags: z.array(z.string().max(64))
		.describe('The tags of the asset'),
}).register(dsbunnyRegistry, {
	id: 'AssetBaseSchema',
	description: 'The base schema for an asset, including task states, statuses, tags, and versions',
});
export type AssetBase = z.infer<typeof AssetBaseSchema>;

export const AssetMetadataSchema = z.object({
	'@type': z.literal('AssetMetadata')
		.describe('Type of the asset metadata'),
	asset_id: z.uuid()
		.describe('The UUID of the asset'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime of when the asset was created'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime of when the asset was last modified'),
	is_deleted: z.boolean().default(false)
		.describe('Whether the asset is deleted'),
}).register(dsbunnyRegistry, {
	id: 'AssetMetadataSchema',
	description: 'The metadata schema for an asset, including asset ID, timestamps, and deletion status',
});

// projection=poster
export const AssetPosterSchema = z.object({
	'@type': z.literal('AssetPoster')
		.describe('Type of the asset poster'),
	poster_url: z.url().min(20).max(65535).optional()
		.describe('The URL of the asset poster'),
}).register(dsbunnyRegistry, {
	id: 'AssetPosterSchema',
	description: 'The schema for the asset poster, including the poster URL',
});

// projection=animated_poster
export const AssetAnimatedPosterSchema = z.object({
	'@type': z.literal('AssetAnimatedPoster')
		.describe('Type of the asset animated poster'),
	animated_poster_url: z.url().min(20).max(2048).optional()
		.describe('The URL of the asset animated poster'),
}).register(dsbunnyRegistry, {
	id: 'AssetAnimatedPosterSchema',
	description: 'The schema for the asset animated poster, including the animated poster URL',
});

// projection=prevue
export const AssetPrevueSchema = z.object({
	'@type': z.literal('AssetPrevue')
		.describe('Type of the asset prevue'),
	prevue_url: z.url().min(20).max(65535).optional()
		.describe('The URL of the asset prevue'),
}).register(dsbunnyRegistry, {
	id: 'AssetPrevueSchema',
	description: 'The schema for the asset prevue, including the prevue URL',
});

export const AssetSchema =
	AssetBaseSchema.extend(AssetMetadataSchema.shape)
		.extend(AssetPosterSchema.shape)
		.extend(AssetAnimatedPosterSchema.shape)
		.extend(AssetPrevueSchema.shape)
		.extend({
			'@type': z.literal('Asset')
				.describe('Type of the asset'),
		})
		.register(dsbunnyRegistry, {
			id: 'AssetSchema',
			description: 'The complete schema for an asset, including base information, metadata, poster, animated poster, and prevue',
		});
export type Asset = z.infer<typeof AssetSchema>;
