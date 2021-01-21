import React, { Component } from 'react';

import { connect } from 'react-redux';

// 待辦事項清單列表
class Title extends Component {
  constructor(props) {
    super(props);

  }

// {this.props.isFetching ? '載入中' : this.props.todos.length}
  render() {
    return (
      <div>
        <div>
          <h1>
            to-do({getErrorMsg(this.props )})
          </h1>
        </div>
      </div>
    );
  }
}

// Connect時候需要轉譯的Store state props

const getErrorMsg = props => {
  if(!props.isFetching){
 

    switch(props.error) {
          case 401:
            return '蛤???';
          case 404:
            return '找不到這頁耶QQ';
          case 500:
            return '內部伺服器錯誤><';
          case 200:
            return props.todos.length;
          default:
            return 'TypeError';
         }

         // if寫法
      // if(props.error=='401'){
      //   return '蛤???';
      // }else if(props.error=='404'){
      //   return '找不到這頁耶QQ';
      // }else if(props.error=='500'){
      //   return '內部伺服器錯誤><';
      // }else if(props.error=='200'){
      //   return props.todos.length;
      // }else{
      //   return 'TypeError';
      // }
  }else{
      return '載入中';
  }
 
};

const mapStateToProps = state => {
  return {
    todos: state.todos,
    isFetching: state.isFetchingTodoList,
    error: state.error
  };

};

export default connect(mapStateToProps)(Title);
