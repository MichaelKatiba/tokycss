# TokyCSS — Agent Instructions

## Core Rules

- Before making any changes, describe what you will implement, why, and the expected result.
- Clean up redundant code after edits. Never alter code that shouldn't be touched.
- Learn from errors and resolve them before finishing. Avoid repeating past mistakes.
- Prioritize effectiveness over speed.
- Use the latest available tools and syntax.
- Check for recent manual changes before modifying files.
- Ask for approval before making changes.
- Use well-supported syntax and provide browser fallbacks where needed.
- Never hallucinate or assume if unclear — ask for clarification or suggest options.
- Don't blindly agree — analyze logic, consider what's best for the project, and offer your unbiased opinion if you have a better approach.
- Avoid duplication of code or tasks. Never make up invalid solutions.
- Keep code well-structured and readable.

## Superpowers Workflow

This project uses the Superpowers plugin. You are expected to read this file **once**, then progress through the workflow autonomously. The agent checks for relevant skills before any task. These are mandatory workflows, not suggestions.

**1. brainstorming** — Activates before writing code. Refines rough ideas through questions, explores alternatives, presents design in sections for validation. Saves design document.

**2. using-git-worktrees** — Activates after design approval. Creates isolated workspace on new branch, runs project setup, verifies clean test baseline.

**3. writing-plans** — Activates with approved design. Breaks work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.

**4. subagent-driven-development** or **executing-plans** — Activates with plan. Dispatches fresh subagent per task with two-stage review (spec compliance, then code quality), or executes in batches with human checkpoints.

**5. test-driven-development** — Activates during implementation. Enforces RED-GREEN-REFACTOR: write failing test, watch it fail, write minimal code, watch it pass, commit. Deletes code written before tests.

**6. requesting-code-review** — Activates between tasks. Reviews against plan, reports issues by severity. Critical issues block progress.

**7. finishing-a-development-branch** — Activates when tasks complete. Verifies tests, presents options (merge/PR/keep/discard), cleans up worktree.

Load the relevant skill with: `use skill tool to load superpowers/<skill-name>`

## TokyCSS-Specific Notes

- CSS design system that uses element selectors with a few utility/layout classes (`.layout-grid`, `.layout--main`, `.btn--sm`, `.btn--md`, `.btn--lg`, `[aria-*]`, `[data-*]`).
- No JavaScript runtime — pure CSS.
- Use `oklch()` and `light-dark()` for colors and theming. Always prefer OKLCH over hex/rgb.
- Spacing system is 4px-based. Use `--tk-size-*` variables.
- Typography uses `clamp()`-based fluid scaling. Use `--tk-text-*` variables.
- Variables live in `variables/`, styles in `styles/`, main entry `src/toky.css` with `@layer` ordering.
- The styleguide (`src/styleguide.css`) sets brand defaults and overrides framework variables.

