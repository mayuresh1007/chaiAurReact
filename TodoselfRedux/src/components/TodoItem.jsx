import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../slices/todosSlice";
const TodoItem = ({ todo }) => {
  const [isedit, setIsEdit] = useState(false);
  const [Details, setDetails] = useState("");
  const [Title, setTitle] = useState("");

  const dispatch = useDispatch();

  const update = (e) => {
    e.preventDefault();
    // dispatch(updateTodo({ ...todo, title: Title, details: Details }));
    dispatch(
      updateTodo({
        ...todo,
        title: Title || todo.title,
        details: Details || todo.details,
      }),
    );
    setIsEdit(false);
  };
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="d-flex">
      <ul key={todo.id} className="list-group">
        <li className="mx-4 list-group-item">
          {todo.title} - {todo.details}
        </li>
        {isedit ? (
          <form onSubmit={update}>
            <input
              type="text"
              value={Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="text"
              value={Details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => {
                setIsEdit(false);
              }}
            >
              cancel
            </button>
            <button
              type="submit"
              className="btn btn-outline-danger"
           
            >
              Save
            </button>
          </form>
        ) : (
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              setIsEdit(todo.id);
              setTitle(todo.title);
              setDetails(todo.details);
            }}
          >
            edit
          </button>
        )}

        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          delete
        </button>
      </ul>
    </div>
  );
};

export default TodoItem;
