import { useState } from "react";
import Todos from "./components/Todos";

import "./App.css";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => prev.concat(newTodo));
  };
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos items={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
