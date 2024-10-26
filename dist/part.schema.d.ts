import { z } from 'zod';
export declare const Part: z.ZodObject<{
    tenant_id: z.ZodString;
    upload_id: z.ZodString;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}>;
export type Part = z.infer<typeof Part>;
export declare const DbDtoFromPart: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    upload_id: z.ZodString;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}>, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}>;
export declare const DbDtoToPart: z.ZodEffects<z.ZodObject<{
    tenant_id: z.ZodString;
    upload_id: z.ZodString;
    part_number: z.ZodNumber;
    s3_etag: z.ZodString;
    size: z.ZodNumber;
    create_timestamp: z.ZodEffects<z.ZodString, string, string>;
    modify_timestamp: z.ZodEffects<z.ZodString, string, string>;
    is_deleted: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: number;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    is_deleted?: number | undefined;
}>, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
}, {
    tenant_id: string;
    create_timestamp: string;
    modify_timestamp: string;
    upload_id: string;
    part_number: number;
    s3_etag: string;
    size: number;
    is_deleted?: number | undefined;
}>;
//# sourceMappingURL=part.schema.d.ts.map