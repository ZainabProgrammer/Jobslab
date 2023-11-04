import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../src/features/JobSlice";
import CandidateReducer from "./features/CandidateSlice";
const store = configureStore({
  reducer: {
    jobs: jobReducer,
    candidates: CandidateReducer,
  },
});
export default store;
