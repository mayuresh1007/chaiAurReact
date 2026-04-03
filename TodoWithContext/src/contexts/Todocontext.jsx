import { createContext, Provider ,useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "todo 1", completed: false }],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toglecomplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

const  useTodos = () => {
  return useContext(TodoContext);
};
export default useTodos
