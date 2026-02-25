import * as z from "zod";
export declare const DamWebhookClass: z.ZodEnum<{
    asset: "asset";
}>;
export type DamWebhookClass = z.infer<typeof DamWebhookClass>;
export declare const DamWebhookType: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type DamWebhookType = z.infer<typeof DamWebhookType>;
export declare const DamWebhookRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        asset: "asset";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type DamWebhookRequest = z.infer<typeof DamWebhookRequest>;
export declare const DamWebhookProgress: z.ZodNull;
export type DamWebhookProgress = z.infer<typeof DamWebhookProgress>;
export declare const DamWebhookResponse: z.ZodObject<{}, z.core.$strip>;
export type DamWebhookResponse = z.infer<typeof DamWebhookResponse>;
//# sourceMappingURL=webhook.schema.d.ts.map