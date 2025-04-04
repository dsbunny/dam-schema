// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

export const PosterAnalysis = z.object({
	caption: z.string()
		.describe('Generated caption for the poster image'),
	tags: z.array(z.string())
	  	.describe('Generated tags derived from the poster image'),
	source: z.string()
	  	.describe('Name or identifier of the service that generated the analysis'),
	generated_at: z.string().datetime()
	  	.describe('ISO timestamp when the analysis was generated')
});
export type PosterAnalysis = z.infer<typeof PosterAnalysis>;
