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

export const submitKarjoSignup = createAsyncThunk(
  "user/submitKarjoSignup",
  async (karjoData: KarjoType, { rejectWithValue }) => {
    try {
      const response = await axiosUser.put("/auth/karjo", karjoData);
      return karjoData;
    } catch (error) {
      // If there's an error, we'll reject the promise with the error message
      return rejectWithValue((error as Error).message);
    }
  }
);
