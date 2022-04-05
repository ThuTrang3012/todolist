// import React from "react";
// import { v4 as uuidv4 } from "uuid";

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: uuidv4(),
//       text: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSubmit({
//       id: uuidv4(),
//       text: this.state.text,
//       complete: false,
//     });
//     this.setState({
//       text: "",
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="todo__form">
//         <h1>todos</h1>
//         <div className="input-wrapper">
//           {this.props.todos.length > 0 && (
//             <input className="toggle-all" type="hidden" />
//           )}
//           <label
//             htmlFor="toggle-all"
//             onClick={this.props.handleToggleAll}
//           ></label>
//           <input
//             className="new-todo"
//             name="text"
//             value={this.state.text}
//             autoFocus
//             onChange={this.handleChange}
//             placeholder="What needs to be done?"
//             onKeyDown={(event) => {
//               if (event.key === "Enter") {
//                 this.handleSubmit(event);
//               }
//             }}
//           />
//         </div>
//       </form>
//     );
//   }
// }
// export default Header;

// import React, { useState } from "react"


// const Header = (props) => {
//   const [inputText, setInputText] = useState
//   ( 
//     { 
//       select: false,
//       text: ""
//     }
//   )

//   const handleChange = (event) => {
//     setInputText({
//       ...inputText,
//       [event.target.name]: event.target.value,
//     })
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
  
//       props.onSubmit(inputText.text);
//       setInputText({
//         text: "",
//         select: false
//       })
    
//   };
   
//       return (
//         <form onSubmit={handleSubmit} className="todo__form">
//           <h1>todos</h1>
//           <div className="input-wrapper">
//           {props.todos.length > 0 && (
//             <input className="toggle-all" type="hidden" />
//           )}
//           <label
//             htmlFor="toggle-all"
//             onClick={props.handleToggleAll}
//           ></label>
//             <input
//               className="new-todo"
//               name="text"
//               value={inputText.text}
//               autoFocus
//               onChange={handleChange}
//               placeholder="What needs to be done?"
//               onKeyDown={(event) => {
//                 if (event.key === "Enter") {
//                   handleSubmit(event);
//                 }
//               }}
//             />
//           </div>
//         </form>
//       );
        
// }

// export default Header;

import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../redux/actions";

const Header = (props) => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log('handleChange', event.target.value);
    setInputText(event.target.value);
  };
  const handleSubmit = (event) => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: inputText,
        completed: false,
      })
    );

    setInputText('');
    
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

export default Header;

