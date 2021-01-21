import React, { Component } from 'react';

import { connect } from 'react-redux';
import { removeTodo } from '../actions';

class List extends Component {
  render() {
    // 接收來自上層元件的 todos 陣列
    const { todos } = this.props;
    return (
      <ol>
        {/* 用 array 的 map 方法將陣列元素全部印出來 */}
        {todos.map((todo, idx) => {
          return (
            <li
              key={todo.id}
              // 點擊調用來自上層元件提供的 remove 函式
              onClick={() => this.props.removeTodo(todo.id)}
            >
              {todo.text}
            </li>
          );
        })}
      </ol>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
