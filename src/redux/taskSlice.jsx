import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [], // List of tasks
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.description = description;
      }
    },
  },
});

export const { addTask, toggleTaskStatus, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
