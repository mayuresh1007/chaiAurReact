import { useContext, useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "../contexts/TodoContext";
import TodoItem from "./components/TodoItem";
import Counter from "./components/Counter";
import { CounterProvider } from "../contexts/CounterContext";
import { Themecontext, ThemeProvider } from "../contexts/ThemeContext";
import Home from "./components/Home";

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

  // ======================
  const [count, setCount] = useState(0);
  // const { increaseCount, decreaseCount } = useCounter();
  const increase = () => {
    increaseCount(setCount(count + 1));
  };
  const decrease = () => {
    decreaseCount(setCount(count - 1));
  };

  ///===================================

  const ToggleTheme =useContext(Themecontext)

  return (
    <ThemeProvider>
      <CounterProvider>
        {/* <button className="" onClick={()=>ToggleTheme()}>Togle theme</button> */}
        <Home/>
        <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
          {/* adding from */}
          <TodoForm />
          {/* listing for todos */}
          {todos.map((item) => (
            <div className="" key={item.id}>
              <TodoItem todo={item} />
            </div>
          ))}

          <Counter />
        </TodoProvider>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
