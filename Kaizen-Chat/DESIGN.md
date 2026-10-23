---
name: Petrol & Leaf Enterprise SaaS
colors:
  surface: '#f2fbff'
  surface-dim: '#d3dbdf'
  surface-bright: '#f2fbff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf5f9'
  surface-container: '#e7eff3'
  surface-container-high: '#e1e9ee'
  surface-container-highest: '#dbe4e8'
  on-surface: '#151d20'
  on-surface-variant: '#40484c'
  inverse-surface: '#2a3235'
  inverse-on-surface: '#eaf2f6'
  outline: '#71787d'
  outline-variant: '#c0c7cc'
  surface-tint: '#30657a'
  primary: '#003344'
  on-primary: '#ffffff'
  primary-container: '#0e4b60'
  on-primary-container: '#87bad3'
  inverse-primary: '#9acee7'
  secondary: '#2e6c00'
  on-secondary: '#ffffff'
  secondary-container: '#adf680'
  on-secondary-container: '#337206'
  tertiary: '#003441'
  on-tertiary: '#ffffff'
  tertiary-container: '#004c5e'
  on-tertiary-container: '#73bdd6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bde9ff'
  primary-fixed-dim: '#9acee7'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#114d62'
  secondary-fixed: '#adf680'
  secondary-fixed-dim: '#92d967'
  on-secondary-fixed: '#092100'
  on-secondary-fixed-variant: '#215100'
  tertiary-fixed: '#b5ebff'
  tertiary-fixed-dim: '#87d1eb'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#f2fbff'
  on-background: '#151d20'
  surface-variant: '#dbe4e8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers an enterprise-grade, dependable aesthetic optimized for modern B2B SaaS platforms and high-trust technology products. The design language marries the stability and depth of deep ocean petrol blue with the vitality and precision of fresh leaf green.

### Design Movement: Modern Corporate
The system builds upon Modern Corporate principles:
- **Utilitarian Balance**: High visual clarity prioritizing data readability, clear hierarchy, and immediate affordances.
- **Controlled Vibrancy**: Grounded, authoritative petrol surfaces paired with sharp, purposeful bursts of green signaling progression, confirmation, and status.
- **Architectural Framing**: Soft structural containers, subtle borders, and measured padding that organize complex product dashboards and marketing touchpoints alike.

## Colors

The palette establishes an immediate foundation of trust, contrast, and crisp utility.

### Core Palette Roles
- **Primary (`#0E4B60`)**: The anchor of the system. Deployed across navigation headers, high-impact CTA buttons, hero sections, enterprise card fills, table headers, and primary branding moments.
- **Secondary (`#73B74A`)**: The kinetic accent. Reserved exclusively for progression indicators, live system statuses, conversion badges, success metrics, checkmarks, and focused interactive accents.
- **Tertiary (`#1E738A`)**: An atmospheric mid-tone ocean blue. Utilized for subtle interactive states, secondary chart series, tag fills, and hover transitions against deep surfaces.
- **Neutral Obsidian (`#0F171A`)**: A high-density slate-obsidian engineered for primary headings, body copy, and ultra-high-contrast framing on light canvases.

### Surface Tiers
- **Canvas Base**: `#FFFFFF` for pristine clarity, backed by `#F5F8F9` for background panels and app shell viewports.
- **Elevated Surfaces**: Pure `#FFFFFF` cards with `#E2E9EC` structural perimeter strokes.
- **Inverted Dark Surfaces**: `#0E4B60` and deep navy-petrol `#082C38` utilized for pricing highlights, executive metric banners, and grounding footers.

## Typography

The typographic hierarchy pairs the geometric optimism of **Plus Jakarta Sans** for structural headers with the neutral clarity of **Inter** for dense transactional UI and extended documentation.

### Usage Rules
- **Headline Rhythm**: Use `Plus Jakarta Sans` with tight negative letter tracking (`-0.01em` to `-0.03em`) to create a grounded, professional tech presentation.
- **Data & Density**: All numbers, tables, code labels, and inputs employ `Inter` with tabular figures enabled for rapid visual scanning across tabular metrics.
- **Accents**: Inline leaf-green text highlights must pair with `headline-lg` or `headline-md` at semi-bold or bold weights to preserve contrast ratios against light backgrounds.

## Layout & Spacing

The layout model implements a flexible 12-column grid system bounded by maximum canvas widths of 1280px for standard views and 1440px for wide analytical dashboards.

### Responsive Breakpoints
- **Mobile (< 768px)**: 4 columns, `margin-mobile` (1rem) outer padding, `gutter-sm` (1rem) column spacing.
- **Tablet (768px - 1023px)**: 8 columns, `margin` (2rem) outer boundaries, `gutter` (1.5rem) column distribution.
- **Desktop (1024px+)**: 12 columns, `margin-desktop` (3rem) maximum margin, `gutter` (1.5rem) grid spacing.

