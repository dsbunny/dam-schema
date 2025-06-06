import { z } from 'zod/v4';
export declare const TranscodeStateEnum: z.ZodEnum<{
    pending: "pending";
    processing: "processing";
    processed: "processed";
    rejected: "rejected";
    error: "error";
}>;
export type TranscodeStateEnum = z.infer<typeof TranscodeStateEnum>;
//# sourceMappingURL=transcode-state.d.ts.map