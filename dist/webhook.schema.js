// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgress, WebhookRequest, WebhookResponse, } from "@dsbunny/webhook-schema";
export const DamWebhookClass = z.enum(['asset'])
    .describe('The class of the webhook event related to DAM operations');
export const DamWebhookType = z.enum(['new', 'change', 'delete'])
    .describe('The type of the webhook event related to DAM operations');
export const DamWebhookRequest = WebhookRequest.extend({
    class: DamWebhookClass,
    type: DamWebhookType,
})
    .describe('The schema for webhook requests sent by the DAM');
export const DamWebhookProgress = WebhookProgress;
export const DamWebhookResponse = WebhookResponse;
//# sourceMappingURL=webhook.schema.js.map