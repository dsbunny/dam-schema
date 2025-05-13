import { z } from 'zod';
export declare const Part: z.ZodObject<{
    tenant_id: z.ZodUUID;
    upload_id: z.ZodUUID;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodBoolean;
}, {}, {}>;
export type Part = z.infer<typeof Part>;
export declare const DbDtoFromPart: z.ZodPipe<z.ZodObject<{
    tenant_id: z.ZodUUID;
    upload_id: z.ZodUUID;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodBoolean;
}, {}, {}>, z.ZodTransform<{
    tenant_id: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    tenant_id: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoToPart: z.ZodPipe<z.ZodObject<{
    tenant_id: z.ZodUUID;
    upload_id: z.ZodUUID;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, {}, {}>, z.ZodTransform<{
    tenant_id: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    tenant_id: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
}>>;
//# sourceMappingURL=part.schema.d.ts.map