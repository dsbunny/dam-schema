import * as z from "zod";
export declare const PosterAnalysisSchema: z.ZodObject<{
    description: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    source: z.ZodString;
    generated_at: z.ZodISODateTime;
}, z.core.$strip>;
export type PosterAnalysis = z.infer<typeof PosterAnalysisSchema>;
//# sourceMappingURL=poster-analysis.schema.d.ts.map