import { z } from 'zod';
export declare const CurrentVersionMetadata: z.ZodObject<{
    is_current: z.ZodLiteral<true>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    is_current: true;
    version: number;
    origin_name: string;
}, {
    is_current: true;
    version: number;
    origin_name: string;
}>;
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
        s3_parts: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    }, {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    }>;
    metadata_metadata: z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }>;
    poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster">;
        poster: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"poster-image">;
            quality: z.ZodEnum<["medium", "high", "sample"]>;
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
            }, "strip", z.ZodTypeAny, {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            }, {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }, {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }, {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }>>;
    poster_analysis: z.ZodOptional<z.ZodObject<{
        caption: z.ZodString;
        tags: z.ZodArray<z.ZodString, "many">;
        source: z.ZodString;
        generated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    }, {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    }>>;
    animated_poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"animated-poster">;
        poster: z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"animated-poster-image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                animated_poster_ffmpeg_duration: z.ZodNumber;
                animated_poster_ck_duration: z.ZodNumber;
                animated_poster_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            }, {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        }, {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }, {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }>>;
    poster_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster-series">;
        series: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"poster-series-image">;
            index: z.ZodNumber;
            quality: z.ZodEnum<["medium", "high", "sample"]>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_series_ffmpeg_duration: z.ZodNumber;
                poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_ck_duration: z.ZodNumber;
                poster_series_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            }, {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }, {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }, {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }>>;
    tile_series_metadata: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        type: z.ZodLiteral<"tile-series-metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }, {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }>>;
    prevue_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"prevue">;
        prevue: z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"prevue-video">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                prevue_ffmpeg_duration: z.ZodNumber;
                prevue_ck_duration: z.ZodNumber;
                prevue_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            }, {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        }, {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }, {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    is_current: false;
    version: number;
    origin_name: string;
    keep_forever: boolean;
    file: {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    };
    metadata_metadata: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    };
    poster_metadata?: {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    poster_analysis?: {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    } | undefined;
    animated_poster_metadata?: {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
    poster_series_metadata?: {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    tile_series_metadata?: {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    } | undefined;
    prevue_metadata?: {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
}, {
    is_current: false;
    version: number;
    origin_name: string;
    keep_forever: boolean;
    file: {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    };
    metadata_metadata: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    };
    poster_metadata?: {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    poster_analysis?: {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    } | undefined;
    animated_poster_metadata?: {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
    poster_series_metadata?: {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    tile_series_metadata?: {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    } | undefined;
    prevue_metadata?: {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
}>;
export type OldVersionMetadata = z.infer<typeof OldVersionMetadata>;
export declare const VersionMetadata: z.ZodUnion<[z.ZodObject<{
    is_current: z.ZodLiteral<true>;
    version: z.ZodNumber;
    origin_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    is_current: true;
    version: number;
    origin_name: string;
}, {
    is_current: true;
    version: number;
    origin_name: string;
}>, z.ZodObject<{
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
        s3_parts: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    }, {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    }>;
    metadata_metadata: z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        type: z.ZodLiteral<"metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }, {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }>;
    poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster">;
        poster: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"poster-image">;
            quality: z.ZodEnum<["medium", "high", "sample"]>;
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
            }, "strip", z.ZodTypeAny, {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            }, {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }, {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }, {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }>>;
    poster_analysis: z.ZodOptional<z.ZodObject<{
        caption: z.ZodString;
        tags: z.ZodArray<z.ZodString, "many">;
        source: z.ZodString;
        generated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    }, {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    }>>;
    animated_poster_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"animated-poster">;
        poster: z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"animated-poster-image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                animated_poster_ffmpeg_duration: z.ZodNumber;
                animated_poster_ck_duration: z.ZodNumber;
                animated_poster_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            }, {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        }, {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }, {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }>>;
    poster_series_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"poster-series">;
        series: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"poster-series-image">;
            index: z.ZodNumber;
            quality: z.ZodEnum<["medium", "high", "sample"]>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                poster_series_ffmpeg_duration: z.ZodNumber;
                poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_ck_duration: z.ZodNumber;
                poster_series_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            }, {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }, {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }, {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    }>>;
    tile_series_metadata: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        type: z.ZodLiteral<"base">;
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
            s3_parts: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }, {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        }>;
        timings: z.ZodObject<{
            file_http_duration: z.ZodNumber;
            file_ck_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            file_http_duration: number;
            file_ck_duration: number;
        }, {
            file_http_duration: number;
            file_ck_duration: number;
        }>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, {
        type: z.ZodLiteral<"tile-series-metadata">;
        timings: z.ZodObject<{
            metadata_http_duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            metadata_http_duration: number;
        }, {
            metadata_http_duration: number;
        }>;
    }>, "strip", z.ZodTypeAny, {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }, {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    }>>;
    prevue_metadata: z.ZodOptional<z.ZodObject<{
        type: z.ZodLiteral<"prevue">;
        prevue: z.ZodObject<z.objectUtil.extendShape<{
            type: z.ZodLiteral<"base">;
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
                s3_parts: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }, {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            }>;
            timings: z.ZodObject<{
                file_http_duration: z.ZodNumber;
                file_ck_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                file_http_duration: number;
                file_ck_duration: number;
            }, {
                file_http_duration: number;
                file_ck_duration: number;
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, {
            type: z.ZodLiteral<"prevue-video">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                prevue_ffmpeg_duration: z.ZodNumber;
                prevue_ck_duration: z.ZodNumber;
                prevue_http_duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            }, {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            }>;
        }>, "strip", z.ZodTypeAny, {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        }, {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }, {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    is_current: false;
    version: number;
    origin_name: string;
    keep_forever: boolean;
    file: {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    };
    metadata_metadata: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    };
    poster_metadata?: {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    poster_analysis?: {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    } | undefined;
    animated_poster_metadata?: {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
    poster_series_metadata?: {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    tile_series_metadata?: {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    } | undefined;
    prevue_metadata?: {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
}, {
    is_current: false;
    version: number;
    origin_name: string;
    keep_forever: boolean;
    file: {
        size: number;
        s3_filename: string;
        content_type: string;
        mtime: string;
        md5: string;
        sha256: string;
        s3_uri: string;
        s3_version_id: string;
        s3_etag: string;
        s3_parts: number[];
    };
    metadata_metadata: {
        type: "metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    };
    poster_metadata?: {
        type: "poster";
        poster: {
            type: "poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_ck_duration: number;
                poster_http_duration: number;
                poster_canvas_duration?: number | undefined;
                poster_ffmpeg_duration?: number | undefined;
                poster_avifenc_duration?: number | undefined;
                poster_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    poster_analysis?: {
        caption: string;
        tags: string[];
        source: string;
        generated_at: string;
    } | undefined;
    animated_poster_metadata?: {
        type: "animated-poster";
        poster: {
            type: "animated-poster-image";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                animated_poster_ffmpeg_duration: number;
                animated_poster_ck_duration: number;
                animated_poster_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
    poster_series_metadata?: {
        type: "poster-series";
        series: {
            type: "poster-series-image";
            index: number;
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                poster_series_ffmpeg_duration: number;
                poster_series_ck_duration: number;
                poster_series_http_duration: number;
                poster_series_avifenc_duration?: number | undefined;
                poster_series_sharp_duration?: number | undefined;
            };
            quality: "medium" | "high" | "sample";
            tags?: string[] | undefined;
            blurhash?: string | undefined;
        }[];
    } | undefined;
    tile_series_metadata?: {
        type: "tile-series-metadata";
        file: {
            size: number;
            s3_filename: string;
            content_type: string;
            mtime: string;
            md5: string;
            sha256: string;
            s3_uri: string;
            s3_version_id: string;
            s3_etag: string;
            s3_parts: number[];
        };
        timings: {
            metadata_http_duration: number;
        };
        tags?: string[] | undefined;
    } | undefined;
    prevue_metadata?: {
        type: "prevue";
        prevue: {
            type: "prevue-video";
            width: number;
            height: number;
            file: {
                size: number;
                s3_filename: string;
                content_type: string;
                mtime: string;
                md5: string;
                sha256: string;
                s3_uri: string;
                s3_version_id: string;
                s3_etag: string;
                s3_parts: number[];
            };
            timings: {
                prevue_ffmpeg_duration: number;
                prevue_ck_duration: number;
                prevue_http_duration: number;
            };
            tags?: string[] | undefined;
        };
    } | undefined;
}>]>;
export type VersionMetadata = z.infer<typeof VersionMetadata>;
//# sourceMappingURL=versions.schema.d.ts.map