---
name: adding-components
description: manstack headless React 컴포넌트 생성. 새 컴포넌트 추가나 "Button처럼 만들어줘" 요청 시 사용.
---

# Headless Component 생성 가이드

manstack은 **headless UI 컴포넌트** 라이브러리입니다. 스타일 없이 기능과 접근성만 제공합니다.

## 핵심 원칙

1. **Headless**: 스타일 없음, 기능/접근성만 제공
2. **Composable**: 작은 단위로 조합 가능
3. **Accessible**: WAI-ARIA 패턴 준수
4. **Controlled/Uncontrolled**: 두 모드 모두 지원

## 컴포넌트 구조

```
packages/react/src/
├── {component-name}/
│   └── index.tsx        # 컴포넌트 구현
├── index.ts             # export 추가 필요
```

## 구현 체크리스트

- [ ] `packages/react/src/{name}/index.tsx` 생성
- [ ] `packages/react/src/index.ts`에 export 추가
- [ ] forwardRef로 ref 전달
- [ ] displayName 설정
- [ ] Props interface를 HTML 요소 속성 확장
- [ ] 기본 동작 설정 (예: button의 type="button")

## 코드 패턴

### 기본 컴포넌트 템플릿

```tsx
import React from 'react';

export interface {Name}Props extends React.{Element}HTMLAttributes<HTML{Element}Element> {
  // 추가 props
}

const {Name} = React.forwardRef<HTML{Element}Element, {Name}Props>(
  ({ ...props }, ref) => {
    return (
      <{element} ref={ref} {...props} />
    );
  }
);

{Name}.displayName = '{Name}';

export { {Name} };
```

### Controlled/Uncontrolled 지원

상태가 필요한 컴포넌트는 `useControlledState` 훅 사용:

```tsx
import { useControlledState } from './hook/use-controlled-state';

const [value, setValue] = useControlledState(
  props.value,      // controlled value
  defaultValue,     // uncontrolled default
  props.onChange    // change handler
);
```

## 네이밍 규칙

- 파일: kebab-case (`toggle-group/`)
- 컴포넌트: PascalCase (`ToggleGroup`)
- Props: `{Name}Props`

## Export 패턴

`packages/react/src/index.ts`:
```ts
export * from './{component-name}';
```

## 참고 자료

- 기존 컴포넌트: [button.tsx](../../packages/react/src/button.tsx), [delay/](../../packages/react/src/delay/)
- 훅: [use-controlled-state.ts](../../packages/react/src/hook/use-controlled-state.ts)
