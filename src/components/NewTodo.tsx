import { useRef } from "react";
import styles from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
