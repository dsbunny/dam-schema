// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { sqliteDateSchema } from './sqlite-date.schema.js';
export const Part = z.object({
    tenant_id: z.uuid()
        .describe('The tenant ID of the upload'),
    upload_id: z.uuid()
        .describe('The upload ID of the part'),
    part_number: z.number().min(1).max(10000)
        .describe('The part number of the upload'),
    s3_etag: z.string().min(2).max(2048)
        .describe('The S3 ETag of the part'),
    size: z.number().max(5368709120) // 5GB
        .describe('The size of the part in bytes'),
    create_timestamp: z.string().datetime() // ISO 8601
        .describe('The timestamp when the part was created'),
    modify_timestamp: z.string().datetime()
        .describe('The timestamp when the part was last modified'),
    is_deleted: z.boolean()
        .describe('Whether the part is deleted'),
});
export const DbDtoFromPart = Part.transform((part) => {
    return {
        ...part,
    };
});
export const DbDtoToPart = z.object({
    tenant_id: z.uuid(),
    upload_id: z.uuid(),
    part_number: z.number().min(1).max(10000),
    s3_etag: z.string().min(2).max(2048),
    size: z.number().max(5368709120), // 5GB
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.number().default(0),
})
    .transform((dto) => {
    return {
        ...dto,
        is_deleted: Boolean(dto.is_deleted),
    };
});
//# sourceMappingURL=part.schema.js.map