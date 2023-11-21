import { configureStore } from "@reduxjs/toolkit";
import settings from "../reducer/settings";
import client from "../reducer/client";
import skills from "../reducer/skills";
export const store = configureStore({
  reducer: {
    settings,
    client,
    skills,
  },
});
