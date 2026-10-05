/**
 * Single source of truth for all site-wide constants.
 * Edit only here — never hardcode these values elsewhere.
 * SITE_URL has no trailing slash: use `${SITE_URL}/path`
 *
 * PUBLIC constants only — safe to import in Client Components.
 * Never add secrets here. Use lib/config.server.ts for server-only values.
 */
export const CONTACT_EMAIL = "info@sysnova-it.de";
export const SENDER_EMAIL = "contact@sysnova-it.de"; // Resend verified sender — not a secret, visible in every email From: header
export const SITE_URL = "https://sysnova-it.de";
export const WHATSAPP_NUMBER = "4917663677765"; // digits only, no +
export const WHATSAPP_NUMBER_DISPLAY = "+49 176 63677765";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const BUSINESS_ADDRESS = "Elsenstr. 47a, 12059 Berlin";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Sysnova/@52.4870267,13.4463263,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84f324dd57899:0xeaed0911fc50bc6a!8m2!3d52.4870235!4d13.4511972!16s%2Fg%2F11nb75lnb_";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CWq8UPwRCe3qEAE/review"; // GBP review short-link
export const LINKEDIN_PERSONAL_URL = "https://www.linkedin.com/in/wasiem-abd-albaki-3996a0224/";
export const AUTHOR_NAME = "Wasiem Abd Albaki"; // canonical author/Person name — use everywhere (JSON-LD, bylines)
export const AUTHOR_JOB_TITLE = "IT Consultant & Web Developer"; // author jobTitle for Person JSON-LD
export const GA_ID = "G-027TSC2EKH"; // public — visible in browser source

try { new URL(SITE_URL); } catch { throw new Error(`[config] SITE_URL is not a valid URL: "${SITE_URL}"`); }
if (!CONTACT_EMAIL.includes("@")) throw new Error(`[config] CONTACT_EMAIL is invalid: "${CONTACT_EMAIL}"`);
if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) throw new Error(`[config] WHATSAPP_NUMBER must be digits only (10-15 chars): "${WHATSAPP_NUMBER}"`);
