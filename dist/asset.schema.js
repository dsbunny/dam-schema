// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { AnimatedPosterMetadata, Metadata, MetadataMetadata, PosterMetadata, PosterSeriesMetadata, PrevueMetadata, TileSeriesMetadataMetadata, } from '@dsbunny/metadata-schema';
import { TranscodeStateEnum } from './transcode-state.js';
import { VersionMetadata } from './versions.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';
import { PosterAnalysis } from './poster-analysis.schema.js';
export const SkippableTranscodeStateEnum = z.enum([...TranscodeStateEnum.options, 'skipped'])
    .describe('The state of the transcode, including skipped');
export const AssetSummaryStateEnum = z.enum([
    'pending',
    'ok',
    'rejected',
    'error',
])
    .describe('The state of the asset');
export const AssetBase = z.object({
    tenant_id: z.uuid()
        .describe('The tenant ID of the asset'),
    name: z.string().min(1).max(100)
        .describe('The name of the asset'),
    metadata: Metadata,
    metadata_metadata: MetadataMetadata
        .describe('The metadata of the asset'),
    poster_metadata: PosterMetadata.optional()
        .describe('The poster entry of the asset'),
    poster_analysis: PosterAnalysis.optional()
        .describe('Generated analysis of the poster including caption and tags'),
    animated_poster_metadata: AnimatedPosterMetadata.optional()
        .describe('The animated poster entry of the asset'),
    poster_series_metadata: PosterSeriesMetadata.optional()
        .describe('The poster entries of the asset'),
    poster_series_selected_index: z.number().int().min(1).max(3).optional()
        .describe('The selected index of the poster series'),
    tile_series_metadata: TileSeriesMetadataMetadata.optional()
        .describe('The tile entries of the asset'),
    prevue_metadata: PrevueMetadata.optional()
        .describe('The prevue entry of the asset'),
    metadata_state: TranscodeStateEnum
        .describe('The status of the metadata transcode'),
    poster_state: SkippableTranscodeStateEnum
        .describe('The status of the poster transcode'),
    animated_poster_state: SkippableTranscodeStateEnum
        .describe('The status of the animated poster transcode'),
    poster_series_state: SkippableTranscodeStateEnum
        .describe('The status of the poster series transcode'),
    tile_series_state: SkippableTranscodeStateEnum
        .describe('The status of the tile series transcode'),
    prevue_state: SkippableTranscodeStateEnum
        .describe('The status of the prevue transcode'),
    is_settled: z.boolean()
        .describe('Whether the asset is settled, not expected to change'),
    user_tags: z.array(z.string().max(64))
        .describe('The user tags of the asset'),
    versions: z.array(VersionMetadata)
        .describe('The versions of the asset'),
    tags: z.array(z.string().max(64))
        .describe('The tags of the asset'),
});
export const AssetMetadata = z.object({
    asset_id: z.uuid()
        .describe('The UUID of the asset'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of when the asset was created'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of when the asset was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the asset is deleted'),
});
// projection=poster
export const AssetPoster = z.object({
    poster_url: z.url().min(20).max(65535).optional()
        .describe('The URL of the asset poster'),
});
// projection=animated_poster
export const AssetAnimatedPoster = z.object({
    animated_poster_url: z.url().min(20).max(2048).optional()
        .describe('The URL of the asset animated poster'),
});
// projection=prevue
export const AssetPrevue = z.object({
    prevue_url: z.url().min(20).max(65535).optional()
        .describe('The URL of the asset prevue'),
});
export const Asset = AssetBase.extend(AssetMetadata.shape)
    .extend(AssetPoster.shape)
    .extend(AssetAnimatedPoster.shape)
    .extend(AssetPrevue.shape);
