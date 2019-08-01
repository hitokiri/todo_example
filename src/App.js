import React, { Component } from 'react'
import TodoList from './modules/todo';

export default class App extends Component {

  items = [ {
    text: 'Buy grocery', done: true },
   { text: 'Play guitar', done: false },
   { text: 'Romantic dinner', done: false }
];
  render() {
    return (
      <div>
        <TodoList
          items={this.items}
          onItemClick={(item, event) => { console.log(item, event) }}
        />;
      </div>
    )
  }
}

