// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgress,
        WebhookRequest,
        WebhookResponse,
} from "@dsbunny/webhook-schema";

export const DamWebhookClass = z.enum(['asset'])
        .describe('The class of the webhook event related to DAM operations');
export type DamWebhookClass = z.infer<typeof DamWebhookClass>;

export const DamWebhookType = z.enum(['new', 'change', 'delete'])
        .describe('The type of the webhook event related to DAM operations');
export type DamWebhookType = z.infer<typeof DamWebhookType>;

export const DamWebhookRequest = WebhookRequest.extend({
        class: DamWebhookClass,
        type: DamWebhookType,
})
        .describe('The schema for webhook requests sent by the DAM');
export type DamWebhookRequest = z.infer<typeof DamWebhookRequest>;

export const DamWebhookProgress = WebhookProgress;
export type DamWebhookProgress = z.infer<typeof DamWebhookProgress>;

export const DamWebhookResponse = WebhookResponse;
export type DamWebhookResponse = z.infer<typeof DamWebhookResponse>;
