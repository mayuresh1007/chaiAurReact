import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [{ id: 1, title: "xyz", details: "abc" }] },
  reducers: {
    addTodo: (state, action) => {
      // console.log(action.payload)
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      //   state.todos.filter((state) => state.todos === action.payload.id);
      //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      //   state.todos = state.todos.map((todo) =>
      //     todo.id === action.payload.id ? { ...todo, ...action.payload } : todo,
      //   );
      const todo = state.todos.find((t) => t.id === Number(action.payload.id));

      if (todo) {
        todo.title = action.payload.title ?? todo.title;
        todo.details = action.payload.details ?? todo.details;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
