// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
export const PresignedUrlSchema = z.object({
    url: z.string(),
    expires: z.string(),
}).register(dsbunnyRegistry, {
    id: 'PresignedUrlSchema',
    description: 'The schema for a presigned URL, including the URL and expiration timestamp',
});
export const PresignedIndexedUrlSchema = PresignedUrlSchema.extend({
    index: z.number().int().nonnegative(),
}).register(dsbunnyRegistry, {
    id: 'PresignedIndexedUrlSchema',
    description: 'The schema for a presigned indexed URL, including the URL, expiration timestamp, and index',
});
//# sourceMappingURL=presigned-url.schema.js.map