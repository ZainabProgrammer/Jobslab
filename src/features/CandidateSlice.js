import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidates",
  initialState: {
    candidates: [],
    selectedCands: null,
    user: null,
  },
  reducers: {
    getCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    getSelectedCandidate: (state, action) => {
      const CandId = action.payload;
      state.selectedCands = state.candidates.find(
        (e) => e.id === CandId || null
      );
    },
    getUsers: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getCandidates, getSelectedCandidate, getUsers } =
  candidateSlice.actions;
export default candidateSlice.reducer;
