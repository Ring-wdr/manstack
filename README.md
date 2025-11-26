# Manstack Headless UI

**Manstack** is a collection of accessible, unstyled, and framework-agnostic headless UI components. It is designed to be the foundation for your design system, giving you full control over styling while handling complex logic and accessibility for you.

## Features

- 🏗 **Framework Agnostic Core**: Logic is separated from rendering, making it portable.
- ♿️ **Accessible**: Follows WAI-ARIA patterns and best practices.
- 🎨 **Unstyled**: Brings no styles, giving you 100% control over the look and feel.
- 🔒 **TypeScript**: Written in TypeScript for excellent type safety and developer experience.

## Installation

```bash
npm install @manstack/react
# or
yarn add @manstack/react
# or
pnpm add @manstack/react
```

## Usage

### React

```tsx
import { Button } from '@manstack/react';

function App() {
  return (
    <Button onClick={() => console.log('Clicked!')} className="my-button-class">
      Click me
    </Button>
  );
}
```

## Project Structure

This project is a monorepo managed by npm workspaces:

- **`packages/core`**: The framework-agnostic core logic and types.
- **`packages/react`**: React implementation consuming the core.

## Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build all packages**:
   ```bash
   npm run build
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

## License

MIT
