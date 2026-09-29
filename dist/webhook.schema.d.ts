import * as z from "zod";
export declare const DamWebhookClassSchema: z.ZodEnum<{
    asset: "asset";
    upload: "upload";
}>;
export type DamWebhookClass = z.infer<typeof DamWebhookClassSchema>;
export declare const DamWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type DamWebhookType = z.infer<typeof DamWebhookTypeSchema>;
export declare const DamWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        asset: "asset";
        upload: "upload";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type DamWebhookRequest = z.infer<typeof DamWebhookRequestSchema>;
export declare const DamWebhookProgressSchema: z.ZodNull;
export type DamWebhookProgress = z.infer<typeof DamWebhookProgressSchema>;
export declare const DamWebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type DamWebhookResponse = z.infer<typeof DamWebhookResponseSchema>;
//# sourceMappingURL=webhook.schema.d.ts.map