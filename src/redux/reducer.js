const initState = {
    todoList: [
        {id: 1, name:'abc', completed:false},
        {id: 2, name:'abc', completed:true},
    ],
    filter: {
        status: 'ALL',
    }
}
const rootReducer = (state=initState, action) =>{
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {id: 3, name:'abc', completed:false},
                ]
            }
            default:
                return state;
    }
}

export default rootReducer;