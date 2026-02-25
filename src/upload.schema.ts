// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { MetadataMetadata } from '@dsbunny/metadata-schema';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { sqliteDateSchema } from './sqlite-date.schema.js';
import { jsonSafeParser } from './json-safe-parser.js';
import { S3URI } from './uri.schema.js';

export const CanSaveStatus = z.object({
	upload_id: z.uuid(),
	can_save: z.boolean(),
	is_rejected: z.boolean(),
	has_error: z.boolean(),
	is_pending: z.boolean(),
	is_processing: z.boolean(),
	modify_timestamp: z.iso.datetime(),
});
export type CanSaveStatus = z.infer<typeof CanSaveStatus>;

export const DbDtoToCanSaveStatus = z.object({
	upload_id: z.uuid(),
	can_save: z.number(),
	is_rejected: z.number(),
	has_error: z.number(),
	is_pending: z.number(),
	is_processing: z.number(),
	modify_timestamp: sqliteDateSchema,
})
.transform((dto): CanSaveStatus => {
	return {
		...dto,
		can_save: Boolean(dto.can_save),
		is_rejected: Boolean(dto.is_rejected),
		has_error: Boolean(dto.has_error),
		is_pending: Boolean(dto.is_pending),
		is_processing: Boolean(dto.is_processing),
	};
});

export const S3Metadata = z.object({
	"$metadata": z.object({
		attempts: z.number()
			.describe('The number of times this operation was attempted.'),
		httpStatusCode: z.number()
			.describe('The status code of the last HTTP response received for this operation.'),
		requestId: z.string()
			.describe('A unique identifier for the last request sent for this operation. Often requested by AWS service teams to aid in debugging.'),
		totalRetryDelay: z.number()
			.describe('The total amount of time (in milliseconds) that was spent waiting between retry attempts.'),
	})
		.describe('Metadata pertaining to this request.'),
	Bucket: z.string()
		.describe('The name of the bucket that contains the newly created object.'),
	ETag: z.string()
		.describe('Entity tag that identifies the newly created object\'s data.'),
	Key: z.string()
		.describe('The object key of the newly created object.'),
	Location: z.string()
		.describe('The URI that identifies the newly created object.'),
	VersionId: z.string()
		.describe('Version ID of the newly created object, in case the bucket has versioning turned on.'),
});
export type S3Metadata = z.infer<typeof S3Metadata>;

export const S3Part = z.object({
	part_number: z.number().min(1).max(10000)
		.describe('The part number of the part. This is a positive integer between 1 and 10,000.'),
	etag: z.string().min(2).max(2048)
		.describe('The entity tag returned when the part was uploaded.'),
	size: z.number().min(20).max(5497558138880)  // 5TB
		.describe('The size of the part in bytes.'),
})
export type S3Part = z.infer<typeof S3Part>;

export const UploadMetadata = z.record(z.string(), z.string().max(255));
export type UploadMetadata = z.infer<typeof UploadMetadata>;

export const Upload = z.object({
	upload_id: z.uuid()
		.describe('The upload ID'),
	tenant_id: z.uuid()
		.describe('The tenant ID of the upload'),
	asset_id: z.uuid()
		.describe('The asset ID of the upload'),
	s3_upload_id: z.string().min(2).max(2048).optional()
		.describe('The S3 upload ID of the upload'),
	s3_metadata: S3Metadata.optional()
		.describe('The S3 metadata of the upload'),
	s3_version_id: z.string().min(2).max(255).optional()
		.describe('The S3 version ID of the upload'),
	s3_etag: z.string().min(2).max(2048).optional()
		.describe('The S3 ETag of the upload'),
	s3_parts: z.array(S3Part).optional()
		.describe('The S3 parts of the upload'),
	size: z.number().min(20).max(5497558138880).optional()  // 5TB
		.describe('The size of the upload in bytes'),
	origin_filename: z.string().min(1).max(255)
		.describe('The original filename of the upload'),
	s3_filename: z.string().min(1).max(255)
		.describe('The normalized filename of the upload'),
	content_type: z.string().min(5).max(255)
		.describe('The content type of the upload'),
	s3_uri: S3URI.min(20).max(2048)
		.describe('The S3 URI of the upload'),
	asset_name: z.string().min(1).max(255)
		.describe('The asset name of the upload'),
	metadata_metadata: MetadataMetadata.optional()
		.describe('The metadata of the upload'),
	// `upload` is a client driven state machine
	task_upload_status: z.enum(RobustTask.StatusValues),
	// `s3_complete` and `gen_metadata` are server driven state machines
	task_s3_complete_state: z.enum(RobustTask.StatusValues),
	task_s3_complete_status: z.enum(RobustTask.StatusValues),
	task_gen_metadata_state: z.enum(RobustTask.StatusValues),
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
});
export type Upload = z.infer<typeof Upload>;

