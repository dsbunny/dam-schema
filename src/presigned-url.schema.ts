// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const PresignedUrl = z.object({
	url: z.string(),
	expires: z.string(),
});
export type PresignedUrl = z.infer<typeof PresignedUrl>;

export const PresignedIndexedUrl = PresignedUrl.extend({
	index: z.number().int().nonnegative(),
});
export type PresignedIndexedUrl = z.infer<typeof PresignedIndexedUrl>;
