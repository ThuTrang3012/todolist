// import React, { Component } from "react";
// import "./App.css";
// import TodoList from "./components/TodoList";
// import './css/Todo.css'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="App">
//         <TodoList />
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

import './css/Todo.css'

function App (){
 
    return (
      <div className="App">
        <TodoList />
   
      </div>
    );
  
}

export default App;