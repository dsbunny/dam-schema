import { z } from 'zod';
export declare const PosterAnalysis: z.ZodObject<{
    description: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    source: z.ZodString;
    generated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    tags: string[];
    source: string;
    generated_at: string;
}, {
    description: string;
    tags: string[];
    source: string;
    generated_at: string;
}>;
export type PosterAnalysis = z.infer<typeof PosterAnalysis>;
//# sourceMappingURL=poster-analysis.schema.d.ts.map