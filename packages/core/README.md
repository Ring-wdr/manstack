# @manstack/core

The framework-agnostic core logic for **Manstack**.
This package contains pure JavaScript/TypeScript logic, types, and helpers that are shared across different framework implementations.

## Installation

```bash
npm install @manstack/core
```

## Usage

This package is primarily intended to be used by framework adapters (like `@manstack/react`), but you can use it directly if you are building your own adapter.

```ts
import { getButtonProps } from '@manstack/core';

const props = getButtonProps({ disabled: true });
// -> { type: 'button', 'aria-disabled': true, disabled: true }
```
