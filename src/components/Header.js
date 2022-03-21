import React, { useState } from "react"

<<<<<<< HEAD
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      text: "",
    };
  }
=======
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da

const Header = (props) => {
  const [inputText, setInputText] = useState
  ( 
    { 
      select: false,
      text: ""
    }
  )

  const handleChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  
      props.onSubmit(inputText.text);
      setInputText({
        text: "",
        select: false
      })
    
  };
   
      return (
        <form onSubmit={handleSubmit} className="todo__form">
          <h1>todos</h1>
          <div className="input-wrapper">
          {props.todos.length > 0 && (
            <input className="toggle-all" type="hidden" />
          )}
          <label
            htmlFor="toggle-all"
            onClick={props.handleToggleAll}
          ></label>
            <input
              className="new-todo"
              name="text"
              value={inputText.text}
              autoFocus
              onChange={handleChange}
              placeholder="What needs to be done?"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmit(event);
                }
              }}
            />
          </div>
        </form>
      );
        
}
<<<<<<< HEAD
export default Header;
=======

export default Header;
>>>>>>> e7f1505ef1bc921e62179ed16ac847f2fe49d2da
