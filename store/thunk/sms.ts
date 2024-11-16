import { axiosNoUser, axiosUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const smsThunk = createAsyncThunk(
  "smsThunk",
  async (action: { count: number }, { rejectWithValue }) => {
    console.log("request to /sms");
    const response = await axiosUser.post("/api/sms", action);
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return action;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
