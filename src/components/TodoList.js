import React from "react";
import Todo from "./Todo";
import Header from "./Header";

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
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("No todos");
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.todos?.length !== prevState.todo?.length) {
      if (this.state.todos.length === 0) {
        localStorage.removeItem("todos");
      } else localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };
  // getEditTodo = todo => {
  //   this.setState(state => ({
  //     todos: [todo, ...state.todos]
  //   }));
  // };
  toggleComplete = (id, text, editInput = false) => {
    const arr = this.state.todos.map((todo) => {
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

    this.setState((state) => ({
      todos: arr,
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

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = filterItem(this.state.todos, this.state.todoToShow);
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
                    this.toggleComplete(todo.id, value || todo.text, true)
                  }
                  toggleCompleteChecked={(value) =>
                    this.toggleComplete(todo.id, value || todo.text)
                  }
                  onDelete={() => this.handleDeleteTodo(todo.id)}
                  todo={todo}
                />
              ))}
            </ul>
          </section>
        )}

        {this.state.todos.length > 0 && (
          <div className="footer">
            <div>
              Todos left:{" "}
              {this.state.todos.filter((todo) => !todo.complete).length}
            </div>
            <div>
              <button onClick={() => this.updateTodoToShow("all")}>All</button>
              <button onClick={() => this.updateTodoToShow("active")}>
                Active
              </button>
              <button onClick={() => this.updateTodoToShow("complete")}>
                Complete
              </button>
              {this.state.todos.some((todo) => todo.complete) ? (
                <button onClick={this.removeAllTodosThatAreComplete}>
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
}
export default TodoList;
