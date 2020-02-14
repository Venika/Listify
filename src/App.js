import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todo from './components/Todo';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todo: [
      {
        id: uuid.v4(),
        title: 'Create a webapp',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Pack lunch',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Clean up the room',
        completed: false
      },
    ]
  }


  //Toggle complete task
  markComplete = (id) => {
    this.setState({ todo: this.state.todo.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
}


  //Delete tasks
  delTodo = (id) => {
    this.setState({todo: [...this.state.todo.filter(todo =>todo.id !== id)] });
}

//Add tasks
  addTodo = (title) => {

    const newTodo= {
      id:uuid.v4(),
      title,
      completed: false,
    }

    this.setState({todo: [...this.state.todo, newTodo] });

  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
          <Route exact path="/" render= { props => (
            <React.Fragment>
              <AddTodo addTodo = {this.addTodo}/>
              <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )} />
          <Route path="/about" component = {About} />
          </div>
        </div>
       </Router>
    );
  }
}

export default App;
