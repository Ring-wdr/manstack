---
name: building-packages
description: manstack 패키지 빌드, 배포, 버전 관리. 빌드 오류나 npm 배포 요청 시 사용.
---

# 패키지 빌드 및 배포 가이드

manstack은 **npm workspaces** 기반 모노레포입니다.

## 프로젝트 구조

```
manstack/
├── packages/
│   ├── core/          # @manstack/core - 순수 JS 유틸리티
│   └── react/         # @manstack/react - React 컴포넌트
├── package.json       # 루트 (workspaces 설정)
└── biome.json         # 린터/포매터
```

## 명령어 참조

### 빌드
```bash
npm run build                    # 전체 빌드
npm run build --workspace=@manstack/core   # core만
npm run build --workspace=@manstack/react  # react만
```

### 품질 검사
```bash
npm run lint       # Biome 린트
npm run format     # Biome 포맷
npm run check      # 린트 + 포맷 + 자동 수정
npm run typecheck  # TypeScript 타입 검사
```

### 버전 관리
```bash
npm run version:patch  # 1.0.0 → 1.0.1
npm run version:minor  # 1.0.0 → 1.1.0
npm run version:major  # 1.0.0 → 2.0.0
```

### 배포
```bash
npm run release        # 전체 배포
npm run release:core   # @manstack/core만
npm run release:react  # @manstack/react만
```

## 빌드 설정 (tsup)

각 패키지는 `tsup.config.ts` 사용:
- CJS + ESM 듀얼 출력
- TypeScript 선언 파일 생성
- `dist/` 폴더에 출력

## 배포 체크리스트

- [ ] `npm run check` 통과
- [ ] `npm run typecheck` 통과
- [ ] `npm run build` 성공
- [ ] 버전 범프 (`npm run version:*`)
- [ ] `npm run release` 실행

## 의존성 구조

```
@manstack/react
  └── @manstack/core (내부 의존성)
  └── react, react-dom (peerDependencies)
```

## 일반적인 오류 해결

| 오류 | 해결 |
|------|------|
| 빌드 실패 | `npm run typecheck`로 타입 오류 확인 |
| 린트 오류 | `npm run check`로 자동 수정 |
| 의존성 오류 | `npm install` 재실행 |
