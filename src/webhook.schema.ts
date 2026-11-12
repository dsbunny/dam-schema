// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const DamWebhookClassSchema = z.enum(['asset', 'upload']).register(dsbunnyRegistry, {
        id: 'DamWebhookClassSchema',
        description: 'The class of the webhook event related to DAM operations',
})
export type DamWebhookClass = z.infer<typeof DamWebhookClassSchema>;

export const DamWebhookTypeSchema = z.enum(['new', 'change', 'delete']).register(dsbunnyRegistry, {
        id: 'DamWebhookTypeSchema',
        description: 'The type of the webhook event related to DAM operations',
});
export type DamWebhookType = z.infer<typeof DamWebhookTypeSchema>;

export const DamWebhookRequestSchema = WebhookRequestSchema.extend({
        '@type': z.literal('DamWebhookRequest')
                .describe('Type of the DAM webhook request'),
        class: DamWebhookClassSchema,
        type: DamWebhookTypeSchema,
}).register(dsbunnyRegistry, {
        id: 'DamWebhookRequestSchema',
        description: 'The schema for webhook requests sent by the DAM',
});
export type DamWebhookRequest = z.infer<typeof DamWebhookRequestSchema>;

export const DamWebhookProgressSchema = WebhookProgressSchema.extend({
        '@type': z.literal('DamWebhookProgress')
                .describe('Type of the DAM webhook progress event'),
}).register(dsbunnyRegistry, {
	id: 'DamWebhookProgressSchema',
	description: 'The schema for webhook progress events sent by the DAM',
});
export type DamWebhookProgress = z.infer<typeof DamWebhookProgressSchema>;

export const DamWebhookResponseSchema = WebhookResponseSchema.extend({
        '@type': z.literal('DamWebhookResponse')
                .describe('Type of the DAM webhook response'),
}).register(dsbunnyRegistry, {
	id: 'DamWebhookResponseSchema',
	description: 'The schema for webhook responses sent by the DAM',
});
export type DamWebhookResponse = z.infer<typeof DamWebhookResponseSchema>;
