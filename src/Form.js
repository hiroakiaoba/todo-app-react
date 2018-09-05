import React ,{ Component } from 'react';
import './css/form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="タイトル *必須" defaultValue="reactの勉強" /><br />
          <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作成中"></textarea><br />
          <button type="submit">todoを作成</button>
        </form>
      </div>
    )
  }
}

export default Form;
