import React, { Component } from 'react';
import { TodoBanner } from "./components/TodoBanner"; 
import { TodoCreator } from "./components/TodoCreator"; 
import { TodoRow } from "./components/TodoRow"; 
// import logo from './logo.svg';
// import './App.css';
export default class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        userName: "Adam",
        todoItems: [{ action: "Buy Flowers", done: false },
                    { action: "Get Shoes", done: false },
                    { action: "Collect Tickets", done: true },
                    { action: "Call Joe", done: false }],
    }
  }


  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value});

  }
  // createNewTodo = () => {
  //   if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
  //               this.setState({
  //                 todoItems: [ ...this.state.todoItems,
  //                   {action: this.state.newItemText, done: false}],
  //                 newItemText: "",
  //               });
  //             }
  // }
  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
        this.setState({
            todoItems: [...this.state.todoItems, { action: task, done: false }]
        });
    }
}
 
  

  toggleTodo = (todo) => this.setState({ todoItems:
      this.state.todoItems.map(item => item.action === todo.action
          ? { ...item, done: !item.done} : item) });
  
  todoTableRows = () => this.state.todoItems.map(item =>
       <TodoRow key={ item.action } 
           item={ item } 
           callback={ this.toggleTodo } 
       />
  )
  // changeStateData = () => {
  //   this.setState ({
  //     userName: this.state.userName === "Adam" ? "Bob" : "Adam"
  //   })
  // }
    render = () =>
    <div>
    <TodoBanner name={ this.state.userName } tasks={this.state.todoItems } />
    <div className="container-fluid">
        <TodoCreator callback={ this.createNewTodo } />
        <table className="table table-striped table-bordered">
            <thead>
                <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{ this.todoTableRows() }</tbody>
        </table>
    </div>
    </div>
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
