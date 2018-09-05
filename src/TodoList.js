import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map( todo =>
      <Todo key={todo.id} {...todo} setTodoStatus={this.props.setTodoStatus} deleteTodo={this.props.deleteTodo} />
    )

    return (
      <div>
        {todos}
      </div>
    )
  }
}

export default TodoList;
