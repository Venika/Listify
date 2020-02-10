import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {


  render() {
    return this.props.todo.map((todolist) => (
        <TodoItem key = {todolist.id} todo = {todolist} markComplete={this.markComplete}/>
    ))
  }
}

//PropTypes
Todo.propTypes = {
    todo: PropTypes.array.isRequired
}

export default Todo;
