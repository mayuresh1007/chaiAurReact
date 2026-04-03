import { createContext, useContext, Provider } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id,todo) => {},
});
export const TodoProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}


// export const TodoProvider = ({ children }) => {
//   const addTodo = () => {};
//   const deleteTodo = () => {};
//   const updateTodo = () => {};

//   const value = {
//     todos: [],
//     addTodo,
//     deleteTodo,
//     updateTodo,
//   };

//   return (
//     <TodoContext.Provider value={value}>
//       {children}
//     </TodoContext.Provider>
//   );
// };
