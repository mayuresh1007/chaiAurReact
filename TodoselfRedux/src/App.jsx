import { useState } from "react";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <div className="container mt-5">
        <AddForm />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
