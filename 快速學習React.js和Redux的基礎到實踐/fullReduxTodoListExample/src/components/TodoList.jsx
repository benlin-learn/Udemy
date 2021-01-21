import React, { Component } from 'react';

import { SimpleList } from '../StyledComponents';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo } from '../actions';

// 待辦事項清單列表
class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Map through the todos
    const todoNode = this.props.todos.map(todo => {
      return <Todo todo={todo} key={todo.id} remove={this.props.remove} />;
    });

    return (
      <div>
        <SimpleList>
          {todoNode}
        </SimpleList>
      </div>
    );
  }
}

// Connect時候需要轉譯的Store state props
const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error
  };
};

// Connect時候需要轉譯的Store action props
const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
