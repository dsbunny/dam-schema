import { z } from 'zod';
export declare function jsonSafeParser<T extends z.ZodTypeAny>(schema: T): z.ZodEffects<T, T["_output"], unknown>;
//# sourceMappingURL=json-safe-parser.d.ts.map