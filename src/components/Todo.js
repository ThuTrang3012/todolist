import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      delete: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.toggleComplete(e.target.value);
      this.setState((state) => ({ open: !state.open }));
    }
  };
 
  render() {
    return (
      <li onMouseEnter={()=> {
        this.setState({delete: true});
      }}
      onMouseLeave={()=>
      {
        this.setState({delete: false});
      }}
      >
        <div  className="first"
            style={{
              textDecoration: this.props.todo.complete ? "line-through" : "",     
            }}>
                <div>
                  <input
                  type="checkbox"
                  checked={this.props.todo.complete === true ? true : false}
                  onClick={() => this.props.toggleComplete()}
                  />
                </div> 
                <div style={{width: "100%",display:"flex",marginLeft:"20px"}} onDoubleClick={() => {
                  this.setState((state) => ({ open: !state.open }))
                }}>
                
                  {this.state.open ? (
                      <input
                        className="input-edit"
                        defaultValue={this.props.todo.text}
                        onKeyDown={this.handleEnter}
                        autoFocus
                        onChange={() => {
                          console.log('bacs')
                        }}
                      />
                    ) : 
                      this.props.todo.text
                    }
                </div>
               
               

              {/* <div style={{justifyContent: "end"}}>
                <button className="btn-close" onClick={this.props.onDelete}>x</button>
              </div> */}
          </div>   
          {this.state.delete ? ( <button className="btn-close" onClick={this.props.onDelete}>x</button>) : null} 
        
      </li>
    );
  }
}

export default Todo;