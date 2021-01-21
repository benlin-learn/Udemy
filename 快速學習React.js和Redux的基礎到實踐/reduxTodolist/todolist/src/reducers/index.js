const initState = {
  todos: [
    { id: 0, text: '吃飯' },
    { id: 1, text: '上學' },
    { id: 2, text: '睡覺' }
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, { text: action.text, id: action.id }]
      });
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => {
          return todo.id !== action.id;
        })
      });
    default:
      return state;
  }
};

export default todoReducer;
