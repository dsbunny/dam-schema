// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

// SQL date string to ISO 8601,
// e.g. "2023-10-15 15:09:50" to "2023-10-15T15:09:50.000Z"
export const sqliteDateSchema = z.string().transform((date) => {
	return `${date.replace(' ', 'T')}.000Z`;
});
