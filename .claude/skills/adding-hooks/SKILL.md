---
name: adding-hooks
description: manstack React 커스텀 훅 생성. 새 훅 추가나 상태 관리 로직 요청 시 사용.
---

# Custom Hook 생성 가이드

manstack 훅은 컴포넌트의 **재사용 가능한 로직**을 캡슐화합니다.

## 훅 위치

```
packages/react/src/hook/
├── use-callback-ref.ts      # 콜백 안정화
├── use-controlled-state.ts  # controlled/uncontrolled 상태
└── use-{new-hook}.ts        # 새 훅
```

## 구현 체크리스트

- [ ] `packages/react/src/hook/use-{name}.ts` 생성
- [ ] 필요시 `packages/react/src/index.ts`에 export
- [ ] TypeScript 제네릭으로 타입 안전성 확보
- [ ] SSR 안전성 고려 (typeof document !== 'undefined')

## 코드 패턴

### 기본 훅 템플릿

```ts
import React from 'react';

function use{Name}<T>(initialValue: T): [T, (value: T) => void] {
  const [state, setState] = React.useState(initialValue);

  const handler = React.useCallback((value: T) => {
    setState(value);
  }, []);

  return [state, handler];
}

export { use{Name} };
```

### SSR 안전 패턴

```ts
const isClient = typeof document !== 'undefined';

function useSafeHook() {
  // SSR에서는 기본값 반환
  if (!isClient) return defaultValue;

  // 클라이언트 로직
}
```

### Effect 선택 패턴

```ts
import { noop } from '@manstack/core';

// 실행 시점별 effect 선택
const useEarlyEffect: typeof React.useLayoutEffect =
  typeof document !== 'undefined'
    ? (React.useInsertionEffect ?? React.useLayoutEffect)
    : noop;
```

## 네이밍 규칙

- 파일: `use-{name}.ts` (kebab-case)
- 훅: `use{Name}` (camelCase)
- 반드시 `use` 접두사

## 기존 훅 활용

| 훅 | 용도 |
|----|------|
| `useCallbackRef` | 콜백을 ref에 저장하여 안정적인 참조 유지 |
| `useControlledState` | controlled/uncontrolled 상태 통합 관리 |

## 참고 자료

- [use-callback-ref.ts](../../packages/react/src/hook/use-callback-ref.ts)
- [use-controlled-state.ts](../../packages/react/src/hook/use-controlled-state.ts)
