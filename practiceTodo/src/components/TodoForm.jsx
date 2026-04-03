import React from "react";
import { useState } from "react";
import useTodo from "../../contexts/TodoContext";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);
  const { addTodo } = useTodo();


  const add = (e) => {
      e.preventDefault();
      if (!todo) return;
      addTodo({todo});
      setTodo("");
  };


  return (
    <div>
        <h1 >Add your todo</h1>
      <form onSubmit={add}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="enter todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
