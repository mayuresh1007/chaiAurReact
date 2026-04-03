import React, { useState, useEffect } from "react";
import useTodo from "../../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todomsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo } = useTodo();

  useEffect(() => {
    setTodoMsg(todo.todo);
  }, [todo.todo]);

  const editTodo = (e) => {
    e.preventDefault();
    updateTodo(todo.id, todomsg);
  };
  const deletetodo = () => {
    deleteTodo(todo.id);
  };
  return (
    <div>
      {/* input for update if update is selected save btn */}
      <input
        type="checkbox"
        name="editable"
        id=""
        onClick={() => setIsEditable((prev) => !prev)}
      />
      {isEditable ? (
        <form onSubmit={editTodo}>
          <input
            type="text"
            value={todomsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <input
            type="text"
            value={todo.todo}
            onChange={(e) => setTodoMsg(e.target.value)}
            disabled={isEditable}
          />
          <button onClick={deletetodo}>detele</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
