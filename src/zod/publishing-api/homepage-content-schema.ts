import { z } from "zod";

export default z
  .object({
    analytics_identifier: z.any().optional(),
    base_path: z.any(),
    content_id: z.any(),
    description: z.any(),
    details: z.any(),
    document_type: z.enum(["homepage", "service_manual_homepage"]),
    first_published_at: z.union([z.any(), z.null()]).optional(),
    links: z
      .object({
        available_translations: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        child_taxons: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        children: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        document_collections: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        level_one_taxons: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        ministers: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        part_of_step_navs: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        policies: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        policy_areas: z
          .any()
          .describe(
            "A largely deprecated tag currently only used to power email alerts."
          )
          .optional(),
        related_to_step_navs: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        role_appointments: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        secondary_to_step_navs: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
        topic_taxonomy_taxons: z
          .any()
          .describe("Link type automatically added by Publishing API")
          .optional(),
      })
      .strict(),
    locale: z.any(),
    need_ids: z.array(z.string()).optional(),
    phase: z
      .enum(["alpha", "beta", "live"])
      .describe(
        "The service design phase of this content item - https://www.gov.uk/service-manual/phases"
      )
      .optional(),
    public_updated_at: z.union([z.any(), z.null()]),
    publishing_app: z.any().optional(),
    publishing_request_id: z.any().optional(),
    publishing_scheduled_at: z.union([z.any(), z.null()]).optional(),
    rendering_app: z.any().optional(),
    scheduled_publishing_delay_seconds: z.union([z.any(), z.null()]).optional(),
    schema_name: z.enum(["homepage"]),
    title: z.any(),
    updated_at: z.string(),
    withdrawn_notice: z.any().optional(),
  })
  .strict();
