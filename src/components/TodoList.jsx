// import { EDIT, DELETE } from "./Action.js"
import {FaRegEdit}  from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import { EDIT} from "./Action"
import { DELETE } from "./Action"
const TodoList = ({ list, dispatch }) => {
    return (
        <>
            {list.map((data, i) => {
                return (
                    <>
                        <section key={`${data.value} --${i}`} className='btn'>
                            <article>{data.value} <span><button className="edit" onClick={() => { dispatch({ type : EDIT, payload : data }) }}><FaRegEdit/></button></span>
                            <span><button className="delete" onClick={() => { dispatch({ type: DELETE, payload:data }) }}><MdClose /></button></span>
                            </article>
                        
                        </section>
                    </>
                )
            })}
        </>
    )
}
export default TodoList;