import { useState, useReducer } from "react"
import { ADD, EDIT, DELETE } from "./Action"
// import TodoList from "./todo-list"
import TodoList from "./TodoList"
const Todo = () => {
    const [todo, setTodo] = useState({value:"", order:""})
    const [isAdd, setisAdd] = useState(true)
    const reducer = (state, action) => {
        switch (action.type) {
            case ADD:
                const updateState=[...state, { value: todo.value, order: state.length + 1 }]
                setTodo({value:"", order:""})
                return updateState
            case EDIT:
                const updatedState = [...state]

                if(isAdd){
                    setisAdd(false)
                    setTodo(action.payload)
                    // debugger

                }
                else{
                    updatedState.forEach((st)=>{
                        // debugger;
                        if(st.order === todo.order){
                            st.value = todo.value
                        }

                    })
                    setisAdd(true)
                    setTodo({value:"", order:""})
                }
               

                return updatedState
            case DELETE:
                // debugger;
                let newState = state.filter((st)=>{
                    return st.order !== action.payload.order
                })
                return newState
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, [])
    const handleDispatch = ()=>{
        if(isAdd){
            dispatch({type: ADD})
        }
        else{
            dispatch({type:EDIT})
        }
    }
    return (
        <div>
            <h3>TO-Do List</h3>
            <section className="containers">
                <section className="todo">
                    <input type="text" onChange={(e) => {setTodo({...todo, value:e.target.value})}} value={todo.value}/>
                    <button className={isAdd ? "add": "editbtn"} onClick={() => { handleDispatch()}}>+ </button>
                </section>
                <TodoList list={state} dispatch={dispatch} />
            </section>
            
        </div>
    )
}
export default Todo;