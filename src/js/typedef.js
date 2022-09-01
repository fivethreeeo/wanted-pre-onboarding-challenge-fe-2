/**
 * Todo Item의 정보를 담는 객체
 * @typedef {Object} Todo
 * @property {TodoId} id
 * @property {TodoContent} content
 * @property {TodoIsCompleted} isCompleted
 * @property {TodoCategory} category
 * @property {TodoTags} [tags]
 */

/**
 * Update할 Todo Item의 변경된 정보를 담는 객체
 * - id를 제외하고 전부 optional
 * @typedef {Object} TodoForUpdate
 * @property {TodoId} id
 * @property {TodoContent} [content]
 * @property {TodoIsCompleted} [isCompleted]
 * @property {TodoCategory} [category]
 * @property {TodoTags} [tags]
 */

/**
 * Todo Properties type
 * - {Todo["id"]} 이런 식으로 접근했더니 parse 오류가 떠서 새로 정의함
 * @typedef {string} TodoId
 * @typedef {string} TodoContent
 * @typedef {boolean} TodoIsCompleted
 * @typedef {string} TodoCategory
 * @typedef {Tag[]} TodoTags
 */

/**
 * Todo를 모아 놓은 배열
 * @typedef {Todo[]} TodoList
 */

/**
 * Tag의 정보를 담는 문자열
 * @typedef {string} Tag
 */

/**
 * Tag를 모아 놓은 배열
 * @typedef {Tag[]} TagList
 */
