import { z } from 'zod';
export declare const PosterAnalysis: z.ZodObject<{
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
}>;
export type PosterAnalysis = z.infer<typeof PosterAnalysis>;
//# sourceMappingURL=poster-analysis.schema.d.ts.map