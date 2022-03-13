import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.toggleComplete(e.target.value);
    }
    this.setState((state) => ({ open: !state.open }));
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.state.open ? (
          <input
            defaultValue={this.props.todo.text}
            onKeyDown={this.handleEnter}
            autoFocus
          />
        ) : (
          <div
            style={{
              marginRight: "50px",
              textDecoration: this.props.todo.complete ? "line-through" : "",
            }}
            onClick={() => this.props.toggleComplete()}
            onDoubleClick={() =>
              this.setState((state) => ({ open: !state.open }))
            }
          >
            {this.props.todo.text}
          </div>
        )}

        <button onClick={this.props.onDelete}>x</button>
      </div>
    );
  }
}

export default Todo;
