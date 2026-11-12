// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { MetadataMetadataSchema } from '@dsbunny/metadata-schema';
import { S3URISchema } from '@dsbunny/net-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { AWSSchema } from "./aws.schema.js";
import { S3CompleteTaskStateSchema } from './s3-complete.schema.js';
import { TranscodeTaskStateSchema } from "./transcode.schema.js";

export const CanSaveStatusSchema = z.object({
	'@type': z.literal('CanSaveStatus')
		.describe('Type of the can save status'),
	upload_id: z.uuid(),
	can_save: z.boolean(),
	is_rejected: z.boolean(),
	has_error: z.boolean(),
	is_pending: z.boolean(),
	is_processing: z.boolean(),
	modify_timestamp: z.iso.datetime(),
}).register(dsbunnyRegistry, {
	id: 'CanSaveStatusSchema',
	description: 'The schema for the can save status of an upload, including upload ID, status flags, and modification timestamp',
});
export type CanSaveStatus = z.infer<typeof CanSaveStatusSchema>;

export const S3PartSchema = z.object({
	'@type': z.literal('S3Part')
		.describe('Type of the S3 part'),
	part_number: z.number().min(1).max(10000)
		.describe('The part number of the part. This is a positive integer between 1 and 10,000.'),
	etag: z.string().min(2).max(2048)
		.describe('The entity tag returned when the part was uploaded.'),
	size: z.number().min(20).max(5497558138880)  // 5TB
		.describe('The size of the part in bytes.'),
}).register(dsbunnyRegistry, {
	id: 'S3PartSchema',
	description: 'The schema for an S3 part, including part number, ETag, and size',
});
export type S3Part = z.infer<typeof S3PartSchema>;

export const UploadMetadataSchema = z.record(z.string(), z.string().max(255)).register(dsbunnyRegistry, {
	id: 'UploadMetadataSchema',
	description: 'The schema for upload metadata, including key-value pairs of strings with a maximum length of 255',
});
export type UploadMetadata = z.infer<typeof UploadMetadataSchema>;

export const UploadSchema = z.object({
	'@type': z.literal('Upload')
		.describe('Type of the upload'),
	upload_id: z.uuid()
		.describe('The upload ID'),
	tenant_id: z.uuid()
		.describe('The tenant ID of the upload'),
	asset_id: z.uuid()
		.describe('The asset ID of the upload'),
	s3_upload_id: z.string().min(2).max(2048).optional()
		.describe('The S3 upload ID of the upload'),
	s3_metadata: AWSSchema.CompleteMultipartUploadResponseSchema.optional()
		.describe('The S3 metadata of the upload'),
	s3_version_id: z.string().min(2).max(255).optional()
		.describe('The S3 version ID of the upload'),
	s3_etag: z.string().min(2).max(2048).optional()
		.describe('The S3 ETag of the upload'),
	s3_parts: z.array(S3PartSchema).optional()
		.describe('The S3 parts of the upload'),
	size: z.number().min(20).max(5497558138880).optional()  // 5TB
		.describe('The size of the upload in bytes'),
	origin_filename: z.string().min(1).max(255)
		.describe('The original filename of the upload'),
	s3_filename: z.string().min(1).max(255)
		.describe('The normalized filename of the upload'),
	content_type: z.string().min(5).max(255)
		.describe('The content type of the upload'),
	s3_uri: S3URISchema.min(20).max(2048)
		.describe('The S3 URI of the upload'),
	asset_name: z.string().min(1).max(255)
		.describe('The asset name of the upload'),
	metadata_metadata: MetadataMetadataSchema.optional()
		.describe('The metadata of the upload'),
	// `upload` is a client driven state machine
	task_upload_status: z.enum(RobustTask.StatusValues),
	// `s3_complete` and `gen_metadata` are server driven state machines
	task_s3_complete_state: S3CompleteTaskStateSchema,
	task_s3_complete_status: z.enum(RobustTask.StatusValues),
	task_gen_metadata_state: TranscodeTaskStateSchema,
	task_gen_metadata_status: z.enum(RobustTask.StatusValues),
	// `save` is a server driven state machine
	task_save_status: z.enum(RobustTask.StatusValues),
	user_tags: z.array(z.string().max(64))
		.describe('The tags of the upload'),
	system_tags: z.array(z.string().max(64))
		.describe('The system tags of the upload'),
	create_timestamp: z.iso.datetime()  // ISO 8601
		.describe('The ISO datetime when the upload was created'),
	modify_timestamp: z.iso.datetime()
		.describe('The ISO datetime when the upload was last modified'),
	is_deleted: z.boolean().default(false)
		.describe('Whether the upload is deleted'),
}).register(dsbunnyRegistry, {
	id: 'UploadSchema',
	description: 'The schema for an upload, including asset details, S3 information, task statuses, tags, timestamps, and deletion status',
});
export type Upload = z.infer<typeof UploadSchema>;

export const ValidatedUploadSchema = UploadSchema.required({
	s3_version_id: true,
	s3_etag: true,
	s3_parts: true,
	size: true,
}).register(dsbunnyRegistry, {
	id: 'ValidatedUploadSchema',
	description: 'The schema for a validated upload, requiring S3 version ID, ETag, parts, and size',
});
export type ValidatedUpload = z.infer<typeof ValidatedUploadSchema>;

export const ValidatedUploadWithMetadataSchema = ValidatedUploadSchema.required({
	metadata_metadata: true,
}).register(dsbunnyRegistry, {
	id: 'ValidatedUploadWithMetadataSchema',
	description: 'The schema for a validated upload with metadata, requiring S3 version ID, ETag, parts, size, and metadata',
});
export type ValidatedUploadWithMetadata = z.infer<typeof ValidatedUploadWithMetadataSchema>;
