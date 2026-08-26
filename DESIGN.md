---
name: Serene Presence
colors:
  surface: '#fbf9f7'
  surface-dim: '#dbdad8'
  surface-bright: '#fbf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f1'
  surface-container: '#efedec'
  surface-container-high: '#eae8e6'
  surface-container-highest: '#e4e2e0'
  on-surface: '#1b1c1b'
  on-surface-variant: '#504444'
  inverse-surface: '#30302f'
  inverse-on-surface: '#f2f0ee'
  outline: '#827473'
  outline-variant: '#d4c2c2'
  surface-tint: '#7c5454'
  primary: '#7c5454'
  on-primary: '#ffffff'
  primary-container: '#d4a3a3'
  on-primary-container: '#5c3939'
  inverse-primary: '#edbaba'
  secondary: '#645d53'
  on-secondary: '#ffffff'
  secondary-container: '#e8ded1'
  on-secondary-container: '#686257'
  tertiary: '#715a4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#c6a99a'
  on-tertiary-container: '#523e32'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#edbaba'
  on-primary-fixed: '#2f1314'
  on-primary-fixed-variant: '#613d3d'
  secondary-fixed: '#ebe1d4'
  secondary-fixed-dim: '#cfc5b9'
  on-secondary-fixed: '#1f1b13'
  on-secondary-fixed-variant: '#4c463c'
  tertiary-fixed: '#fcdccb'
  tertiary-fixed-dim: '#dfc1b0'
  on-tertiary-fixed: '#28180e'
  on-tertiary-fixed-variant: '#574236'
  background: '#fbf9f7'
  on-background: '#1b1c1b'
  surface-variant: '#e4e2e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is rooted in empathy, sophistication, and professional warmth. Inspired by the soft, natural lighting and approachable yet polished demeanor in the provided photography, the design system aims to create a "digital sanctuary"—a space that feels safe and inviting for mental health exploration.

The chosen style is **Minimalist / Modern Corporate with a Tactile twist**. It avoids clinical coldness by using generous whitespace and a palette that mirrors skin tones and natural materials. The interface should feel breathable and editorial, emphasizing the human element over functional rigidity.

**Key Emotional Responses:**
*   **Trust:** Through high-quality typography and structured layouts.
*   **Serenity:** Through a muted, harmonic color palette.
*   **Clarity:** Through a minimalist approach that reduces cognitive load.

## Colors

The palette is derived directly from the earthy and soft tones found in the reference images—the warm browns of the furniture, the blush pink of the book covers, and the creamy off-whites of the interiors.

*   **Primary (Blush/Dusty Rose):** Used for primary actions and highlights. It represents compassion and the "Freud" pink accent in the images.
*   **Secondary (Cream/Sand):** The foundation for surfaces and background sections, providing a softer alternative to pure white.
*   **Tertiary (Earth Brown):** Used for high-contrast text and grounding elements, echoing the wooden textures and dark blazers.
*   **Neutral (Shell/Off-white):** The base background color to ensure maximum readability and a clean, airy feel.

## Typography

This design system uses a classic pairing to balance tradition with modernity. **Playfair Display** provides an editorial, authoritative, and elegant feel for headings, suggesting a high level of professional expertise. **Manrope** is used for body text to ensure modern legibility and a friendly, balanced tone.

Use **Display-lg** sparingly for hero sections. Ensure all body text maintains a line height of at least 1.6 to enhance the "airy" and calm reading experience required for sensitive psychological content.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of controlled, professional structure. On mobile, it transitions to a single-column fluid flow.

**Key Rules:**
*   **Generous Margins:** Use significantly larger vertical gaps (`section-gap`) between content blocks to allow the eye to rest.
*   **Asymmetry:** Occasionally break the grid with images that overlap background color blocks to mimic the casual, natural poses seen in the photography.
*   **Safe Areas:** Text should never feel cramped; maintain a minimum of 24px internal padding in all container elements.

## Elevation & Depth

To maintain a delicate and approachable aesthetic, the design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Soft Ambient Depth**.

*   **Tonal Layering:** Depth is created by placing Shell-colored cards over Sand-colored backgrounds.
*   **Shadows:** When necessary (e.g., on primary buttons or floating contact cards), use extremely diffused shadows: `0px 10px 30px rgba(140, 115, 101, 0.08)`. The shadow color should be a tint of the Tertiary Brown, never pure black.
*   **Outlines:** Use very thin (1px) borders in a slightly darker shade of the background color for a "ghost border" effect that defines shape without adding visual weight.

## Shapes

The shape language is **Soft**. We avoid sharp, aggressive corners to maintain the "welcoming" brand promise, but we also avoid overly bubbly or circular shapes to keep the professional "Sophisticated" edge.

A consistent 4px (Soft) radius is applied to small elements like input fields and buttons. Larger containers and cards may use a radius of up to 12px to feel more like physical pieces of stationery.

## Components

*   **Buttons:** Primary buttons use a solid Blush (`#D4A3A3`) background with white text. Secondary buttons use an Earth Brown outline with Earth Brown text. All buttons should have generous horizontal padding (min 32px).
*   **Cards:** Cards should have a Shell (`#FDFBF9`) background. Use a soft 1px border instead of a shadow for an elegant, flat look.
*   **Input Fields:** Use the Sand (`#E8DED1`) color for the background of inputs with a subtle 1px border. Focus states should transition the border to Blush.
*   **Chips/Labels:** Use for therapy specialties (e.g., "Cognitive Behavioral," "Anxiety"). These should be light Earth Brown text on a transparent background with a thin border.
*   **Lists:** Use custom icons for list bullets—ideally soft, organic shapes like a small hand-drawn dot or a thin horizontal line.
*   **Imagery:** Photos should always feature soft-focus backgrounds and natural lighting. Use rounded-xl (12px) corners for all images to align with the soft UI elements.