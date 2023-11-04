import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    data: [],
    selectedJob: null,
    users: [],
    darkMode: false,
  },

  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    selectedJobReducer: (state, action) => {
      const jobId = action.payload;
      state.selectedJob = state.data.find((job) => job.id === jobId) || null;
    },
    clearJob: (state) => {
      state.selectedJob = null;
    },
    getUsers: (state, action) => {
      state.users.push(action.payload);
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  getData,
  selectedJobReducer,
  clearJob,
  getUsers,
  toggleDarkMode,
} = jobSlice.actions;
export default jobSlice.reducer;
