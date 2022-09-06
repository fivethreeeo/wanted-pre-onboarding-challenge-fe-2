# wanted-pre-onboarding-challenge-fe-2

원티드 프리온보딩 프론트엔드 챌린지 2차 사전과제

## JSDoc 배포 페이지

https://sangbeomheo.github.io/wanted-pre-onboarding-challenge-fe-2/

<br>

## 프로젝트 실행 방법

```
yarn build
yarn dev
```

## 프로젝트 설계

#### `typedef.js`

- 타입 관리

#### `TodoStore.js`

- Todo 데이터를 소유&관리 (조회, 추가, 삭제, 수정)
- 의존성 없음

#### `TodoView.js`

- 렌더링에 필요한 요소를 만들고 화면에 List를 렌더링
- html 요소들과 이벤트, 이벤트관련 함수들을 관리
- Store를 알고 있음
- handler 또는 controller 역할도 같이 수행.(렌더링 관련 부분의 양이 작아서 view에서 함께 관리하도록 결정함)

<br>

## 요구사항 구현

### 필수 요구사항

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 `선언부만` 만든다.
- [x] `JSDoc`을 활용해 문서화한다.
- [x] `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

<br>

### CRUD

- 선언부로 작성한 내용들을 체크했습니다.

#### CREATE

- [x] 할 일을 추가할 수 있다.
- [x] 내용없이 추가할 수 없다.

#### READ

- [x] 모든 할 일을 조회할 수 있다.
- [x] ID를 기반으로 특정 할 일을 조회할 수 있다.

#### UPDATE

- [x] ID를 제외한 모든 속성을 수정할 수 있다.
- [x] 특정 할 일의 특정 태그를 수정할 수 있다.

#### DELETE

- [x] ID를 기반으로 특정 할 일을 삭제할 수 있다.
- [x] 모든 할 일을 제거할 수 있다.
- [x] 특정 할 일의 특정 태그를 삭제할 수 있다.
- [x] 특정 할 일의 모든 태그를 제거할 수 있다.
