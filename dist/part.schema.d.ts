import * as z from "zod";
export declare const PartSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"Part">;
    tenant_id: z.ZodUUID;
    upload_id: z.ZodUUID;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodBoolean;
}, z.core.$strip>;
export type Part = z.infer<typeof PartSchema>;
//# sourceMappingURL=part.schema.d.ts.map