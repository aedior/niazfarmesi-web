import { createSlice } from "@reduxjs/toolkit";
import { MainThunk } from "../thunk/main";
import { BlogsListThunk } from "../thunk/blogs";

export interface BlogsModelType {
  id: number;
  name: string;
  blogText?: string;
  writer_id: number;
  desc?: string;
  better?: boolean;
  created_at: Date;
  commentsCount: number;
  readTime: number;
}

const initialState: BlogsModelType[] = [];

const BlogsmodelSlice = createSlice({
  name: "BlogsmodelSlice",

  initialState,

  reducers: {},
  extraReducers(builder) {
    builder.addCase(MainThunk.fulfilled, (state, action) => {
      const ids = action.payload.blogs.map((a: any) => a.id) as number[];
      return [
        ...state.filter((s) => !ids.includes(s.id)),
        ...action.payload.blogs,
      ];
    });
    builder.addCase(BlogsListThunk.fulfilled, (state, action) => {
      const ids = action.payload.map((a: any) => a.id) as number[];
      return [...state.filter((s) => !ids.includes(s.id)), ...action.payload];
    });
  },
});

export default BlogsmodelSlice.reducer;
