// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export const PartSchema = z.object({
	tenant_id: z.uuid()
		.describe('The tenant ID of the upload'),
	upload_id: z.uuid()
		.describe('The upload ID of the part'),
	part_number: z.number().min(1).max(10000)
		.describe('The part number of the upload'),
	s3_etag: z.string().min(2).max(2048)
		.describe('The S3 ETag of the part'),
	size: z.number().max(5368709120)  // 5GB
		.describe('The size of the part in bytes'),
	create_timestamp: z.string().datetime()  // ISO 8601
		.describe('The timestamp when the part was created'),
	modify_timestamp: z.string().datetime()
		.describe('The timestamp when the part was last modified'),
	is_deleted: z.boolean()
		.describe('Whether the part is deleted'),
}).register(dsbunnyRegistry, {
	id: 'PartSchema',
	description: 'The schema for a part of an upload, including tenant ID, upload ID, part number, S3 ETag, size, timestamps, and deletion status',
});
export type Part = z.infer<typeof PartSchema>;
