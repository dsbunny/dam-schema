// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

function parseJsonPreprocessor(value: any, ctx: z.RefinementCtx) {
	if(typeof value === 'string') {
	  	try {
	    		return JSON.parse(value);
	  	} catch(e: unknown) {
			const err = (e instanceof Error) ? e : new Error(`Caught unknown error: ${e}`);
			ctx.addIssue({
				code: "custom",
				message: err.message,
			});
	  	}
	}

	return value;
};

// This function is a preprocessor for zod schemas that parses JSON strings.  Example usage:
// const object = jsonSafeParser(schema).parse(jsonString);
export function jsonSafeParser<T extends z.ZodTypeAny>(schema: T) {
	return z.preprocess(parseJsonPreprocessor, schema);
}
