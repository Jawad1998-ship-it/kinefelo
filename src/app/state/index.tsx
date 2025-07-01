import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isSidebarCollapsed: false,
  currentUser: {},
  cartItems: {},
  loading: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<object>) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setCurrentUser, setLoading } = globalSlice.actions;
export default globalSlice.reducer;
