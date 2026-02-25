# Changelog
## v16.0.15
- Bump to `zod@4.3.6`.
- Add `@dsbunny/robust-task-schema` dependency for task state and status.
- Add schema for DAM raised WebHooks.
- Move `DamTasks*` from `dam-schema` to `dam-worker-pool` for internal usage.

## v16.0.14
- New internal schema for asynchronous tasks.
- Migrate to `@dsbunny/error-schema` and `@dsbunny/webhook-schema`.
- New composite `DamAssetRequest`/`DamAssetResponse`, and `DamUploadRequest`/`DamUploadResponse` for public API.  Split for _assets_ and _uploads_ due to compiler limitations.
- Replace `parts` table with additional fields within `s3_parts` column now presented as `Array<S3Part>`.

## v15.1.13
- Add `user_tags` and `system_tags` to `CreateUploadRequest` to enable the _Publisher_ to set `is:schedule` tag.
- Add `system_tags` to `Upload` and `Asset` schemas.

## v15.0.12
- Rename `UpdateAssetRequest` to `PatchAssetRequest` and set a limit of 50 operations.
- Add `ListUploadsRequest` schema for retrieving multiple upload IDs in one request.

## v14.3.11
- Add API for name availability.

## v14.2.10
- Bump to `zod@4.1.11`.
- Move Zod to `peerDependencies` so users can bring their own Zod.

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
