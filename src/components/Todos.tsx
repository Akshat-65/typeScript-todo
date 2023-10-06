import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css'

const Todos:React.FC<{items:Todo[]; handleDeleteTodo:(id:string)=>void}> = (props) => {
    return ( 
       <ul className={styles.todos}>
        {
            props.items.map((item)=>(
                <TodoItem  key={item.id} todo = {item.text} handleDeleteTodo = {props.handleDeleteTodo.bind(null,item.id)} />
            ))
        }
       </ul>
     );
}
 
export default Todos;