import { z } from 'zod';
export declare function jsonSafeParser<T extends z.ZodTypeAny>(schema: T): z.ZodPipe<z.ZodTransform<any, unknown>, T>;
//# sourceMappingURL=json-safe-parser.d.ts.map