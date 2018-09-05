import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './css/index.css';

class App extends Component {
  constructor() {
    super()
    const todos = [
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
    ];
    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false
    })

    this.setState({ todos });
    this.setState({ countTodo: countTodo + 1 }) ;

    e.target.title.value = '';
    e.target.desc.value = '';

  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;
    this.setState({ todos });
  }

  deleteTodo(clickTodo) {
    const todos = this.state.todos.slice();
    todos.splice(clickTodo.id - 1, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>ReactでToDoアプリ！</h1>
        </header>
        <div className="main-container">
          <Form handleSubmit={this.handleSubmit.bind(this)} />
          <TodoList todos={this.state.todos} setTodoStatus={this.setTodoStatus.bind(this)} deleteTodo={this.deleteTodo.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;
