import React, {useState} from "react";

const Todo = (props) => {
  const [Open,setOpen] = useState(false)
  const [Delete,setDelete] = useState(false)

  // this.handleEnter = this.handleEnter.bind(this);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      props.toggleComplete(e.target.value);
      setOpen(!Open)
    }
  };

<<<<<<< HEAD
  render() {
    return (
      <li
        onMouseEnter={() => {
          this.setState({ delete: true });
        }}
        onMouseLeave={() => {
          this.setState({ open: false });
          this.setState({ delete: false });
=======
  
    return (
      <li
        onMouseEnter={() => {
          setDelete(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
          setDelete(false);
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
        }}
      >
        <div
          className="first"
          style={{
<<<<<<< HEAD
            textDecoration: this.props.todo.complete ? "line-through" : "",
=======
            textDecoration: props.todo.complete ? "line-through" : "",
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
          }}
        >
          <div>
            <input
              type="checkbox"
<<<<<<< HEAD
              checked={this.props.todo.complete === true ? true : false}
              onClick={() => this.props.toggleCompleteChecked()}
=======
              checked={props.todo.complete === true ? true : false}
              onClick={() => props.toggleCompleteChecked()}
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
              onChange={() => {}}
            />
          </div>
          <div
            style={{ width: "100%", display: "flex", marginLeft: "20px" }}
            onDoubleClick={() => {
<<<<<<< HEAD
              this.setState((state) => ({ open: !state.open }));
            }}
          >
            {this.state.open ? (
              <input
                className="input-edit"
                defaultValue={this.props.todo.text}
                onKeyDown={this.handleEnter}
=======
              setOpen(!Open);
            }}
          >
            {Open? (
              <input
                className="input-edit"
                defaultValue={props.todo.text}
                onKeyDown={handleEnter}
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
                autoFocus
                onChange={() => {
                  console.log("bacs");
                }}
              />
            ) : (
<<<<<<< HEAD
              this.props.todo.text
=======
              props.todo.text
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
            )}
          </div>

          {/* <div style={{justifyContent: "end"}}>
                <button className="btn-close" onClick={this.props.onDelete}>x</button>
              </div> */}
        </div>
<<<<<<< HEAD
        {this.state.delete ? (
          <button className="btn-close" onClick={this.props.onDelete}>
=======
        {Delete ? (
          <button className="btn-close" onClick={props.onDelete}>
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
            x
          </button>
        ) : null}
      </li>
    );
  }


export default Todo;
