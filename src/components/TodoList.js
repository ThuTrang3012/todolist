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
<<<<<<< HEAD
  }
};
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoToShow: "all",
      toggleAllComplete: true,
    };
  }

  componentDidMount = () => {
=======
  }
};

const TodoList = (props) => {
  
  const [todos, setTodos] = useState([])
  const [toggleAllComplete,settoggleAllComplete] = useState(true)
  const [todoToShow, setTodoToShow] = useState('all')
  useEffect( () => {
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      setTodos(savedTodos);
    } else {
      console.log("No todos");
    }
<<<<<<< HEAD
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.todos?.length !== prevState.todo?.length) {
      if (this.state.todos.length === 0) {
        localStorage.removeItem("todos");
      } else localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
=======
    
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
 
 
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da

 
  const addTodo= text => {
    const newTodo = {    
      id: uuidv4(),    
      text: text,    
      completed: false  
    };
    setTodos([...todos, newTodo])
  };
<<<<<<< HEAD
  // getEditTodo = todo => {
  //   this.setState(state => ({
  //     todos: [todo, ...state.todos]
  //   }));
  // };
  toggleComplete = (id, text, editInput = false) => {
    const arr = this.state.todos.map((todo) => {
=======

  const toggleComplete = (id, text, editInput = false) => {
    let arr = todos.map((todo) => {
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
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
<<<<<<< HEAD
    });

    this.setState((state) => ({
      todos: arr,
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
=======
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
    });
    setTodos(arr);
  };

  const updateTodoToShow = (s) => {
     setTodoToShow(s);
  };
<<<<<<< HEAD
  handleToggleAll = () =>
    this.setState((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        complete: state.toggleAllComplete,
      })),
      toggleAllComplete: !state.toggleAllComplete,
    }));

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
=======
  
  const handleDeleteTodo = (id) => {
    const arr = [...todos].filter(todo => todo.id !== id);
    setTodos(arr);
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
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

<<<<<<< HEAD
  render() {
    let todos = filterItem(this.state.todos, this.state.todoToShow);
=======
  const removeAllTodosThatAreComplete = () => {
    const arr = [...todos].filter(todo => !todo.complete);
    setTodos(arr);
     
  };

>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
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
<<<<<<< HEAD
                    this.toggleComplete(todo.id, value || todo.text, true)
                  }
                  toggleCompleteChecked={(value) =>
                    this.toggleComplete(todo.id, value || todo.text)
=======
                    toggleComplete(todo.id, value || todo.text, true)
                  }
                  toggleCompleteChecked={(value) =>
                    toggleComplete(todo.id, value || todo.text)
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
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
<<<<<<< HEAD
              {this.state.todos.filter((todo) => !todo.complete).length}
=======
              {[...todos].filter((todo) => !todo.complete).length}
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
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
<<<<<<< HEAD
}
export default TodoList;
=======

export default TodoList;
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
