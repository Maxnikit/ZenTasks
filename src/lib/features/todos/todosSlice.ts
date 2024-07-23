import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoTaskType } from "@/lib/features/todos/todosTypes";

interface TodosState {
  value: TodoTaskType[];
}

// Initial state with a type
const initialState: TodosState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoTaskType>) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.value.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    changeTodoTitle: (
      state,
      action: PayloadAction<{ id: number; newTitle: string }>,
    ) => {
      const { id, newTitle } = action.payload;
      const todo = state.value.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
      }
    },
    changeTodoText: (
      state,
      action: PayloadAction<{ id: number; newText: string }>,
    ) => {
      const { id, newText } = action.payload;
      const todo = state.value.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  changeTodoText,
  changeTodoTitle,
} = todoSlice.actions;

export default todoSlice.reducer;
