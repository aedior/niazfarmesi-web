import { axiosNoUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const BlogsListThunk = createAsyncThunk(
  "BlogsListThunk",
  async (action: {}, { rejectWithValue }) => {
    console.log("request tp /blogs");
    const response = await axiosNoUser.get("/blogs");
    console.log("server response -> ", response.data);

    if (response.status === 201) {
      return response.data;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
