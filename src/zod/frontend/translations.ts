import {readFile} from 'fs/promises'
import {parse} from 'yaml'
import { z } from "zod";

export const translations = z.object({
  en: z.object({
    a: z.string(),
    ab_testing: z.object({
      explanation: z.string(),
      two_versions: z.string(),
      version: z.string(),
      visit_govuk_html: z.string(),
    }),
    account: z.object({
      cookies_and_feedback: z.object({
        cookie_consent: z.object({
          description: z.string(),
          field: z.object({ heading: z.string() }),
          heading: z.string(),
        }),
        feedback_consent: z.object({
          description: z.string(),
          field: z.object({ heading: z.string() }),
          heading: z.string(),
        }),
        heading: z.string(),
        success: z.string(),
      }),
      your_account: z.object({
        emails: z.object({
          heading: z.string(),
          no_emails_inset: z.string(),
          no_emails_description: z.string(),
          see_and_manage: z.string(),
          manage_emails_link_text: z.string(),
        }),
        heading: z.string(),
        about_heading: z.string(),
        about_description_html: z.string(),
        about_detail_title: z.string(),
        about_detail_description_html: z.string(),
      }),
    }),
    and: z.string(),
    b: z.string(),
    "bank-holidays": z.string(),
    bank_holidays: z.object({
      "2nd_january": z.string(),
      add_clock_changes_to_calendar: z.string(),
      bank_holiday: z.string(),
      queens_bank_holiday: z.string(),
      battle_boyne: z.string(),
      boxing_day: z.string(),
      bst_explanation: z.string(),
      calendar: z.object({ description: z.string(), title: z.string() }),
      christmas: z.string(),
      clock_change_explanation: z.string(),
      clocks_backward: z.string(),
      clocks_forward: z.string(),
      date: z.string(),
      day_of_week: z.string(),
      download_clock_changes: z.string(),
      early_may: z.string(),
      early_may_ve: z.string(),
      easter_monday: z.string(),
      gmt_explanation: z.string(),
      good_friday: z.string(),
      kings_coronation: z.string(),
      late_august: z.string(),
      new_year: z.string(),
      queen_diamond: z.string(),
      queen_platinum: z.string(),
      spring: z.string(),
      st_andrew: z.string(),
      st_patrick: z.string(),
      summer: z.string(),
      year: z.string(),
    }),
    cancel: z.string(),
    common: z.object({
      add_holiday_ics: z.string(),
      bank_holiday_benefits_html: z.string(),
      bank_holiday_translation_html: z.string(),
      bank_holiday_on_wkend: z.string(),
      download_ics: z.string(),
      extra_bank_holiday: z.string(),
      holiday_entitlement_html: z.string(),
      last_updated: z.string(),
      nations: z.object({
        "england-and-wales": z.string(),
        "england-and-wales_for": z.string(),
        "england-and-wales_in": z.string(),
        "england-and-wales_slug": z.string(),
        "northern-ireland": z.string(),
        "northern-ireland_for": z.string(),
        "northern-ireland_in": z.string(),
        "northern-ireland_slug": z.string(),
        scotland: z.string(),
        scotland_for: z.string(),
        scotland_in: z.string(),
        scotland_slug: z.string(),
      }),
      next_holiday_in_is: z.string(),
      past_bank_holidays: z.string(),
      substitute_day: z.string(),
      today: z.string(),
      upcoming_bank_holidays: z.string(),
    }),
    continue: z.string(),
    cookies: z.object({
      always_on: z.string(),
      clicks: z.string(),
      confirmation_message: z.string(),
      confirmation_previous_referrer_link: z.string(),
      confirmation_title: z.string(),
      explanation_html: z.string(),
      cookie_settings: z.string(),
      cookies_on_govuk: z.string(),
      essential_explanation: z.string(),
      explanation: z.string(),
      four_types: z.string(),
      google_info: z.string(),
      google_collection: z.string(),
      google_share: z.string(),
      how_we_use: z.string(),
      how_you_got: z.string(),
      javascript: z.string(),
      javascript_list: z.array(z.string()),
      lux_explain: z.string(),
      lux_info: z.string(),
      "off-campaigns": z.string(),
      "off-settings": z.string(),
      "off-usage": z.string(),
      "on-campaigns": z.string(),
      "on-settings": z.string(),
      "on-usage": z.string(),
      pages_visited: z.string(),
      save_changes: z.string(),
      services: z.string(),
      services_additional: z.string(),
      third_parties: z.string(),
      types: z.object({
        campaigns: z.string(),
        essential: z.string(),
        settings: z.string(),
        usage: z.string(),
      }),
      usage_info: z.string(),
    }),
    electoral: z.object({
      registration: z.object({ description: z.string(), title: z.string() }),
      service: z.object({
        description: z.string(),
        matched_postcode_html: z.string(),
        title: z.string(),
      }),
    }),
    error: z.string(),
    find: z.string(),
    formats: z.object({
      find_my_nearest: z.object({ valid_postcode_no_locations: z.string() }),
      licence: z.object({ change: z.string() }),
      local_transaction: z.object({
        change: z.string(),
        choose_address: z.string(),
        council_tax: z.string(),
        county_council_services: z.string(),
        county_council_services_list: z.array(z.string()),
        county_district_council: z.string(),
        district_council_services: z.string(),
        different_local_authorities: z.string(),
        enter_postcode: z.string(),
        error_summary_title: z.string(),
        find_council: z.string(),
        find_council_website: z.string(),
        find_info_for: z.string(),
        find_other_services: z.string(),
        find_postcode_royal_mail: z.string(),
        housing: z.string(),
        info_on_country_website: z.object({
          northern_ireland: z.string(),
          scotland: z.string(),
          wales: z.string(),
        }),
        info_on_website: z.string(),
        invalid_postcode: z.string(),
        invalid_postcode_sub: z.string(),
        invalid_uprn: z.string(),
        invalid_uprn_sub: z.string(),
        local_authority_html: z.string(),
        local_authority_website: z.string(),
        matched_postcode_html: z.string(),
        no_local_authority: z.string(),
        no_local_authority_url_html: z.string(),
        no_website: z.string(),
        postcode: z.string(),
        postcode_hint: z.string(),
        postcode_lookup: z.string(),
        rubbish_recycling_collection: z.string(),
        select_address: z.string(),
        service_not_available: z.string(),
        unknown_service: z.string(),
        valid_postcode_no_match: z.string(),
        valid_postcode_no_match_sub_html: z.string(),
        valid_uprn_no_match: z.string(),
        valid_uprn_no_match_sub_html: z.string(),
        website: z.string(),
      }),
      simple_smart_answer: z.object({
        change: z.string(),
        next_step: z.string(),
        please_answer: z.string(),
        start_again: z.string(),
        your_answers: z.string(),
      }),
      start_now: z.string(),
      transaction: z.object({
        assistance_question: z.string(),
        before_you_start: z.string(),
        completed_transaction_text: z.string(),
        dissatisfied: z.string(),
        electric_vehicle: z.object({
          title: z.string(),
          description: z.string(),
          link_text: z.string(),
        }),
        friend_or_relative: z.string(),
        government_staff: z.string(),
        help_improve: z.string(),
        how_improve: z.string(),
        improvement_question: z.string(),
        more_information: z.string(),
        mot_reminder: z.object({
          title: z.string(),
          description: z.string(),
          link_text: z.string(),
        }),
        neither: z.string(),
        no_pii_hint: z.string(),
        on: z.string(),
        online_satisfaction_check: z.string(),
        organ_donor: z.object({
          title: z.string(),
          description: z.string(),
          link_text: z.string(),
        }),
        other: z.string(),
        other_person: z.string(),
        other_ways_to_apply: z.string(),
        pii_warning: z.string(),
        photo_id: z.object({
          title: z.string(),
          description: z.string(),
          link_text: z.string(),
        }),
        satisfaction_check: z.string(),
        satisfaction_survey: z.string(),
        satisfied: z.string(),
        send_feedback: z.string(),
        service_improvement_question: z.string(),
        service_satisfaction_check: z.string(),
        sign_in: z.string(),
        very_dissatisfied: z.string(),
        very_satisfied: z.string(),
        what_assistance: z.string(),
        what_you_need_to_know: z.string(),
        who_assisted: z.string(),
        work_colleague: z.string(),
      }),
    }),
    help: z.object({
      index: z.object({
        about: z.string(),
        about_description: z.string(),
        accessibility: z.string(),
        accessibility_description: z.string(),
        beta: z.string(),
        beta_description: z.string(),
        browsers: z.string(),
        browsers_description: z.string(),
        cookies: z.string(),
        cookies_description: z.string(),
        email: z.string(),
        email_description: z.string(),
        find_out: z.string(),
        privacy_notice: z.string(),
        privacy_notice_description: z.string(),
        reuse_content: z.string(),
        reuse_content_description: z.string(),
        terms: z.string(),
        terms_description: z.string(),
        vulnerability: z.string(),
        vulnerability_description: z.string(),
      }),
      sign_in: z.object({
        search_for_a_service: z.string(),
        search_for_a_service_button: z.string(),
        service_not_listed_heading: z.string(),
        service_not_listed_text: z.string(),
      }),
    }),
    homepage: z.object({
      categories: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string(),
        })
      ),
      government_activity: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          link: z.string(),
        })
      ),
      index: z.object({
        brexit: z.string(),
        covid: z.string(),
        departments_and_organisations: z.string(),
        featured: z.string(),
        government_activity: z.string(),
        government_activity_description: z.string(),
        intro_html: z.string(),
        intro_simpler: z.string(),
        intro_title: z.object({ text: z.string(), html: z.string() }),
        job_search: z.string(),
        jobseekers_allowance: z.string(),
        merged_websites_html: z.string(),
        ministerial_departments: z.string(),
        ministerial_departments_count: z.number(),
        meta_description: z.string(),
        more: z.string(),
        popular_links_heading: z.string(),
        popular_links: z.array(
          z.object({ text: z.string(), href: z.string() })
        ),
        more_links: z.array(z.object({ title: z.string(), link: z.string() })),
        other_agencies: z.string(),
        other_agencies_count: z.string(),
        popular: z.string(),
        promotion_slots: z.array(
          z.object({
            text: z.string(),
            title: z.string(),
            href: z.string(),
            image_src: z.string(),
          })
        ),
        running_limited_company: z.string(),
        search_button: z.string(),
        search_label: z.string(),
        services_and_information: z.string(),
        tax_account: z.string(),
        uk_bank_holidays: z.string(),
        universal_credit: z.string(),
      }),
      most_active: z.array(z.object({ title: z.string(), link: z.string() })),
    }),
    no: z.string(),
    or: z.string(),
    place: z.object({
      children_social_care: z.string(),
      go_to_website: z.string(),
    }),
    roadmap: z.object({
      actions_section: z.object({
        heading: z.string(),
        items: z.array(
          z.object({
            heading: z.string(),
            paragraph: z.string(),
            steps: z.array(
              z.object({
                heading: z.string(),
                items: z.array(z.object({ text: z.string() })),
              })
            ),
          })
        ),
      }),
      hero: z.object({ description: z.string(), heading: z.string() }),
      numbers_section: z.object({
        footnote: z.string(),
        heading_large: z.string(),
        heading_small: z.string(),
        last_updated: z.string(),
        numbers_columns: z.object({
          column_one_count: z.number(),
          column_one_text: z.string(),
          column_two_count: z.number(),
          column_two_text: z.string(),
        }),
      }),
      page_title: z.string(),
      updates_section: z.object({
        heading: z.string(),
        items: z.array(
          z.object({
            href: z.string(),
            image_src: z.string(),
            heading_text: z.string(),
          })
        ),
      }),
    }),
    save: z.string(),
    sessions: z.object({
      first_time: z.object({
        cookie_consent: z.object({
          description_html: z.string(),
          field: z.object({
            heading: z.string(),
            hint: z.string(),
            invalid: z.string(),
          }),
          heading: z.string(),
        }),
        description_html: z.string(),
        feedback_consent: z.object({
          description_html: z.string(),
          field: z.object({
            heading: z.string(),
            hint: z.string(),
            invalid: z.string(),
          }),
          heading: z.string(),
        }),
        invalid: z.string(),
        title: z.string(),
      }),
    }),
    sign_up: z.string(),
    website: z.string(),
    yes: z.string(),
  }),
});


export default async function loadTranslations() {
  const content = await readFile('submodules/frontend/config/locales/en.yml')
  const yaml = parse(content.toString())
  return translations.parse(yaml)
}