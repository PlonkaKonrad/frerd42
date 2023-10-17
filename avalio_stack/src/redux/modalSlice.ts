import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewTaskModalState {
  opened: boolean;
}

const initialState: NewTaskModalState = {
  opened: false,
};

const newTaskModalSlice = createSlice({
  name: "newTaskModal",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
  },
});

export const { toggle } = newTaskModalSlice.actions;

export default newTaskModalSlice.reducer;
