// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const DamWebhookClassSchema = z.enum(['asset', 'upload'])
    .describe('The class of the webhook event related to DAM operations');
export const DamWebhookTypeSchema = z.enum(['new', 'change', 'delete'])
    .describe('The type of the webhook event related to DAM operations');
export const DamWebhookRequestSchema = WebhookRequestSchema.extend({
    class: DamWebhookClassSchema,
    type: DamWebhookTypeSchema,
})
    .describe('The schema for webhook requests sent by the DAM');
export const DamWebhookProgressSchema = WebhookProgressSchema;
export const DamWebhookResponseSchema = WebhookResponseSchema;
//# sourceMappingURL=webhook.schema.js.map