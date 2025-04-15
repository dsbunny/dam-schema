// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
export const PosterAnalysis = z.object({
    description: z.string()
        .describe('Generated description for the poster image'),
    tags: z.array(z.string())
        .describe('Generated tags derived from the poster image'),
    source: z.string()
        .describe('Name or identifier of the service that generated the analysis'),
    generated_at: z.string().datetime()
        .describe('ISO timestamp when the analysis was generated')
});
//# sourceMappingURL=poster-analysis.schema.js.map