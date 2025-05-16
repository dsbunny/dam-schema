// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const S3CompleteStateEnum = z.enum([
    'pending',
    'completing',
    'completed',
    'error',
])
    .describe('The state of the upload completion job');
//# sourceMappingURL=s3-complete-state.schema.js.map