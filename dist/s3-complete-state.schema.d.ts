import { z } from 'zod';
export declare const S3CompleteStateEnum: z.ZodEnum<{
    pending: "pending";
    error: "error";
    completing: "completing";
    completed: "completed";
}>;
export type S3CompleteStateEnum = z.infer<typeof S3CompleteStateEnum>;
//# sourceMappingURL=s3-complete-state.schema.d.ts.map