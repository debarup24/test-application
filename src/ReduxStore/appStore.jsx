import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice.jsx";

const appStore = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default appStore;
