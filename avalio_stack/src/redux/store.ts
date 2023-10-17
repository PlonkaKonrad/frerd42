import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import newTaskModalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    newTaskModal: newTaskModalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
