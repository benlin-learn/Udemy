import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

// 待辦事項清單列表
class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input = undefined;

    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          className="form-control col-md-12"
          ref={node => {
            input = node;
          }}
        />
        <br />
      </form>
    );
  }
}

// Connect時候需要轉譯的Store action props
const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
