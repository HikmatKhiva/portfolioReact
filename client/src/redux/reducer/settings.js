import { createSlice } from "@reduxjs/toolkit";
const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    mobileNav: false,
    themeColor: "",
  },
  reducers: {
    toggleMobileNav: (state) => {
      state.mobileNav = !state.mobileNav;
    },
    closeMobileNav: (state) => {
      state.mobileNav = false;
    },
    handleChangeTheme: (state, payload) => {
      state.themeColor = payload.payload;
    },
  },
});
export const { closeMobileNav, toggleMobileNav, handleChangeTheme } =
  settingsSlice.actions;
export default settingsSlice.reducer;
