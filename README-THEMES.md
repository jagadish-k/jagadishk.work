# Theme Engine

This portfolio comes with 5 distinct, highly-engineered frontend aesthetics that you can switch between depending on your target audience or mood. All content is entirely separated from the themes and driven by Markdown collections in `src/content/`.

## Switching Themes in Development

When running the development server (`npm run dev`), a floating **Theme Switcher** UI will appear in the bottom right corner of your screen. 
You can click any of the 5 options to instantly hot-swap the theme using URL query parameters (e.g., `/?theme=editorial`).

*Note: The theme switcher only appears when `import.meta.env.DEV` is true, so it will never leak into your production build.*

## Setting the Production Default

Astro performs Static Site Generation (SSG) for production. The URL query parameter overriding is only available during dev. For production, the site compiles the default theme.

To set the production theme, edit `src/config.ts`:

```typescript
export const siteConfig = {
  // Available themes:
  // 'keynote'   - Apple Keynote Kinetic Story (GSAP, Horizontal scroll, high motion)
  // 'linear'    - Engineering Console (Dark mode, bento grids, ultra-precise)
  // 'editorial' - Asymmetric Grid (Vignette layout, large serif typography, off-white)
  // 'spatial'   - Glass & Depth (3D tilts, aurora backgrounds, highly tactile)
  // 'brutalist' - Developer Terminal (Monospace, neon accents, high contrast)
  // 'minimal'   - Print minimal (Clean, unstyled layout - matching the PDF output)
  theme: 'keynote',
  // ...
};
```

When you push to GitHub, the GitHub Actions CI will build the site using the value defined in `siteConfig.theme`.

## The Themes

1. **Keynote**: Pushes GSAP ScrollTrigger to its limits with Sticky Stacking and horizontal pan sections.
2. **Linear**: Precision-focused, minimalist dark mode with hover-heavy bento grids.
3. **Editorial**: Print-inspired, asymmetric layouts with massive typography. High visual variance.
4. **Spatial**: Employs 3D CSS transforms mapped to mouse position over a blurred aurora background.
5. **Brutalist**: Raw, unfiltered monospace design with terminal aesthetic and CSS keyframe glitches.

## Print PDF Compatibility

Regardless of which of the 5 themes you use for the web version, printing the page (CMD/CTRL + P) will *always* hide the complex Web UI and render the exact same ATS-optimized, single-column PDF layout via `src/components/CVPrintTemplate.astro`. You never have to worry about the themes breaking your resume layout.
