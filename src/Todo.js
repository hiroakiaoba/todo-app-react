import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone';
    const link = this.props.done ? '元に戻す' : '完了!';
    const id = this.props.done ? '' : this.props.id;
    const title = this.props.done ? '' : this.props.title;
    const desc = this.props.done ? '' : this.props.desc;
    const deleteButton = this.props.done ? '削除' : '';
    return (
      <div className={className}>
        <span>{id}  </span>
        <span className="todo-title">{title} </span>
        <a className="btn" href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props) }}>{link}</a>
        <a className="btn" href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodo(this.props)}}>{deleteButton}</a>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Todo;
