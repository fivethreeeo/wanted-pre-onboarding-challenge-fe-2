require("./typedef.js");

/** Todo 데이터 관리 */
class TodoStore {
  /**
   * 기존의 TodoList데이터를 받아 Store 초기화
   * @param {TodoList} todoList
   */
  constructor() {
    this.todoList;
  }

  /**
   * Set TodoList
   * @param {TodoList} todolist
   */
  setTodoList(todolist) {}

  /**
   * 모든 할 일을 조회
   * @return {TodoList} 모든 Todo를 가진 TodoList
   */
  getTodoListAll() {}

  /**
   * ID를 기반으로 특정 할 일을 조회
   * @param {TodoId} id 조회할 할 일의 id
   * @return {Todo} 특정id로 조회된 Todo
   */
  getTodoById(id) {}

  /**
   * 할 일을 추가(내용없이 추가할 수 없다.)
   * - Todo 생성에 꼭 필요한 내용(content)를 받아서 생성
   * - Todo의 필수요소인 아이디, 카테고리, 완료여부는 함수 내부에서 직접 부여
   * @param {TodoContent} content 추가할 Todo 내용
   */
  addTodo(content) {}

  /**
   * 모든 할 일을 삭제
   */
  deleteTodoListAll() {}

  /**
   * ID를 기반으로 특정 할 일을 삭제
   * @param {TodoId} id 삭제할 할 일의 id
   */
  deleteTodoById(id) {}

  /**
   * ID를 제외한 모든 속성을 수정
   * @param {TodoForUpdate} todoForUpdate - 업데이트할 속성 값들을 가진 Todo
   */
  updateTodo(todoForUpdate) {}

  /**
   * 특정 할 일의 모든 태그를 삭제
   * @param {TodoId} id 모든 태그를 삭제할 할 일의 id
   */
  deleteAllTagsOnTodoById(id) {}

  /**
   * 특정 할 일의 특정 태그를 삭제
   * @param {TodoId} id 태그를 삭제할 할 일의 id
   * @param {Tag} tagName 삭제할 태그명
   */
  deleteTagOnTodoById(id, tagName) {}

  /**
   * 특정 할 일의 특정 태그를 추가
   * @param {TodoId} id 태그를 추가할 할 일의 id
   * @param {Tag} tagName 추가할 태그명
   */
  addTag(id, tagName) {}

  /**
   * 특정 할 일의 특정 태그를 수정
   * @param {TodoId} id 수정할 할 일의 id
   * @param {{currentTagName, newTagName}} tagNames 기존 태그, 새로 변경할 태그
   */
  updateTag(id, tagNames) {}
}

export default TodoStore;
