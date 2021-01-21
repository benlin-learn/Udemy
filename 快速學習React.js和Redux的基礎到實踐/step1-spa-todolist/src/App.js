import React, { Component } from 'react';

import AllGroupsTabContent from './components/AllGroupsTabContent';
import GroupTabContent from './components/GroupTabContent';
import GroupSwitch from './components/GroupSwitch';

class App extends Component {

  constructor() {
    super();
    // 待辦事項清單
    let todos = [
      { text: '買牛奶', groupid: 'living' },
      { text: '繳電話費', groupid: 'living' },
      { text: '去銀行', groupid: 'living' },
      { text: '內部會議', groupid: 'work' },
      { text: '回信', groupid: 'work' },
      { text: '拜訪客戶', groupid: 'work' },
      { text: '家長會', groupid: 'family' },
    ];
    // 待辦事項分類
    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' }
    ];

    this.state = {
      todos: todos,
      groups: groups,
      // 目前選取中的分類
      activeGroupId: undefined,
    }
  }

  createTodo(newtodotext, groupid) {

    const newtodo = {
      text: newtodotext,
      groupid: groupid || this.state.activeGroupId
    }

    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  removeTodo(removingtodo) {
    const newtodos = this.state.todos.filter((todo, index)=> {
      return !(todo.groupid == removingtodo.groupid && 
        removingtodo.text === todo.text)
    });
    this.setState({
      todos: newtodos
    })
  }

  switchGroup(groupid) {
    this.setState({
      activeGroupId: groupid
    })
  }


  render() {
    // 依據選取中的分類群組代碼過濾待辦事項清單，未選取就不過濾視作全部
    const todos = this.state.activeGroupId ? this.state.todos.filter((todo, index) => {
      return todo.groupid === this.state.activeGroupId;
    }) : this.state.todos;

    // 若有選取分類渠組，則顯示群組分類元件，若沒有選取，則顯示全部待辦事項分類
    const tabContent = this.state.activeGroupId ? 
      (<GroupTabContent 
        todos={todos} 
        createTodo={(newtodo, groupid) => this.createTodo(newtodo, groupid)} 
        removeTodo={(todo) => this.removeTodo(todo)} 
      />) 
      : 
      (<AllGroupsTabContent 
        todos={todos} 
        removeTodo={(todo) => this.removeTodo(todo)} 
      />);

    return (
      <div>
        <GroupSwitch
          groups={this.state.groups}
          activeGroupId={this.state.activeGroupId}
          switchGroup={(groupid) => this.switchGroup(groupid)}
        />
        <div>
          {tabContent}
        </div>
        
      </div>
    );
  }
}

export default App;
