import React, { Component } from 'react';
import { createTodo } from '../actions';
import { connect } from 'react-redux';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      // 預設 input 內容為空字串
      text: ''
    };
  }
  // 可使用箭頭函式取得 this ，若不使用，則 onClick 就要使用箭頭函式
  createTodo = () => {
    // 如果 input 沒有內容，則不執行 createTodo
    if (!this.state.text) return;

    // 調用從上層元件傳來的 createTodo 函式
    this.props.createTodo(this.state.text);

    // 將 input 內容改變為初始狀態
    this.setState({
      text: ''
    });
  };

  onInputChange(e) {
    // 處理 input 的 onChange 事件，將輸入的內容存在 state 中
    this.setState({
      text: e.target.value
    });
  }

  handleKeyDown(e) {
    // 判斷如果 input 有值，而且按下 enter 按鈕，則執行 createTodo
    if (e.target.value && e.keyCode === 13) this.createTodo();

    // 也可以用短路求值
    // e.target.value && e.keyCode === 13 && this.createTodo()
  }

  render() {
    return (
      <div>
        <input
          type='text'
          // 監聽 input 的 change 事件
          onChange={e => this.onInputChange(e)}
          // 將 state 儲存的 input 值進行雙向綁定，也就是任一個地方改動，另一個也會跟著改動
          value={this.state.text}
          // 監聽 input 的 keyDown 事件
          onKeyDown={e => this.handleKeyDown(e)}
        />
        <button
          onClick={this.createTodo}
          // 宣告時若不使用箭頭函式，可以這樣寫
          // onClick={() => this.createTodo}
        >
          新增
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createTodo: text => {
      dispatch(createTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
