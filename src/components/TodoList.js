import React from "react";
import Todo from "./Todo";
import Header from "./Header";

class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
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
  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
  // getEditTodo = todo => {
  //   this.setState(state => ({
  //     todos: [todo, ...state.todos]
  //   }));
  // };
  toggleComplete = (id, text) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.edit && (todo.text = text);
          todo.edit = !todo.edit && todo.complete;

          // suppose to update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
    console.log("todos ", this.state.todos);
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };
  handleToggleAll = () =>
    this.setState((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        complete: state.toggleAllComplete,
      })),
      toggleAllComplete: !state.toggleAllComplete,
    }));
  handleEdit = (id) => {};
  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="todoapp">
        <Header
          onSubmit={this.addTodo}
          handleToggleAll={this.handleToggleAll}
          todos={todos}
        />
        {todos.length !== 0 && (
          <section className="main">
            <ul className="todo-list">
              {todos.map((todo) => (
                <Todo
                  key={todo.id}
                  toggleComplete={(value) =>
                    this.toggleComplete(todo.id, value || todo.text)
                  }
                  onDelete={() => this.handleDeleteTodo(todo.id)}
                  todo={todo}
                  // onKeyDown={(event) => {
                  //   if (event.key === 'Enter') {
                  //     this.handleEdit(event)
                  //   }
                  // }}
                />
              ))}
            </ul>
          </section>
        )}

        {localStorage.getItem("todos") && (
          <div className="footer">
            <div>
              todos left:{" "}
              {this.state.todos.filter((todo) => !todo.complete).length}
            </div>
            <button onClick={() => this.updateTodoToShow("all")}>all</button>
            <button onClick={() => this.updateTodoToShow("active")}>
              active
            </button>
            <button onClick={() => this.updateTodoToShow("complete")}>
              complete
            </button>
            {this.state.todos.some((todo) => todo.complete) ? (
              <button onClick={this.removeAllTodosThatAreComplete}>
                {" "}
                remove all
              </button>
            ) : null}

            {/* toggle all : {`${this.state.toggleAllComplete}`}
          </input> */}
          </div>
        )}
      </div>
    );
  }
}
export default TodoList;
