import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone';
    const link = this.props.done ? '元に戻す' : '完了!';
    const id = this.props.done ? '' : this.props.id;
    const title = this.props.done ? '' : this.props.title;
    const desc = this.props.done ? '' : this.props.desc;
    const deleteButton = this.props.done ? <button>削除</button> : '';
    return (
      <li className={className}>
        <span>{id}</span>
        <span>{title} </span>
        <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props) }}>{link}</a>
        {deleteButton}
        <p>{desc}</p>
      </li>
    );
  }
}

export default Todo;
