import { createSlice } from "@reduxjs/toolkit";
export const clientSlice = createSlice({
  name: "client",
  initialState: {
    alertClient: true,
    clientInfo: null,
  },
  reducers: {
    updateClientInfo: (state, payload) => {
      state.clientInfo = payload.payload.client;
    },
    handleAlertClick: (state, payload) => {
      state.alertClient = payload.payload?.type !== "hide" ? true : false;
    },
    clearClientInfo: (state) => {
      state.clientInfo = null;
      state.alertClient = false;
    },
  },
});
export const { handleAlertClick, updateClientInfo, clearClientInfo } =
  clientSlice.actions;
export default clientSlice.reducer;