export const ValidatedUpload = Upload.required({
	s3_version_id: true,
	s3_etag: true,
	s3_parts: true,
	size: true,
});
export type ValidatedUpload = z.infer<typeof ValidatedUpload>;

export const DbDtoFromUpload = Upload.transform((upload: Upload) => {
	return {
		...upload,
		s3_metadata: JSON.stringify(upload.s3_metadata),
		s3_parts: JSON.stringify(upload.s3_parts),
		metadata_metadata: JSON.stringify(upload.metadata_metadata),
		task_s3_complete_state: JSON.stringify(upload.task_s3_complete_state),
		task_gen_metadata_state: JSON.stringify(upload.task_gen_metadata_state),
		user_tags: JSON.stringify(upload.user_tags),
		system_tags: JSON.stringify(upload.system_tags),
	};
});
export const DbDtoToUpload = z.object({
	upload_id: z.uuid(),
	tenant_id: z.uuid(),
	asset_id: z.uuid(),
	s3_upload_id: z.string().min(2).max(2048).nullable(),
	s3_metadata: z.string().max(65535).nullable(),
	s3_version_id: z.string().min(2).max(255).nullable(),
	s3_etag: z.string().min(2).max(2048).nullable(),
	s3_parts: z.string().max(65535).nullable(),
	size: z.number().min(20).max(5497558138880).nullable(),  // 5TB
	origin_filename: z.string().min(1).max(255),
	s3_filename: z.string().min(1).max(255),
	content_type: z.string().min(5).max(255),
	s3_uri: S3URI.min(20).max(2048),
	asset_name: z.string().min(1).max(255),
	metadata_metadata: z.string().max(65535).nullable(),
	task_upload_status: z.enum(RobustTask.StatusValues),
	task_s3_complete_state: z.string().min(1).max(65535),
	task_s3_complete_status: z.enum(RobustTask.StatusValues),
	task_gen_metadata_state: z.string().min(1).max(65535),
	task_gen_metadata_status: z.enum(RobustTask.StatusValues),
	task_save_status: z.enum(RobustTask.StatusValues),
	user_tags: z.string().max(65535),
	system_tags: z.string().max(65535),
	create_timestamp: sqliteDateSchema,
	modify_timestamp: sqliteDateSchema,
	is_deleted: z.number().default(0),
})
.transform((dto, ctx): Upload => {
	const s3_metadata_result = !dto.s3_metadata
		? { success: true, data: undefined }
		: jsonSafeParser(S3Metadata).safeParse(dto.s3_metadata);
	if(!s3_metadata_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid S3 metadata',
			fatal: true,
		});
		return z.NEVER;
	}
	const s3_parts_result = !dto.s3_parts
		? { success: true, data: undefined }
		: jsonSafeParser(z.array(S3Part)).safeParse(dto.s3_parts);
	if(!s3_parts_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid S3 parts',
			fatal: true,
		});
		return z.NEVER;
	}
	const metadata_metadata_result = !dto.metadata_metadata
		? { success: true, data: undefined }
		: jsonSafeParser(MetadataMetadata).safeParse(dto.metadata_metadata);
	if(!metadata_metadata_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid metadata-metadata',
			fatal: true,
		});
		return z.NEVER;
	}
	const task_s3_complete_state_result = jsonSafeParser(z.enum(RobustTask.StatusValues)).safeParse(dto.task_s3_complete_state);
	if(!task_s3_complete_state_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid s3_complete task state',
			fatal: true,
		});
		return z.NEVER;
	}
	const task_gen_metadata_state_result = jsonSafeParser(z.enum(RobustTask.StatusValues)).safeParse(dto.task_gen_metadata_state);
	if(!task_gen_metadata_state_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid gen_metadata task state',
			fatal: true,
		});
		return z.NEVER;
	}
	const user_tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.user_tags);
	if(!user_tags_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid tags',
			fatal: true,
		});
		return z.NEVER;
	}
	const system_tags_result = jsonSafeParser(z.array(z.string().max(64))).safeParse(dto.system_tags);
	if(!system_tags_result.success) {
		ctx.addIssue({
			code: "custom",
			message: 'Invalid system tags',
			fatal: true,
		});
		return z.NEVER;
	}
	return {
		...dto,
		s3_upload_id: dto.s3_upload_id ?? undefined,
		s3_metadata: s3_metadata_result.data,
		s3_version_id: dto.s3_version_id ?? undefined,
		s3_etag: dto.s3_etag ?? undefined,
		s3_parts: s3_parts_result.data,
		size: dto.size ?? undefined,
		metadata_metadata: metadata_metadata_result.data,
		task_s3_complete_state: task_s3_complete_state_result.data,
		task_gen_metadata_state: task_gen_metadata_state_result.data,
		user_tags: user_tags_result.data,
		system_tags: system_tags_result.data,
		is_deleted: Boolean(dto.is_deleted),
	};
});
