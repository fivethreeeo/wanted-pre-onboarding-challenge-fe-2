require("./typedef.js");

import TodoStore from "./TodoStore.js";

/** Todo 뷰 관리 - 요소와 요소와 관련된 이벤트, 렌더링 관리 */
class TodoView {
  /**
   * 입력 요소와 리스트 요소 초기화
   * @param {TodoStore} store
   * @param {HTMLInputElement} inputEl
   * @param {HTMLElement} todoItemsEl
   * @param {HTMLButtonElement} deleteAllBtnEl
   */
  constructor({
    store,
    state: { category, filter },
    element: { inputEl, todoItemsEl, deleteAllBtnEl },
  }) {
    this.store = store;
    this.currentCategory = category;
    this.currentFilter = filter;
    this.inputEl = inputEl;
    this.todoItemsEl = todoItemsEl;
    this.deleteAllBtnEl = deleteAllBtnEl;
  }

  /**
   * View 초기화
   * - 이벤트 설정, 초기 렌더링
   */
  init() {}

  /**
   * Todo 정보로 HTML string을 만듬(템플릿 리터럴)
   * @param {Todo} todo 할 일 정보를 가진 todo객체
   * @return {string} HTML string
   */
  templateItemHTML(todo) {}

  /**
   * 현재 저장되어있는 할 일 목록을 현재 입력된 필터 값에 맞게 화면에 렌더링
   */
  render(todoList) {}

  /**
   * 요소에 이벤트 추가
   * - inputEl : 투두 입력 관련 이벤트 추가
   * - deleteAllBtnEl : 전체 삭제 관련 이벤트 추가
   * - todoItemsEl : 내용 수정, 완료-진행중 체크, 카테고리 수정, 태그 추가-삭제-수정 등 이벤트 위임처리
   */
  addEvents() {}

  /**
   * 입력창에 할 일 내용 입력 후 엔터 => 할 일 추가
   * @param {KeyboardEvent} 엔터키 키다운 이벤트
   */
  onInputEnter(event) {}

  /**
   * 삭제 버튼 클릭 => 할 일 삭제
   * @param {MouseEvent} event 마우스 클릭 이벤트
   */
  onDeleteTodoBtnClick(event) {}

  /**
   * 전체 삭제 버튼 클릭 => 할 일 전체 삭제
   * @param {MouseEvent} event 마우스 클릭 이벤트
   */
  onDeleteAllTodoBtnClick(event) {}

  /**
   * 할 일의 체크박스 클릭 => 진행중 - 완료 전환
   * @param {MouseEvent} event 마우스 클릭 이벤트
   */
  onCheckboxClick(event) {}

  /**
   * 할 일 내용 수정 후 포커스 아웃 => 할 일 내용 수정
   * @param {FocusEvent} event 포커스 아웃 이벤트
   */
  onTodoContentFocusout(event) {}

  /**
   * 태그 입력창에 태그 입력 후 엔터 => 태그 추가
   * @param {KeyboardEvent} event 엔터키 키다운 이벤트
   */
  onTagInputEnter(event) {}

  /**
   * 태그 내용 수정 후 포커스 아웃 => 태그 내용 수정
   * @param {FocusEvent} event 포커스 아웃 이벤트
   */
  onTagFocusout(event) {}

  /**
   * 태그 전체 삭제 버튼 클릭 => 할 일의 모든 태그 삭제
   * @param {MouseEvent} event 마우스 클릭 이벤트
   */
  onDeleteAllTagsBtnClick(event) {}

  /**
   * 태그 삭제 버튼 클릭 => 해당 태그 삭제
   * @param {MouseEvent} event 마우스 클릭 이벤트
   */
  onDeleteTagBtnClick(event) {}
}

export default TodoView;
