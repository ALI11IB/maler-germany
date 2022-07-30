import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@rtk/store";

// Define a type for the slice state
interface UsersSlice {
  signed: boolean;
}

// Define the initial state using that type
const initialState: UsersSlice = {
  signed: false,
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<boolean>) => {
      state.signed = true;
    },
    signUp: (state, action: PayloadAction<boolean>) => {
      state.signed = false;
    },
  },
});

export const { signIn, signUp } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.users.signed;

export default usersSlice.reducer;
