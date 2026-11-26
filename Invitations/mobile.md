# Union Regional Festival — Mobile Screen Notes

This document records the mobile layout in `index.html`.

## Viewport and layout

- The page uses `width=device-width, initial-scale=1`.
- The hero and content sections use a minimum height of `100svh` where appropriate.
- Horizontal padding is fluid and starts at 20px on small screens.
- The layout stays single-column below the 700px breakpoint.

## Sections

- The schedule is a centred vertical timeline, with times on the left and programme moments on the right.
- The Photos section uses the supplied festival image as a cover background and links to the shared photo folder.
- Images use responsive cover or contain positioning.

## Accessibility and release checks

- Focus indicators remain visible for keyboard users.
- Reduced-motion preferences disable decorative animation and smooth scrolling.
- Before release, check at 320px, 375px, 390px, 430px, 520px and 700px widths.
- Confirm no horizontal scrolling and that page links and buttons remain reachable.
