import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todosSlice";

const AddForm = () => {
  const [Details, setDetails] = useState("");
  const [Title, setTitle] = useState("");

  const dispatch = useDispatch();
  const handleSubmitform = (e) => {
    e.preventDefault();
    console.log(Details, Title);
    dispatch(addTodo({ id: Date.now(), title: Title, details: Details }));
    setTitle("");
    setDetails("");
  };
  return (
    <div>
      <form onSubmit={handleSubmitform}>
        <h3>Add form for todo</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            desctiption
          </label>
          <input
            type="text"
            className="form-control"
            id="details"
            value={Details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="enter details"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