### Layout Rhythm
Elements adhere strictly to an 8px baseline spatial system. Component padding, inner groupings, and stack intervals must use defined `space-*` tokens to maintain strict vertical cadence across marketing and application layouts.

## Elevation & Depth

Visual depth is conveyed through layered tonal planes and diffused, ocean-tinted ambient shadows. Avoid heavy dropshadows or stark black drop artifacts.

### Elevation Hierarchy
- **Level 0 (Flat/Inset)**: Surfaces sitting flush with the canvas (`#F5F8F9`), framed by 1px solid borders in `#E2E9EC`.
- **Level 1 (Card/Container)**: Primary dashboard cards and lists. Elevated with `0px 1px 3px rgba(14, 75, 96, 0.06), 0px 4px 12px rgba(14, 75, 96, 0.04)` and a 1px border (`#EAEFF2`).
- **Level 2 (Dropdowns & Popovers)**: Interactive flyouts. Elevated with `0px 6px 20px rgba(14, 75, 96, 0.08), 0px 2px 6px rgba(14, 75, 96, 0.04)`.
- **Level 3 (Modals & Overlays)**: Critical focus state over an `#0F171A` backdrop overlay (40% opacity). Elevated with `0px 12px 40px rgba(14, 75, 96, 0.16)`.
- **Inverted Dark Elevation**: Dark petrol containers (`#0E4B60`) utilize subtle inset borders (`rgba(255, 255, 255, 0.1)`) rather than exterior drop shadows to define boundaries.

## Shapes

The design uses a roundedness level of `2`. This establishes balanced, trustworthy curves that soften high-density enterprise layouts without losing structural discipline.

### Geometry Rules
- **Base Components**: Buttons, text fields, badges, and chips use `0.5rem` (`rounded`) corner radius.
- **Surface Panels**: Modals, large data cards, and feature containers scale to `1rem` (`rounded-lg`).
- **Hero Containers**: Large dark cards and promotional banners feature `1.5rem` (`rounded-xl`) corners.
- **Badges & Pills**: Status pills and live telemetry tags apply fully circular borders (`rounded-full` / 9999px) for clear categorical distinction.

## Components

### Buttons
- **Primary**: Solid `#0E4B60` background, pure white text (`Inter` semi-bold), 0.5rem radius, padded with `0.625rem 1.25rem`. Hover state scales background to `#093443`.
- **Accent (Conversion)**: Solid `#73B74A` background, obsidian `#0F171A` text for accessible high contrast, subtle leaf-tinted glow on hover (`0 0 16px rgba(115, 183, 74, 0.35)`).
- **Secondary**: Transparent background, 1.5px solid `#0E4B60` border, `#0E4B60` text. Hover fills surface with `rgba(14, 75, 96, 0.04)`.
- **Ghost**: Inverted white text on dark cards, or `#0E4B60` text on light cards; zero border.

### Input Fields
- **Container**: White surface, 1px solid `#CCD7DC` border, 0.5rem radius, `0.75rem 1rem` inner padding. Text in `#0F171A`.
- **States**: On focus, display a crisp outline in `#0E4B60` paired with an external 3px focus ring in `rgba(14, 75, 96, 0.15)`. Validation error triggers a dedicated `#D9383A` border.

### Cards & Inverted Containers
- **Standard Card**: White surface, 1px border (`#E2E9EC`), Level 1 shadow, 1rem corner radius, padded with `1.5rem`.
- **Inverted Business Plan Card**: Solid `#0E4B60` fill, pure white heading text, 1px perimeter border in `rgba(255, 255, 255, 0.12)`. Pricing metrics and primary feature highlights set in `#73B74A`.

### Badges, Tags, & Chips
- **Status Success Badge**: Background `#F0F8EC`, border 1px solid `rgba(115, 183, 74, 0.3)`, text `#3D7220`, accompanied by a 6px circular `#73B74A` pulse dot.
- **Category Chip**: Neutral light background `#EEF3F5`, petrol `#0E4B60` text, 0.5rem corner radius, 0.25rem 0.625rem padding.

### Checkboxes & Radios
- **Active / Checked**: Solid `#73B74A` background with crisp white iconography for maximum visual affirmation. Focus state shows an external ring of `rgba(115, 183, 74, 0.25)`.
- **Unchecked**: `#FFFFFF` background with a 1.5px border in `#A8BCC5`.

### Lists & Tables
- **Lists**: Clean item divisions with 1px border-bottom in `#EAEFF2`. Unordered bullet points can be replaced with mini `#73B74A` check icons.
- **Data Tables**: Table header rendered in `#F5F8F9` with uppercase tracking in `#0E4B60`, rows alternating hover states with `rgba(14, 75, 96, 0.02)`.
