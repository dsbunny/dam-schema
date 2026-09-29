import * as z from "zod";
export declare const PresignedUrlSchema: z.ZodObject<{
    url: z.ZodString;
    expires: z.ZodString;
}, z.core.$strip>;
export type PresignedUrl = z.infer<typeof PresignedUrlSchema>;
export declare const PresignedIndexedUrlSchema: z.ZodObject<{
    url: z.ZodString;
    expires: z.ZodString;
    index: z.ZodNumber;
}, z.core.$strip>;
export type PresignedIndexedUrl = z.infer<typeof PresignedIndexedUrlSchema>;
//# sourceMappingURL=presigned-url.schema.d.ts.map