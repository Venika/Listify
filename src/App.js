import React, { Component } from 'react';
import Todo from './components/Todo'

import './App.css';

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Create a webapp',
        completed: false
      },
      {
        id: 2,
        title: 'Pack lunch',
        completed: true
      },
      {
        id: 3,
        title: 'Clean up the room',
        completed: false
      },
    ]
  }
  render() {

    return (
      <div className="App">
          <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
