import React, { Component } from 'react'
// 輸入 connect ，讓這個組件能夠回傳被 connect 重新包裹過的新組件
import { connect } from "react-redux";
import { removeTodo } from "../actions";

class List extends Component {
  render() {
    return (
      <ol>
        {
          // 現在的 this.props.todos 已經不再是由 app.js 透過 props 傳遞的資料，而是直接從 store 中取得的
          this.props.todos.map((todo, index) => {
            return (
              <li 
                key={todo.id}
                // 這裡的 removeTodo 則是底下 mapDispatchToProps 中屬性名為 removeTodo 的 method
                onClick={() => this.props.removeTodo(todo.id)}
              >
                {todo.text}
              </li>
            )
          })
        }
      </ol>
    )
  }
}

// 提供一個 method 讓我們能夠取得 store 裡的 state 資料
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// 提供一個 method 讓我們能夠取得 actions 裡的 method ，並且能夠 dispatch 讓 reducer 知道他應該處理
const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => {
      // 這裡的 removeTodo 為我們在 action 裡頭定義的 removeTodo method
      dispatch(removeTodo(id))
    }
  }
}

// 經過包裹，就能在該組建裡面調用 store 裡的 state，與 action 中的 method
export default connect(mapStateToProps, mapDispatchToProps)(List)
