import React from "react";
import Todo from "./Todo";
import Header from "./Header";



class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };
  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };
  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
    localStorage.setItem("todo", JSON.stringify(this.state.todos));
  };
  
  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div className="todoapp">
        <Header onSubmit={this.addTodo} />
    
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div className="footer">
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        {this.state.todos.some(todo => todo.complete) ? 
        (
          <button onClick={this.removeAllTodosThatAreComplete}
          >  remove all 
          </button>
        ) : null}
          <button
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            toggle all : {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
export default TodoList;