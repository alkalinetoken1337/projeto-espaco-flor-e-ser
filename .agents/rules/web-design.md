---
description: Rules for web design and frontend site creation
trigger: always_on
---

# Web Design & Website Creation Rules

For any task involving web design, UI development, frontend components, styling, or auditing the website:

1. **Skill Integration**:
   - Always refer to and apply the skill in `.agents/skills/web-design-guidelines/SKILL.md` and reference file `.agents/skills/web-design-guidelines/guidelines.md`.

2. **Core Guidelines**:
   - **Accessibility**: Semantic HTML over `div/span` handlers (`<button>` for actions, `<a>` for links). All icon-only buttons need `aria-label`. All inputs need `<label>` or `aria-label`. Interactive elements must support keyboard navigation.
   - **Focus States**: Visible `:focus-visible` ring on interactive elements. Never use `outline: none` or `outline-none` without an explicit focus replacement.
   - **Forms**: Meaningful `name`, appropriate `type` (`email`, `tel`, etc.), `autocomplete`. Never block paste (`onPaste` + `preventDefault`).
   - **Animation**: Always honor `prefers-reduced-motion`. Never use `transition: all`. Animate `transform` / `opacity` only.
   - **Typography**: Real ellipsis `…` and curly quotes `“` `”`. Use `text-wrap: balance` or `text-pretty` on titles.
   - **Content & Overflow**: Flex children must have `min-w-0` to allow truncation. Prevent unintentional horizontal scroll (`overflow-x-hidden`).
   - **Images**: Explicit `width` and `height` to prevent Cumulative Layout Shift (CLS). Below-the-fold images must use `loading="lazy"`.
   - **Performance**: Virtualize long lists (>50 items). Avoid synchronous layout reads in render.
