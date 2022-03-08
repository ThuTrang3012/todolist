import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.props.todo.edit
          ? <input defaultValue={this.props.todo.text} onClick={(event) => this.props.toggleComplete(event.target.value)} autoFocus />
          : <div
            style={{
              marginRight: "50px", textDecoration: this.props.todo.complete ? "line-through" : ""
            }}
            onClick={() => this.props.toggleComplete()}
          >
            {this.props.todo.text}
          </div>}

        <button onClick={this.props.onDelete}>x</button>

      </div>
    )
  }
}

export default Todo;
