import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "../contexts/TodoContext";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([{ id: 1, todo: "mk" }]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)),
    );
  };
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {/* adding from */}
      <TodoForm />
      {/* listing for todos */}
      {todos.map((item) => (
        <div className="" key={item.id}>
          <TodoItem todo={item} />
        </div>
      ))}
    </TodoProvider>
  );
}

export default App;
