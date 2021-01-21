import React, { Component } from 'react'
// 從 action 中輸入我們定義好的 actionCreater
import { createTodo } from "../actions";
// 輸入 connect ，讓這個組件能夠回傳被 connect 重新包裹過的新組件
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.createTodo = this.createTodo.bind(this)
  }
  createTodo() {
    if (!this.state.text) {
      return
    }
    // 這裡的 createTodo 則是底下 mapDispatchToProps 中屬性名為 createTodo 的 method
    this.props.createTodo(this.state.text)
    this.setState({
      text: ''
    })
  }
  // 由於這兩個 method 都是更改這個組件的 state 所以不需要修改
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
  handleKeyDown(event) {
    event.keyCode === 13 && this.createTodo()
  }
  render() {
    return (
      <div>
        <input 
          onChange={event => this.handleChange(event)}
          onKeyDown={event => this.handleKeyDown(event)}
          value={this.state.text}
        />
        <button
          onClick={this.createTodo}
        >新增</button>
      </div>
    )
  }
}

// 提供一個 method 讓我們能夠取得 actions 裡的 method ，並且能夠 dispatch 讓 reducer 知道他應該處理
const mapDispatchToProps = dispatch => {
  return {
    // 將這個 method 命名，讓我們能用 this.props 調用
    createTodo: text => {
      // 這裡的 createTodo 為我們在 action 裡頭定義的 createTodo method
      dispatch(createTodo(text))
    }
  }
}

// 如果沒有 mapStateToProps, 第一個參數要傳入 null
export default connect(null, mapDispatchToProps)(Form)