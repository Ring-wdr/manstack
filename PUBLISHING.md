# Publishing Guide

## Prerequisites
- npm account (create one at [npmjs.com](https://www.npmjs.com/))
- terminal authenticated with npm (`npm login`)
- **Important**: If using a scoped package like `@manstack/core`, you must either:
  - Create an Organization named `manstack` on npmjs.com.
  - OR rename the package to use your username (e.g., `@your-username/core`).

## Simplified Publishing (Recommended)

We have configured scripts to make publishing easy.

### 1. Version Bump (Optional)
If you need to update the version of all packages:
```bash
npm run version:patch # 1.0.0 -> 1.0.1
# or
npm run version:minor # 1.0.0 -> 1.1.0
```
*This will automatically update `package.json` in all packages and create a git commit/tag.*

### 2. Publish All
To build and publish all packages (`core` and `react`) at once:
```bash
npm run release
```

### 3. Publish Individually
If you only want to publish a specific package:
```bash
npm run release:core
# or
npm run release:react
```

## Manual Publishing
If you prefer to do it manually:

1. **Prepare the Release**
   - Ensure all changes are committed.
   - Run the build for all workspaces:
     ```bash
     npm run build
     ```

2. **Version Bump**
   - Update versions in `packages/core/package.json` and `packages/react/package.json`.

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
