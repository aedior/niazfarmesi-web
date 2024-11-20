import { axiosUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { KarfarmaInnerType, KarjoType } from "./slice";

export const SendKarfarmaInnerTypeThunk = createAsyncThunk(
  "SendKarfarmaInnerTypeThunk",
  async (action: { type: KarfarmaInnerType }, { rejectWithValue }) => {
    console.log(axiosUser.defaults.headers.Authorization);

    console.log("request tp /blogs");
    const response = await axiosUser.put("/auth/karfarma", action);
    console.log("server response -> ", response.data);

    if (response.status === 202) {
      return action;
    } else {
      return rejectWithValue(response.status);
    }
  }
);

export const SendKarjoInnerTypeThunk = createAsyncThunk(
  "SendKarjoInnerTypeThunk",
  async (action: { type: KarjoType }, { rejectWithValue }) => {
    console.log(axiosUser.defaults.headers.Authorization);

    console.log("request tp /blogs");
    const response = await axiosUser.put("/auth/karjo", action);
    console.log("server response -> ", response.data);

    if (response.status === 202) {
      return action;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
