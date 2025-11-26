# Publishing Guide

## Prerequisites
- npm account (create one at [npmjs.com](https://www.npmjs.com/))
- terminal authenticated with npm (`npm login`)
- **Important**: If using a scoped package like `@manstack/core`, you must either:
  - Create an Organization named `manstack` on npmjs.com.
  - OR rename the package to use your username (e.g., `@your-username/core`).

## Steps to Publish

1. **Prepare the Release**
   - Ensure all changes are committed.
   - Run the build for all workspaces:
     ```bash
     npm run build
     ```

2. **Version Bump**
   - Update versions in `packages/core/package.json` and `packages/react/package.json`.
   - Ensure `@manstack/react` depends on the new version of `@manstack/core`.

3. **Publish to npm**
   - Publish `core` first:
     ```bash
     cd packages/core
     npm publish --access public
     ```
   - Then publish `react`:
     ```bash
     cd ../react
     npm publish --access public
     ```

4. **Verify**
   - Check npmjs.com for both `@manstack/core` and `@manstack/react`.

## Local Testing
To test locally:
1. Run `npm pack` in each package directory.
2. Install the generated `.tgz` files in your consuming project.
