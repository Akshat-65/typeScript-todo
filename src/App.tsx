import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [new Todo("first"), new Todo("second")];

  const handleAddTodo = (text:string)=>{

  }
  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} /> 
      <Todos items={todos} />
    </div>
  );
}

export default App;