// SQL date string to ISO 8601,
// e.g. "2023-10-15 15:09:50" to "2023-10-15T15:09:50.000Z"
const sqliteDateSchema = z.string().transform((date) => {
    return `${date.replace(' ', 'T')}.000Z`;
});
export const DbDtoFromAssetBase = AssetBase.transform((asset) => {
    return {
        ...asset,
        metadata: JSON.stringify(asset.metadata),
        metadata_metadata: JSON.stringify(asset.metadata_metadata),
        versions: JSON.stringify(asset.versions),
        user_tags: JSON.stringify(asset.user_tags),
        tags: JSON.stringify(asset.tags),
    };
});
export const DbDtoFromAsset = Asset.transform((asset) => {
    return {
        ...asset,
        metadata: JSON.stringify(asset.metadata),
        metadata_metadata: JSON.stringify(asset.metadata_metadata),
        poster_metadata: JSON.stringify(asset.poster_metadata) ?? null,
        poster_analysis: JSON.stringify(asset.poster_analysis) ?? null,
        animated_poster_metadata: JSON.stringify(asset.animated_poster_metadata) ?? null,
        poster_series_metadata: JSON.stringify(asset.poster_series_metadata) ?? null,
        poster_series_selected_index: asset.poster_series_selected_index ?? null,
        tile_series_metadata: JSON.stringify(asset.tile_series_metadata) ?? null,
        prevue_metadata: JSON.stringify(asset.prevue_metadata) ?? null,
        poster_state: asset.poster_state ?? null,
        animated_poster_state: asset.animated_poster_state ?? null,
        poster_series_state: asset.poster_series_state ?? null,
        tile_series_state: asset.tile_series_state ?? null,
        prevue_state: asset.prevue_state ?? null,
        user_tags: JSON.stringify(asset.user_tags),
        versions: JSON.stringify(asset.versions),
        tags: JSON.stringify(asset.tags),
    };
});
export const DbDtoToAssetBase = z.object({
    tenant_id: z.uuid(),
    name: z.string().min(1).max(100),
    metadata: z.string().max(65535),
    metadata_metadata: z.string().max(4096),
    poster_metadata: z.string().max(8192).nullable(),
    poster_analysis: z.string().max(4096).nullable(),
    animated_poster_metadata: z.string().max(4096).nullable(),
    poster_series_metadata: z.string().max(16384).nullable(),
    poster_series_selected_index: z.number().int().min(1).max(3).nullable(),
    tile_series_metadata: z.string().max(16777216).nullable(),
    prevue_metadata: z.string().max(4096).nullable(),
    metadata_state: TranscodeStateEnum,
    poster_state: SkippableTranscodeStateEnum,
    animated_poster_state: SkippableTranscodeStateEnum,
    poster_series_state: SkippableTranscodeStateEnum,
    tile_series_state: SkippableTranscodeStateEnum,
    prevue_state: SkippableTranscodeStateEnum,
    is_settled: z.number(),
    user_tags: z.string().max(65535),
    versions: z.string().max(65535),
    tags: z.string().max(65535),
})
    .transform((dto, ctx) => {
    const metadata_result = jsonSafeParser(Metadata).safeParse(dto.metadata);
    if (!metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const metadata_metadata_result = jsonSafeParser(MetadataMetadata).safeParse(dto.metadata_metadata);
    if (!metadata_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid metadata metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const user_tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.user_tags);
    if (!user_tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid user tags',
            fatal: true,
        });
        return z.NEVER;
    }
    const versions_result = jsonSafeParser(z.array(VersionMetadata)).safeParse(dto.versions);
    if (!versions_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid versions',
            fatal: true,
        });
        return z.NEVER;
    }
    const tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.tags);
    if (!tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tags',
            fatal: true,
        });
        return z.NEVER;
    }
    // The following fields are optional, so we don't need to check for success.
    const poster_analysis_result = !dto.poster_analysis
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterAnalysis).safeParse(dto.poster_analysis);
    if (!poster_analysis_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster analysis',
        });
    }
    const poster_metadata_result = !dto.poster_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterMetadata).safeParse(dto.poster_metadata);
    if (!poster_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster',
        });
    }
    const animated_poster_metadata_result = !dto.animated_poster_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(AnimatedPosterMetadata).safeParse(dto.animated_poster_metadata);
    if (!animated_poster_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid animated poster',
        });
    }
    const poster_series_metadata_result = !dto.poster_series_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterSeriesMetadata).safeParse(dto.poster_series_metadata);
    if (!poster_series_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster series',
        });
    }
    const tile_series_metadata_result = !dto.tile_series_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(TileSeriesMetadataMetadata).safeParse(dto.tile_series_metadata);
    if (!tile_series_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tile series',
        });
    }
    const prevue_metadata_result = !dto.prevue_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PrevueMetadata).safeParse(dto.prevue_metadata);
    if (!prevue_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid prevue',
        });
    }
    return {
        ...dto,
        metadata: metadata_result.data,
        metadata_metadata: metadata_metadata_result.data,
        poster_metadata: poster_metadata_result.data,
        poster_analysis: poster_analysis_result.data,
        animated_poster_metadata: animated_poster_metadata_result.data,
        poster_series_metadata: poster_series_metadata_result.data,
        poster_series_selected_index: dto.poster_series_selected_index ?? undefined,
        tile_series_metadata: tile_series_metadata_result.data,
        prevue_metadata: prevue_metadata_result.data,
        is_settled: Boolean(dto.is_settled),
        user_tags: user_tags_result.data,
        versions: versions_result.data,
        tags: tags_result.data,
    };
});
export const DbDtoToAsset = z.object({
    asset_id: z.uuid(),
    tenant_id: z.uuid(),
    name: z.string().min(1).max(100),
    metadata: z.string().max(65535),
    metadata_metadata: z.string().max(4096),
    poster_metadata: z.string().max(8192).nullable(),
    poster_analysis: z.string().max(4096).nullable(),
    animated_poster_metadata: z.string().max(4096).nullable(),
    poster_series_metadata: z.string().max(16384).nullable(),
    poster_series_selected_index: z.number().int().min(1).max(3).nullable(),
    tile_series_metadata: z.string().max(16777216).nullable(),
    prevue_metadata: z.string().max(4096).nullable(),
    metadata_state: TranscodeStateEnum,
    poster_state: SkippableTranscodeStateEnum,
    animated_poster_state: SkippableTranscodeStateEnum,
    poster_series_state: SkippableTranscodeStateEnum,
    tile_series_state: SkippableTranscodeStateEnum,
    prevue_state: SkippableTranscodeStateEnum,
    is_settled: z.number(),
    user_tags: z.string(),
    versions: z.string(),
    tags: z.string(),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto, ctx) => {
    const metadata_result = jsonSafeParser(Metadata).safeParse(dto.metadata);
    if (!metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const metadata_metadata_result = jsonSafeParser(MetadataMetadata).safeParse(dto.metadata_metadata);
    if (!metadata_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid metadata metadata',
            fatal: true,
        });
        return z.NEVER;
    }
    const user_tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.user_tags);
    if (!user_tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid user tags',
            fatal: true,
        });
        return z.NEVER;
    }
    const versions_result = jsonSafeParser(z.array(VersionMetadata)).safeParse(dto.versions);
    if (!versions_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid versions',
            fatal: true,
        });
        return z.NEVER;
    }
    const tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.tags);
    if (!tags_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tags',
            fatal: true,
        });
        return z.NEVER;
    }
    // The following fields are optional, so we don't need to check for success.
    const poster_analysis_result = !dto.poster_analysis
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterAnalysis).safeParse(dto.poster_analysis);
    if (!poster_analysis_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster analysis',
        });
    }
    const poster_metadata_result = !dto.poster_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterMetadata).safeParse(dto.poster_metadata);
    if (!poster_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster',
        });
    }
    const animated_poster_metadata_result = !dto.animated_poster_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(AnimatedPosterMetadata).safeParse(dto.animated_poster_metadata);
    if (!animated_poster_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid animated poster',
        });
    }
    const poster_series_metadata_result = !dto.poster_series_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PosterSeriesMetadata).safeParse(dto.poster_series_metadata);
    if (!poster_series_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid poster series',
        });
    }
    const tile_series_metadata_result = !dto.tile_series_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(TileSeriesMetadataMetadata).safeParse(dto.tile_series_metadata);
    if (!tile_series_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid tile series',
        });
    }
    const prevue_metadata_result = !dto.prevue_metadata
        ? { success: true, data: undefined }
        : jsonSafeParser(PrevueMetadata).safeParse(dto.prevue_metadata);
    if (!prevue_metadata_result.success) {
        ctx.addIssue({
            code: "custom",
            message: 'Invalid prevue',
        });
    }
    return {
        ...dto,
        metadata: metadata_result.data,
        metadata_metadata: metadata_metadata_result.data,
        poster_metadata: poster_metadata_result.data,
        poster_analysis: poster_analysis_result.data,
        animated_poster_metadata: animated_poster_metadata_result.data,
        poster_series_metadata: poster_series_metadata_result.data,
        poster_series_selected_index: dto.poster_series_selected_index ?? undefined,
        tile_series_metadata: tile_series_metadata_result.data,
        prevue_metadata: prevue_metadata_result.data,
        is_settled: Boolean(dto.is_settled),
        user_tags: user_tags_result.data,
        versions: versions_result.data,
        tags: tags_result.data,
        is_deleted: Boolean(dto.is_deleted),
    };
});
export const PresignedPosterUrl = z.object({
    url: z.url().min(20).max(2048),
    index: z.number().int().min(1).max(3),
});
//# sourceMappingURL=asset.schema.js.map