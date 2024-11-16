import { createSlice } from "@reduxjs/toolkit";
import { MainThunk } from "../thunk/main";
import { BlogsListThunk } from "../thunk/blogs";

interface CategoryType {
  id: number;
  name: string;
}

const initialState: CategoryType[] = [];

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(MainThunk.fulfilled, (state, action) => {
      const ids = action.payload.blogs.map((a: any) => a.id) as number[];
      return [
        ...state.filter((s) => !ids.includes(s.id)),
        ...action.payload.categories,
      ];
    });
  },
});

export default CategorySlice.reducer;
