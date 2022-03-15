import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

import './css/Todo.css'

class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <TodoList />
   
      </div>
    );
  }
}

export default App;
