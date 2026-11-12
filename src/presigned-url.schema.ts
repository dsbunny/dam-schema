// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export const PresignedUrlSchema = z.object({
	'@type': z.literal('PresignedUrl')
		.describe('Type of the presigned URL'),
	url: z.string()
		.describe('The presigned URL'),
	expires: z.string()
		.describe('The expiration timestamp of the presigned URL'),
}).register(dsbunnyRegistry, {
	id: 'PresignedUrlSchema',
	description: 'The schema for a presigned URL, including the URL and expiration timestamp',
});
export type PresignedUrl = z.infer<typeof PresignedUrlSchema>;

export const PresignedIndexedUrlSchema = PresignedUrlSchema.extend({
	'@type': z.literal('PresignedIndexedUrl')
		.describe('Type of the presigned indexed URL'),
	index: z.number().int().nonnegative()
		.describe('The index of the presigned indexed URL'),
}).register(dsbunnyRegistry, {
	id: 'PresignedIndexedUrlSchema',
	description: 'The schema for a presigned indexed URL, including the URL, expiration timestamp, and index',
});
export type PresignedIndexedUrl = z.infer<typeof PresignedIndexedUrlSchema>;
