# Recreate nezkarimova.biznesim.com

## Goal
Build the reference page at `/` as a polished Azerbaijani physiotherapy and therapeutic gymnastics website, closely matching its section order, airy lilac visual direction, typography, and density without embedding the reference screenshot itself.

## What I’ll build
- A compact top navigation with brand, section links, social actions, and WhatsApp contact.
- A strong first screen featuring the practitioner, a concise Azerbaijani message, location/language details, and contact actions.
- Trust metrics, specialization cards, biography, credentials, client gallery, four-step process, contact panel, Telegram prompt, and footer.
- Original generated photography of a female movement specialist in purple sportswear, including portrait and movement poses.
- Responsive layouts for desktop and mobile with subtle motion and accessible interactive states.

## Technical details
- Replace the template home page and define a semantic token-based design system in `src/styles.css`.
- Use the existing TanStack route architecture and add unique route metadata for search and social previews.
- Use icon components for contact, services, credentials, and social actions.
- Keep all visible actions functional through section links, `tel:`, WhatsApp, Telegram, Instagram, and TikTok URLs where possible; placeholders will be used for any details not visible in the supplied reference.
- Verify the final page in the live preview at desktop and mobile widths, then check for overflow, missing images, and runtime errors.
