let nextStartId = 3;

export const createTodo = text => {
  return {
    type: 'CREATE_TODO',
    text: text,
    id: nextStartId++
  };
};

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};
