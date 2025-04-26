// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
function parseJsonPreprocessor(value, ctx) {
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            const err = (e instanceof Error) ? e : new Error(`Caught unknown error: ${e}`);
            ctx.addIssue({
                code: "custom",
                message: err.message,
            });
        }
    }
    return value;
}
;
// This function is a preprocessor for zod schemas that parses JSON strings.  Example usage:
// const object = jsonSafeParser(schema).parse(jsonString);
export function jsonSafeParser(schema) {
    return z.preprocess(parseJsonPreprocessor, schema);
}
//# sourceMappingURL=json-safe-parser.js.map