import { z } from 'zod';
export declare const TranscodeStateEnum: z.ZodEnum<["pending", "processing", "processed", "rejected", "error"]>;
export type TranscodeStateEnum = z.infer<typeof TranscodeStateEnum>;
//# sourceMappingURL=transcode-state.d.ts.map