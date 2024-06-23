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
