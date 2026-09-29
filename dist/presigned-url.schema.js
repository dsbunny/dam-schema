// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
export const PresignedUrlSchema = z.object({
    url: z.string(),
    expires: z.string(),
});
export const PresignedIndexedUrlSchema = PresignedUrlSchema.extend({
    index: z.number().int().nonnegative(),
});
//# sourceMappingURL=presigned-url.schema.js.map