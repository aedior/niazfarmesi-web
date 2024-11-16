import { axiosNoUser, axiosUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const kifpoolThunk = createAsyncThunk(
  "kifpoolThunk",
  async (action: { price: number }, { rejectWithValue }) => {
    console.log("request to /kifpool");
    const response = await axiosUser.post("/api/kifpool", action);
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return action;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
