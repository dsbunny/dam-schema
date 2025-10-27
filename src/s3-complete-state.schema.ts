// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const S3CompleteStateEnum = z.enum([
	'pending',
	'completing',
	'completed',
	'error',
])
	.describe('The state of the upload completion job');
export type S3CompleteStateEnum = z.infer<typeof S3CompleteStateEnum>;
