import React, { Component } from 'react';
import { connect } from 'react-redux';
class Title extends Component {
  render() {
    // 接收來自上層元件的 todos 陣列
    const { todos } = this.props;
    return (
      // 將陣列長度顯示在標題後方
      <h1>待辦事項清單 ({todos.length}) </h1>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(mapStateToProps)(Title);
