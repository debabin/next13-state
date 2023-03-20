import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState = {
  value: 0,
} as CounterState;

export const prefix = "counter";
export const charactersSlice = createSlice({
  name: prefix,
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, value: state.value + 1 };
    },
  },
});

export const { increment } = charactersSlice.actions;
export const counterReducer = charactersSlice.reducer;
