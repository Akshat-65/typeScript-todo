import styles from './TodoItem.module.css'

const TodoItem:React.FC<{todo:string,handleDeleteTodo:()=> void }> = (props) => {

  return <li onClick={props.handleDeleteTodo} className={styles.item} >{props.todo}</li>;
};

export default TodoItem;
