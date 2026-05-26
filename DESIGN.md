---
name: Warm Indonesian Hearth
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#40493d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#625e51'
  on-secondary: '#ffffff'
  secondary-container: '#e6dfcf'
  on-secondary-container: '#666255'
  tertiary: '#774c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#986200'
  on-tertiary-container: '#ffeede'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#e9e2d2'
  secondary-fixed-dim: '#ccc6b6'
  on-secondary-fixed: '#1e1c12'
  on-secondary-fixed-variant: '#4a473b'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system captures the essence of a traditional Indonesian "warung" reimagined through a modern, premium lens. The brand personality is grounded, maternal, and hospitable, evoking the comfort of a home-cooked meal. 

The visual style leans into **Organic Minimalism** with a **Tactile** edge. It avoids the clinical coldness of tech-heavy interfaces by using warm-tinted backgrounds and soft, natural shadows. The goal is to make the user feel like they are stepping into a clean, well-tended kitchen where every ingredient is fresh and every guest is family.

## Colors
The palette is rooted in the natural world and the warmth of the Indonesian kitchen.

- **Primary (Leaf Green):** Used for brand identity, success states, and primary navigation elements. It represents freshness and the organic nature of the ingredients.
- **Secondary (Cream):** The foundation of the UI. This replaces pure white to reduce eye strain and provide a "paper-like" or "ceramic" warmth to the background surfaces.
- **Accent (Egg Yolk Yellow):** A high-visibility color reserved for primary calls to action, promotional highlights, and interactive alerts.
- **Neutral:** A deep charcoal-grey rather than pure black, maintaining a soft contrast that remains highly readable against the cream background.

## Typography
This design system utilizes **Inter** for its exceptional legibility and systematic versatility. While the brand is "homey," the typography remains clean and professional to ensure the product feels trustworthy and easy to navigate.

- **Headlines:** Use tighter letter spacing and heavier weights to anchor sections.
- **Body Text:** Generous line heights (1.5x) are maintained to ensure recipes and descriptions are comfortable to read.
- **Labels:** Set in semi-bold for quick scanning of menu categories and nutritional information.

## Layout & Spacing
The layout follows a **Fluid Grid** philosophy with generous breathing room. 

- **Mobile:** A 4-column grid with 16px side margins. Elements typically span the full width or 2 columns for smaller card layouts.
- **Desktop:** A 12-column grid with a maximum content width of 1280px. 
- **Rhythm:** Spacing follows an 8px base unit. Use `lg` (40px) or `xl` (64px) for vertical section padding to maintain the "premium and calm" feel, avoiding cluttered layouts.

## Elevation & Depth
The design system uses **Tonal Layers** combined with **Ambient Shadows** to create a soft, physical presence.

- **Level 0 (Base):** The Cream (#FFF8E7) background.
- **Level 1 (Cards/Surface):** Pure White (#FFFFFF) surfaces with a very soft, diffused shadow (Blur: 12px, Y: 4, Opacity: 4% Black). This makes food items "pop" from the cream background.
- **Level 2 (Interactive/Floating):** For active states or drawers. Shadows become slightly more pronounced (Blur: 20px, Y: 8, Opacity: 8% Black).
- **Outlines:** Use a subtle 1px border (#E0D9C5) on input fields and containers to define boundaries without adding visual weight.

## Shapes
In alignment with the organic narrative, the shape language avoids harsh corners.

- **Standard Elements:** Buttons and input fields use a 0.5rem (8px) radius.
- **Large Elements:** Product cards and hero sections use "rounded-lg" (1rem / 16px) or "rounded-xl" (1.5rem / 24px) to emphasize the soft, welcoming nature of the brand.
- **Icons:** Use rounded caps and joins to match the UI's softness.

## Components
- **Buttons:** Primary buttons are Egg Yolk Yellow with dark text for maximum visibility. Secondary buttons use the Leaf Green with white text. Tertiary buttons are text-only with a heavy weight.
- **Cards:** Food item cards should feature a high-quality photo at the top. The card surface is white with `rounded-lg` corners and a soft shadow.
- **Chips:** Used for food categories (e.g., "Pedas," "Vegetarian"). These use a Leaf Green stroke with a light green tinted background.
- **Input Fields:** Soft cream background with a subtle border. On focus, the border transitions to Leaf Green.
- **Lists:** Clean spacing with thin separators (#E0D9C5). Item titles are `label-md` for clarity.
- **Specialty Component (The "Menu Tile"):** A square-format component for grid layouts, featuring a large price label in the top right corner using the Egg Yolk Yellow background.