import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  render() {
    return this.props.todo.map((todolist) => (
        <TodoItem />
    ))
  }
}

export default Todo;
