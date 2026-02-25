import * as z from "zod";
export declare const PresignedUrl: z.ZodObject<{
    url: z.ZodString;
    expires: z.ZodString;
}, z.core.$strip>;
export type PresignedUrl = z.infer<typeof PresignedUrl>;
export declare const PresignedIndexedUrl: z.ZodObject<{
    url: z.ZodString;
    expires: z.ZodString;
    index: z.ZodNumber;
}, z.core.$strip>;
export type PresignedIndexedUrl = z.infer<typeof PresignedIndexedUrl>;
//# sourceMappingURL=presigned-url.schema.d.ts.map