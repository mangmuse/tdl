# Todo List

## 컴포넌트

### `AddTodoForm.jsx`

todo를 추가할 수 있는 폼 컴포넌트입니다. props로는 `onAdd`를 받습니다.

- **onAdd**: 새로운 todo가 추가될 때 호출되는 함수입니다.

### `Header.jsx`

여러 페이지에서 재사용될 수 있는 헤더 컴포넌트입니다. props는 없습니다.

### `TodoContainer.jsx`

todo 목록을 필터링하여 보여주는 컨테이너 컴포넌트입니다. props로는 `todos`, `onUpdate`, `onDelete`를 받습니다.

- **todos**: todo 목록이 담긴 배열입니다.
- **onUpdate**: todo가 업데이트될 때 호출되는 함수입니다.
- **onDelete**: todo가 삭제될 때 호출되는 함수입니다.

### `TodoList.jsx`

todo 목록을 보여주는 컴포넌트입니다. props로는 `todos`, `title`, `isVisible`, `onToggle`, `onUpdate`, `onDelete`를 받습니다.

- **todos**: todo 목록 배열입니다.
- **title**: 목록의 이름입니다.
- **isVisible**: 목록의 가시성 상태입니다.
- **onToggle**: 목록 가시성 토글 함수입니다.
- **onUpdate**: todo가 업데이트될 때 호출되는 함수입니다.
- **onDelete**: todo가 삭제될 때 호출되는 함수입니다.

### `TodoItem.jsx`

각각의 todo 항목을 보여주는 컴포넌트입니다. props로는 `todo`, `onUpdate`, `onDelete`를 받습니다.

- **todo**: todo 객체입니다.
- **onUpdate**: todo의 상태가 변경될 때 호출되는 함수입니다.
- **onDelete**: todo가 삭제될 때 호출되는 함수입니다.
