import React from "react";
import { v4 as uuidv4 } from 'uuid';

class Header extends React.Component {
    constructor() {
    super();
    this.state = {
      id: uuidv4(),
      text: ""
    };
    }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

handleSubmit = event => {
  event.preventDefault();
  this.props.onSubmit({
    id: uuidv4(),
    text: this.state.text,
    complete: false
  });
  this.setState({
    text: ""
  });
};
 

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1>todos</h1>
        <input
          className="new-todo"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          onKeyDown={(event) => {
            if (event.key === 'Enter') 
            {
                this.handleSubmit(event)
            }
        }}
        />
       </form>
       
    );
    }
}
export default Header;