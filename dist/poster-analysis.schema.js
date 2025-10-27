// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
export const PosterAnalysis = z.object({
    description: z.string()
        .describe('Generated description for the poster image'),
    tags: z.array(z.string())
        .describe('Generated tags derived from the poster image'),
    source: z.string()
        .describe('Name or identifier of the service that generated the analysis'),
    generated_at: z.iso.datetime()
        .describe('ISO datetime when the analysis was generated')
});
//# sourceMappingURL=poster-analysis.schema.js.map