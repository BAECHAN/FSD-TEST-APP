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

### 디렉토리 구조를 FSD로 세팅 ( 작업하면서 수정 중 - 아래는 임시 구조 )

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

### FSD 용 Import 적용

#### 적용 코드

```tsx
import { MainPage } from 'pages/main';
//import { MainPage } from './pages/main/ui/Page/index';
// './pages/main/ui/Page/index' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts(2307)
```

### Tailwindcss 적용

- https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Import Sorting 처리

```
npm install --save-dev prettier prettier-plugin-organize-imports
```

### Husky + lint-staged 설정

#### Husky

Husky는 Git 훅을 쉽게 관리하고 실행할 수 있게 해주는 도구입니다. Git 훅은 특정 Git 이벤트가 발생할 때 자동으로 실행되는 스크립트입니다. 예를 들어, 커밋하기 전에 코드 린터를 실행하거나, 푸시하기 전에 테스트를 실행하는 등의 작업을 수행할 수 있습니다.

##### 주요 특징

- 간편한 설정: Git 훅을 쉽게 설정하고 관리할 수 있습니다.
- 다양한 훅 지원: pre-commit, pre-push, commit-msg 등 다양한 Git 훅을 지원합니다.
- 자동 실행: 특정 이벤트가 발생할 때 자동으로 스크립트를 실행합니다.

#### lint-staged

lint-staged는 Git의 스테이징 영역에 있는 파일에 대해서만 린팅(Linting)이나 포맷팅을 수행하는 도구입니다. 이를 통해 커밋 시점에서 코드 품질을 유지하면서 전체 프로젝트에 대해 린터를 실행하지 않아도 됩니다.

##### 주요 특징

- 빠른 성능: 변경된 파일에 대해서만 린터를 실행하므로 빠른 성능을 제공합니다.
- 다양한 작업 지원: 린팅 외에도 포맷팅, 테스트 실행 등 다양한 작업을 수행할 수 있습니다.
- 간편한 설정: 간단한 설정으로 다양한 파일 형식에 대해 작업을 설정할 수 있습니다.

Husky와 lint-staged를 조합하여 git commit 전에 linting에 실패할 경우 commit 되지 않도록 처리한다.

##### 요약

Husky: Git 훅을 관리하고 실행하는 도구로, 특정 Git 이벤트가 발생할 때 자동으로 스크립트를 실행합니다.
lint-staged: 스테이징된 파일에 대해 린팅 및 기타 작업을 수행하는 도구로, 커밋 시점에서 코드 품질을 유지합니다.

이 두 도구를 함께 사용하면, 개발 워크플로우에서 자동으로 코드 린팅과 포맷팅을 수행하여 코드 품질과 일관성을 보장할 수 있습니다.

아래는 실행 명령어로 Husky와 lint-staged 패키지를 추가하고, 필요한 환경 파일을 추가로 만들어준다.

```
npx mrm lint-staged
```

### Shadcn-ui

Shadcn은 UI 라이브러리로, Tailwind CSS와 React를 사용하여 스타일링 및 컴포넌트 개발을 쉽게 할 수 있도록 도와줍니다. Tailwind CSS의 유틸리티 클래스와 함께 사용하는 컴포넌트 모음을 제공하여, 사용자 인터페이스를 빠르고 일관성 있게 구축할 수 있도록 지원합니다.

#### 공식문서

- https://ui.shadcn.com/docs/installation/vite

1. Shadcn-ui를 적용해주는데 기존 tailwindcss가 적용이 안되서 확인해보니 components.json ( shadcn config 파일 )에서 prefix로 특정 접두사를 쓰다보니 tailwind가 적용이 되지 않았었습니다.

before - "prefix": 'false'

after - "prefix": ""

before일때 falseflex, falsebg-gray-100 이런식으로 말그대로 prefix로 false가 붙어야만 Tailwind가 적용되도록 변경되어있어서 after와 같이 적용 후 기존 shadcn에서 falseflex와 같이 되어있던부분들을 제거

2. shadcn-ui에서 컴포넌트를 추가하는 경우 기존 lint 설정한 옵션들과 맞지 않아 수정

- className is missing in props validation react/prop-types lint

해결방법 : eslintrc파일에 rule 수정

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    // 기존 규칙...
    'react/prop-types': 'off',
  },
};
```

3. import 해올 때 절대경로를 못읽어와서 환경파일을 몇몇개 수정하였음

- tsconfig.app.json 에서 path와

### import 설정

- 절대경로 '@/entities/~' 이런식으로만 import해올 수 있도록 lint 설정
- import해올 떄 index.tsx파일로만 import 해올 수 있도록 ( 원본파일에 직접 import 해올 수 없게 막음 ) lint 설정
- import해올 때 확장자 생략 가능

#### 사용한 라이브러리

```bash
  "eslint-import-resolver-alias": "^1.1.2",
  "eslint-plugin-import": "^2.29.1",
```

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    // 기존 규칙...
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // 라이브러리 패키지는 제외하고 import문에 확장자 없을 시 에러. 에러시 수동수정 필요 (TypeScript에서는 확장자 붙이는 것을 권장)

    'no-restricted-imports': [
      'error',
      {
        paths: [],
        patterns: [
          {
            group: [
              '@/shared/lib/shadcn-ui/components/ui/*',
              '!@/shared/lib/shadcn-ui/components/ui/index',

              '@/entities/**/*.{ts,tsx}',
              '!@/entities/**/index.{ts,tsx}',

              '@/features/**/*.{ts,tsx}',
              '!@/features/**/index.{ts,tsx}',

              '@/widgets/**/*.{ts,tsx}',
              '!@/widgets/**/index.{ts,tsx}',

              '@/pages/**/*.{ts,tsx}',
              '!@/pages/**/index.{ts,tsx}',
            ],
            message: 'Please import from the index.ts file in the ui folder.',
          },
        ],
      },
    ], // import 해올 수 있는 파일을 index.tsx ( Barrel ) 파일로 한정시켜 export 관리에 용이하게 처리함
  },
};
```

### FSD폴더 구조 변경

index.ts파일로만 import해올 수 있으며,
다른 컴포넌트 파일들은 LoginForm/index.tsx -> LoginForm.tsx 파일로 명명하여 검색에 용이하게 수정하고, 폴더 구조를 단순화 시킴

### 선택사항

#### settings.json파일 추가

git에는 안올라가기 때문에 필요하시면 따로 드리겠습니다.

제 경우 아래와 같이 적용

- 인텔리센스에서 추천항목 일부 제외
- import 상대경로 안쓰기
-

#### Extension

- Tailwind CSS IntelliSense ( tailwind class 인텔리센스 추천 )

### import 설정2

A라는 경로에서 B 경로를 import 해올 수 없게 하도록 처리하려고함. ( FSD 아키텍처에서는 하위 Layer가 상위 Layer를 import 해오지 못하게 구성해야됨 )

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    ..., // 기존 규칙

    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/shared',
            from: [
              './src/entities',
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/entities',
            from: [
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/features',
            from: [
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/widgets',
            from: ['./src/pages', './src/processes', './src/app'],
          },
          {
            target: './src/pages',
            from: ['./src/processes', './src/app'],
          },
          {
            target: './src/processes',
            from: ['./src/app'],
          },
        ],
      },
    ], // target에서 from으로부터 import해올 수 없도록 함
  },
};
```

### TanstackQuery + Recoil 추가

```bash
npm install @tanstack/react-query recoil
```

```bash
npm install --save-dev @types/react-query @types/recoil
```

### Axios

axios 인스턴스를 생성해서 한번에 관리하자.
axios.create
