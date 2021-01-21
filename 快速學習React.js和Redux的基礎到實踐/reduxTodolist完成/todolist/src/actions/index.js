
// 這個 method 叫做 action creater
// 輸出後讓我們能在其他 component 調用這些 method
export const createTodo = text => {
  // return action 物件
  return {
    // 唯一必須要傳遞的，是 action 物件的 type，型態為字串，而且不能夠重複
    type: 'CREATE_TODO',
    // payload 則沒有嚴格規定應該如何撰寫
    text: text,
  }
}
export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}