import React, { Component } from 'react';
import TodoList from './TodoList';
import './css/index.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Redux始めました",
          done: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>ReactでToDoアプリ！</h1>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
