# AGENTS.md

This repository contains a Rancher UI driver for the OCP node driver. Update this
document if tooling, CI, or testing changes.

## Quick start

- Working directory: `/home/hrb33/Dokumenty/dev/github/rancher-ui-driver-ocp`
- Git repo: yes
- Language/tooling: Node.js (gulp build pipeline)
- CI/CD: not yet defined
- Test framework: not defined
- Linting/formatting: jshint (optional)

## Build / lint / test commands

Use these commands for the UI driver build pipeline.

### Start (dev server)

- `npm start`

### Install

- `npm install`

### Build

- `npm run build`

### Lint

- `npx jshint component/*.js gulpfile.js`

### Format

No formatter is configured. Keep formatting consistent with existing files.

### Test (all)

No test commands are available yet.

### Test (single)

No test commands are available yet.

### Test (watch)

No test commands are available yet.

## Code style guidelines

Follow existing patterns in the UI driver files. Use these conventions when adding new code.

### General

- Keep changes focused; avoid unrelated refactors in functional commits.
- Match the dominant style once code exists; do not introduce a new style without need.
- Prefer small, composable functions and modules over long, monolithic files.
- Keep public APIs minimal and documented.

### Imports

- Group imports by origin: standard library, third-party, then local.
- Separate import groups with a single blank line.
- Use named imports where possible; avoid default imports unless required by tooling.
- Avoid deep relative paths; prefer configured aliases when available.

### Formatting

- Use the project formatter once defined (Prettier, gofmt, rustfmt, black, etc.).
- Keep line length under 100 characters unless the formatter specifies otherwise.
- Prefer trailing commas where supported for cleaner diffs.
- Use spaces for indentation; avoid tabs unless the language prefers tabs.

### Types and interfaces

- Prefer explicit types at module boundaries.
- Avoid `any` or overly broad types; use proper generics or unions.
- In typed languages, keep interfaces narrow and focused on behavior.
- Document non-obvious type constraints with short comments.

### Naming

- Use descriptive, intent-revealing names; avoid abbreviations.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for types, classes, and components.
- Use `SCREAMING_SNAKE_CASE` for constants.
- Use verbs for functions and actions; use nouns for data structures.

### Error handling

- Prefer explicit error handling over silent failures.
- Preserve root cause when wrapping errors.
- Return typed errors or structured error objects where possible.
- Avoid swallowing errors in background tasks; log with context.

### Logging

- Use structured logging once a logger is introduced.
- Include request identifiers or correlation IDs where available.
- Avoid logging sensitive data.

### Data validation

- Validate external inputs at boundaries.
- Prefer schema-based validation when tooling exists.
- Fail fast on invalid data with clear error messages.

### Tests

- Write tests alongside new features or bug fixes.
- Prefer deterministic tests; avoid timing-dependent assertions.
- Use descriptive test names that explain behavior.
- Keep tests focused on one behavior per test case.

### Documentation

- Update docs and inline comments when behavior changes.
- Document public APIs, configuration, and edge cases.

## Cursor/Copilot rules

- No Cursor rules found in `.cursor/rules/` or `.cursorrules`.
- No Copilot instructions found in `.github/copilot-instructions.md`.

## Notes for agents

- If you add tooling, update this file with exact commands and examples.
- Keep this file roughly 150 lines; trim if it grows.
- Follow repository conventions as soon as they exist.
- When unsure, ask for clarification rather than guessing.
