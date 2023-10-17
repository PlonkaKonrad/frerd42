import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: "1",
      title: "Hire Konrad Płonka",
      description: "",
      createdAt: new Date(),
      done: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNew: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    toggleDone: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addNew, toggleDone, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
