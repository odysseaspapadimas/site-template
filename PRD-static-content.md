# Eliminate Runtime Content Injection: Build-Time Static Content for Site Template

## Problem Statement
Currently, the site template displays placeholder text (e.g., "Loading Title...") on initial load, which is replaced by client-side JavaScript after the DOM is ready. This causes a visible flash and means the site is not truly static.

## Objective
Render all tenant-specific content directly into the HTML at build time, eliminating the need for runtime DOM manipulation and ensuring the site is fully static with no "Loading..." flash.

## Scope
- Replace all runtime content injection (e.g., hero title, subtitle, CTA) with build-time placeholder replacement.
- Remove unnecessary client-side JavaScript for static content.
- Update the deployment/build pipeline to inject tenant data into HTML files before running the static build.

## Technical Approach
- Use template placeholders (e.g., `{{HEROTITLE}}`) in HTML files.
- Add a pre-build script that replaces these placeholders with tenant-specific values.
- Run this script before `vite build` in the deployment process.
- Remove JavaScript that sets static content at runtime.

## Acceptance Criteria
- No "Loading..." or placeholder text is visible on any page load, even on hard refresh.
- All tenant-specific content is present in the initial HTML served to the user.
- No client-side JavaScript is required for static content injection.
- The build and deployment process is updated to support this flow.

## Out of Scope
- Dynamic or interactive features that require JavaScript at runtime.
- SSR or hydration for React/Vue/other frameworks (this is for static sites only).
