# Changelog
## v14.1.9
- Expose `JsonPatchOperation` schema.

## v14.1.8
- Add new API schema for the DAM service itself.

## v14.0.7
- Bump to `zod@next` with `zod/v4` imports.

## v14.0.6
- Bump to `zod@4.0.0-beta`.
- Dependency rename `@dsbunny/metadata` → `@dsbunny/metadata-schema`.

## v13.0.5
- Change from `caption` to `description` for `PosterAnalysis`.

## v12.0.4
- Add `user_tags` pairing with `tags` under `metadata` from new `@dsbunny/metadata`, and `poster_analysis`.

## v11.3.3
- Add `PosterAnalysis` object for generated captions and tags.

## v11.2.2
- Replace `TileSeriesMetadata` with `TileSeriesMetadataMetadata`.

## v11.1.1
- Increase limit for `tile_series_metadata` to 16MB for long videos.

## v11.1.0
- Initial release, derived from `dam` service hence the starting version number.
