import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some juice'},
      {id: 2, content: 'clean house'}
    ]
  }
  render () {
    return (
      <div>
      <h1>Todo's</h1>
      <Todos todos={this.state.todos}/>
    </div>
    )   
  }
}


export default App;
