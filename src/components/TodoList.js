import React, {useState, useEffect} from "react";
import Todo from "./Todo";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

const filterItem = (items = [], status = "") => {
  switch (status) {
    case "all":
      return items;
    case "active":
      return items.filter((todo) => !todo.complete);
    case "complete":
      return items.filter((todo) => todo.complete);
    default:
      return items;
  }
};

const TodoList = (props) => {
  
  const [todos, setTodos] = useState([])
  const [toggleAllComplete,settoggleAllComplete] = useState(true)
  const [todoToShow, setTodoToShow] = useState('all')
  useEffect( () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      setTodos(savedTodos);
    } else {
      console.log("No todos");
    }
    
  },[]);
  
  // componentDidMount = () => {
  //   const todos = localStorage.getItem("todos");
  //   if (todos) {
  //     const savedTodos = JSON.parse(todos);
  //     this.setState({ todos: savedTodos });
  //   } else {
  //     console.log("No todos");
  //   }
  // };
  
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.todos?.length !== prevState.todo?.length) {
  //     if (this.state.todos.length === 0) {
  //       localStorage.removeItem("todos");
  //     } else localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  // }
 
 

 
  const addTodo= text => {
    const newTodo = {    
      id: uuidv4(),    
      text: text,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };

  const toggleComplete = (id, text, editInput = false) => {
    let arr = todos.map((todo) => {
      if (todo.id === id) {
        if (editInput) {
          return {
            ...todo,
            edit: !todo.edit && todo.complete,
            text: text,
            complete: todo.complete,
          };
        } else
          return {
            ...todo,
            edit: !todo.edit && todo.complete,
            text: text,
            complete: !todo.complete,
          };
      } else {
        return todo;
      }
    });
    setTodos(arr);
  };

  const updateTodoToShow = (s) => {
     setTodoToShow(s);
  };
  
  const handleDeleteTodo = (id) => {
    const arr = [...todos].filter(todo => todo.id !== id);
    setTodos(arr);
  };
  // const handleToggleAll = () =>
  // { 
  //   const arr = [...todos].map((todo) => ({ 
  //     ...todo, 
  //     complete: toggleAllComplete, 
  //   })) 
  //   settoggleAllComplete(arr); 
  // }; 
  const handleToggleAll = (id) => { 
    settoggleAllComplete( todos.map((todo) => 
    ({ ...todo, complete: toggleAllComplete, }))
     ) }

  const removeAllTodosThatAreComplete = () => {
    const arr = [...todos].filter(todo => !todo.complete);
    setTodos(arr);
     
  };

    return (
      <div className="todoapp">
        <Header
          onSubmit={addTodo}
          handleToggleAll={handleToggleAll}
          todos={todos}
        />

        {todos.length !== 0 && (
          <section className="main">
            <ul className="todo-list">
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  toggleComplete={(value) =>
                    toggleComplete(todo.id, value || todo.text, true)
                  }
                  toggleCompleteChecked={(value) =>
                    toggleComplete(todo.id, value || todo.text)
                  }
                  onDelete={() => handleDeleteTodo(todo.id)}
                  todo={todo}
                />
              ))}
            </ul>
          </section>
        )}

        {[...todos].length > 0 && (
          <div className="footer">
            <div>
              Todos left:{" "}
              {[...todos].filter((todo) => !todo.complete).length}
            </div>
            <div>
              <button onClick={() => updateTodoToShow("all")}>All</button>
              <button onClick={() => updateTodoToShow("active")}>Active</button>
              <button onClick={() => updateTodoToShow("complete")}>Complete</button>
              {[...todos].some((todo) => todo.complete) ? (
                <button onClick={removeAllTodosThatAreComplete}>
                  {" "}
                  Remove all
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    );
  
  }

export default TodoList;