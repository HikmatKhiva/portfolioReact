import { createSlice } from "@reduxjs/toolkit";
export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    selectedSkill: null,
  },
  reducers: {
    handleSkill: (state, paylaod) => {
      state.selectedSkill = paylaod.payload.skill;
    },
    clearSkill: (state) => {
      state.selectedSkill = null;
    },
  },
});
export const { clearSkill, handleSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
