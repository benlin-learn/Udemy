import React, { Component } from 'react';
import Title from './components/Title';
import List from './components/List';
import TodoForm from './components/TodoForm';
import { createStore } from 'redux';
import todoReducer from './reducers/index';
import { Provider } from 'react-redux';

let store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 這裡的 class 名稱不一定要用 App ，可以使用任何你想用的名字
class TodoList extends Component {
  // constructor() {
  //   super();
  //   // 預先建立的假資料
  //   let todos = [
  //     { id: 0, text: '吃飯' },
  //     { id: 1, text: '上學' },
  //     { id: 2, text: '睡覺' }
  //   ];
  //   this.state = {
  //     // 將假資料指定給 state
  //     todos: todos,
  //     // 設計下一個建立的待辦事項的 id
  //     startId: 3
  //   };
  // }

  // // 新增待辦事項
  // createTodo(text) {
  //   this.setState({
  //     // ...後方必須接著一個陣列，表示把該陣列展開成個別的值，在這裡的例子就是把 this.state.todos 陣列展開，後面再放入我們新增的值
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: this.state.startId,
  //         text: text
  //       }
  //     ],
  //     // 新增的同時，設定下一次新增的待辦事項 id
  //     startId: this.state.startId + 1
  //   });
  // }

  // // 刪除待辦事項
  // removeTodo(id) {
  //   this.setState({
  //     // filter 可以迭代一個陣列，return 符合後方條件的新陣列
  //     todos: this.state.todos.filter(todo => {
  //       return todo.id !== id;
  //     })
  //   });
  // }

  render() {
    return (
      <Provider store={store}>
        <div>
          {/* import 進來的 Title 組件 */}
          <Title
          // 將 state 中的 todos 陣列傳給 Title 組件
          // todos={this.state.todos}
          />
          {/* import 進來的 TodoForm 組件 */}
          <TodoForm
          // 將這個 TodoList 中的 createTodo function 傳給 TodoForm 組件
          // createTodo={text => this.createTodo(text)}
          />
          {/* import 進來的 List 組件 */}
          <List
          // 將 state 中的 todos 陣列傳給 List 組件
          // todos={this.state.todos}
          // 將這個 TodoList 中的 removeTodo function 傳給 TodoForm 組件
          // remove={id => this.removeTodo(id)}
          />
        </div>
      </Provider>
    );
  }
}

export default TodoList;
