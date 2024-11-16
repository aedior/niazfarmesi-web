import { axiosNoUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const MainThunk = createAsyncThunk(
  "MainThunk",
  async (action: {}, { rejectWithValue }) => {
    console.log("request to /main");
    const response = await axiosNoUser.get("/main", action);
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
