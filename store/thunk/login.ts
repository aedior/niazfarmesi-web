import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios4Auth, axiosUser } from "@/core/axios";

export const loginThunk = createAsyncThunk(
  "login",
  async (
    action: { username: number; password: string },
    { rejectWithValue }
  ) => {
    // request to model node from component nodeList
    const user = await axios4Auth.post("login", action);
    axiosUser.defaults.headers.Authorization = `Bearer ${user.data.access}`;
    console.log(user.data.access);
    var isNew = false;
    // check for accepted request
    if (user.status !== 200) return rejectWithValue("");

    //create response for requests
    return {
      user: user.data,
      isNew,
    };
  }
);
