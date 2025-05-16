import { z } from 'zod/v4';
export declare const PosterAnalysis: z.ZodObject<{
    description: z.ZodString;
    tags: z.ZodArray<z.ZodString>;
    source: z.ZodString;
    generated_at: z.iso.ZodISODateTime;
}, {}, {}>;
export type PosterAnalysis = z.infer<typeof PosterAnalysis>;
//# sourceMappingURL=poster-analysis.schema.d.ts.map