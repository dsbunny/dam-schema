// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const TranscodeStateEnum = z.enum([
	'pending',
	'processing',
	'processed',
	'rejected',
	'error',
])
	.describe('The state of the transcode');
export type TranscodeStateEnum = z.infer<typeof TranscodeStateEnum>;
