# @manstack/react

React implementation of **Manstack** headless UI components.
Accessible, unstyled, and ready for your design system.

## Installation

```bash
npm install @manstack/react
```

## Components

### Button

A headless button component that handles accessibility and ref forwarding.

```tsx
import { Button } from '@manstack/react';

function App() {
  return (
    <Button onClick={() => alert('Hi!')} className="btn-primary">
      Click Me
    </Button>
  );
}
```

### Delay

A utility component that renders its children after a specified delay. Useful for preventing layout thrashing or showing loading states after a threshold.

```tsx
import { Delay } from '@manstack/react';

function App() {
  return (
    <Delay ms={500} fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Delay>
  );
}
```

## Props

### Button
Inherits all standard HTML button attributes.

### Delay
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ms` | `number` | `1000` | Delay in milliseconds before rendering children. |
| `fallback` | `ReactNode` | `null` | Content to show while waiting. |
