### 초기세팅

### Vite 프로젝트 생성

```
npm create vite@latest my-fsd-project -- --template react-ts
cd my-fsd-project
```

### 의존성 설치

```
npm install
```

### 디렉토리 구조를 FSD로 세팅

```
src/
├── app/
│   └── index.tsx
├── entities/
│   └── user/
├── features/
│   └── auth/
├── shared/
│   ├── api/
│   ├── components/
│   └── lib/
├── pages/
│   ├── home/
│   ├── about/
│   └── index.tsx

```

### ESLint 및 Prettier 설정

#### ESLint 설치

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev
```

#### Prettier 설치

```
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

### React Router 설치

```
npm install react-router-dom
```

### FSD 용 ESLint 적용 및 Import 적용

#### FSD ESLint 설치

- https://github.com/feature-sliced/eslint-config#readme

```
npm install -D @feature-sliced/eslint-config eslint-plugin-import eslint-plugin-boundaries
```

#### tsconfig파일에서 paths 수정

```json
// tsconfig.app.json
{
  "compilerOptions": {
    ...,

    "baseUrl": ".",
    "paths": {
      /* FSD Imports */
      "@/*": ["src/*"],
      "@app/*": ["src/app/*"],
      "@entities/*": ["src/entities/*"],
      "@features/*": ["src/features/*"],
      "@shared/*": ["src/shared/*"],
      "@pages/*": ["src/pages/*"]
    }
  },
  "include": ["src"]
}
```

#### 적용 코드

```tsx
import { MainPage } from '@pages/main/ui/index';
//import { MainPage } from './pages/main/ui/Page/index'; // './pages/main/ui/Page/index' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts(2307)
```

### ESlint airbnb ts 적용

- https://github.com/iamturns/eslint-config-airbnb-typescript

```
eslint-config-airbnb-typescript
```

### Tailwindcss 적용

- https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## TODO

- Import Sort
- husky
