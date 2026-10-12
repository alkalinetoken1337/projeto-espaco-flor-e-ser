# Web Design Guidelines Integration

This repository follows the **Web Interface Guidelines** (from Vercel Labs) for all website creation, UI engineering, component styling, and UX tasks.

## Skill Reference

- Skill: `web-design-guidelines`
- Location: `.agents/skills/web-design-guidelines/SKILL.md`
- Cached Guidelines: `.agents/skills/web-design-guidelines/guidelines.md`
- Remote Source: `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`

## Mandate for Site Tasks

Whenever creating, modifying, styling, or auditing web pages and UI components in this project, the following core principles must be upheld:

1. **Accessibility (a11y)**:
   - Icon-only buttons must have `aria-label`.
   - Form inputs require `<label>` or `aria-label`.
   - Semantic HTML elements (`<button>`, `<a>`, `<label>`, `<nav>`) rather than `div`/`span` click handlers.
   - Images must have `alt` attributes (`alt=""` for decorative).
   - Async UI updates (toasts, alerts) must announce with `aria-live="polite"`.

2. **Focus States**:
   - Never use `outline-none` without an explicit focus replacement (`focus-visible:ring-*`).
   - Group focus states using `:focus-within`.

3. **Forms & Inputs**:
   - Meaningful `name`, appropriate `type` and `autocomplete`.
   - Never block paste (`onPaste` + `preventDefault`).
   - Clickable labels via `htmlFor` or wrapping controls.

4. **Animations**:
   - Always respect `prefers-reduced-motion`.
   - Animate `transform` and `opacity` only (avoid animating layout properties).
   - Do not use `transition: all`.

5. **Typography & Content**:
   - Proper ellipsis `…` and curly quotes `“` `”`.
   - `text-wrap: balance` or `text-pretty` on headers.
   - Container truncation (`min-w-0`, `truncate`, `line-clamp-*`) to avoid layout overflows.

6. **Images & Media**:
   - Always define explicit `width` and `height` to prevent Cumulative Layout Shift (CLS).
   - Lazy load images below the fold (`loading="lazy"`).
