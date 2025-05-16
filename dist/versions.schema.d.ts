import { z } from 'zod/v4';
export declare const CurrentVersionMetadata: z.ZodObject<{
    is_current: z.ZodLiteral<true>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
}, {}, {}>;
export type CurrentVersionMetadata = z.infer<typeof CurrentVersionMetadata>;
export declare const OldVersionMetadata: z.ZodObject<{
    is_current: z.ZodLiteral<false>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
    keep_forever: z.ZodBoolean;
    file: z.ZodObject<{
        s3_filename: z.ZodString;
        content_type: z.ZodString;
        size: z.ZodNumber;
        mtime: z.ZodString;
        md5: z.ZodString;
        sha256: z.ZodString;
        s3_uri: z.ZodString;
        s3_version_id: z.ZodString;
        s3_etag: z.ZodString;
        s3_parts: z.ZodArray<z.ZodNumber>;
    }, {}, {}>;
    metadata_metadata: z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>;
    poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster">;
        poster: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"poster-image">;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_ck_duration: z.ZodNumber;
                poster_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
    }, {}, {}>>;
    poster_analysis: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        source: z.ZodString;
        generated_at: z.iso.ZodISODateTime;
    }, {}, {}>>;
    animated_poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"animated-poster">;
        poster: z.ZodObject<{
            type: z.ZodLiteral<"animated-poster-image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                animated_poster_ffmpeg_duration: z.ZodNumber;
                animated_poster_ck_duration: z.ZodNumber;
                animated_poster_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>;
    }, {}, {}>>;
    poster_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster-series">;
        series: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"poster-series-image">;
            index: z.ZodNumber;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_series_ffmpeg_duration: z.ZodNumber;
                poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_ck_duration: z.ZodNumber;
                poster_series_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
    }, {}, {}>>;
    tile_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"tile-series-metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>>;
    prevue_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"prevue">;
        prevue: z.ZodObject<{
            type: z.ZodLiteral<"prevue-video">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                prevue_ffmpeg_duration: z.ZodNumber;
                prevue_ck_duration: z.ZodNumber;
                prevue_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>;
    }, {}, {}>>;
}, {}, {}>;
export type OldVersionMetadata = z.infer<typeof OldVersionMetadata>;
export declare const VersionMetadata: z.ZodUnion<[z.ZodObject<{
    is_current: z.ZodLiteral<true>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
}, {}, {}>, z.ZodObject<{
    is_current: z.ZodLiteral<false>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
    keep_forever: z.ZodBoolean;
    file: z.ZodObject<{
        s3_filename: z.ZodString;
        content_type: z.ZodString;
        size: z.ZodNumber;
        mtime: z.ZodString;
        md5: z.ZodString;
        sha256: z.ZodString;
        s3_uri: z.ZodString;
        s3_version_id: z.ZodString;
        s3_etag: z.ZodString;
        s3_parts: z.ZodArray<z.ZodNumber>;
    }, {}, {}>;
    metadata_metadata: z.ZodObject<{
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>;
    poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster">;
        poster: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"poster-image">;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_ck_duration: z.ZodNumber;
                poster_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
    }, {}, {}>>;
    poster_analysis: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
        source: z.ZodString;
        generated_at: z.iso.ZodISODateTime;
    }, {}, {}>>;
    animated_poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"animated-poster">;
        poster: z.ZodObject<{
            type: z.ZodLiteral<"animated-poster-image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                animated_poster_ffmpeg_duration: z.ZodNumber;
                animated_poster_ck_duration: z.ZodNumber;
                animated_poster_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>;
    }, {}, {}>>;
    poster_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster-series">;
        series: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"poster-series-image">;
            index: z.ZodNumber;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_series_ffmpeg_duration: z.ZodNumber;
                poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_ck_duration: z.ZodNumber;
                poster_series_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
    }, {}, {}>>;
    tile_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"tile-series-metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, {}, {}>;
        file: z.ZodObject<{
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, {}, {}>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>>;
    prevue_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"prevue">;
        prevue: z.ZodObject<{
            type: z.ZodLiteral<"prevue-video">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                prevue_ffmpeg_duration: z.ZodNumber;
                prevue_ck_duration: z.ZodNumber;
                prevue_http_duration: z.ZodNumber;
            }, {}, {}>;
            file: z.ZodObject<{
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, {}, {}>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>;
    }, {}, {}>>;
}, {}, {}>]>;
export type VersionMetadata = z.infer<typeof VersionMetadata>;
//# sourceMappingURL=versions.schema.d.ts.map