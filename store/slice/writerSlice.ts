import { createSlice } from "@reduxjs/toolkit";
import { MainThunk } from "../thunk/main";

interface WriterModelType {
  id: number;
  name: string;
}

const initialState: WriterModelType[] = [];

const WriterModelSlice = createSlice({
  name: "WriterModelSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(MainThunk.fulfilled, (state, action) => {
      const ids = action.payload.writers.map((w: any) => w.id);
      return [
        ...state.filter((s) => ids.includes(s)),
        ...action.payload.writers,
      ];
    });
  },
});

export default WriterModelSlice.reducer;
