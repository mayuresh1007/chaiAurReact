import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { removeTodo } from "../slices/todosSlice";
import TodoItem from "./TodoItem";

const ListTodo = () => {
  const todos = useSelector((store) => store.todo.todos);
  console.log(todos);


  return (
    <div className="mt-4">
      <h3>List is here</h3>
      {todos &&
        todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id}/>;
        })}
    </div>
  );
};

export default ListTodo;
