import * as z from "zod";
export declare const PresignedUrlSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PresignedUrl">;
    url: z.ZodString;
    expires: z.ZodString;
}, z.core.$strip>;
export type PresignedUrl = z.infer<typeof PresignedUrlSchema>;
export declare const PresignedIndexedUrlSchema: z.ZodObject<{
    url: z.ZodString;
    expires: z.ZodString;
    '@type': z.ZodLiteral<"PresignedIndexedUrl">;
    index: z.ZodNumber;
}, z.core.$strip>;
export type PresignedIndexedUrl = z.infer<typeof PresignedIndexedUrlSchema>;
//# sourceMappingURL=presigned-url.schema.d.ts.map