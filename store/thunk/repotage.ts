import { axiosNoUser, axiosUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewRepotage = createAsyncThunk(
  "createNewRepotage",
  async (
    action: {
      gender: number;
      onvan: string;
      nameMotabar: number;
      nezam: number;
      saatHamkari: string;
      tarikhHamkari: string;
      price: number;
      desc: string;
      lat: number;
      long: number;
    },
    { rejectWithValue }
  ) => {
    console.log("request to /repotage");
    const response = await axiosUser.post("/api/repotage", action);
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response.status);
    }
  }
);

export const getRepotages = createAsyncThunk(
  "getRepotages",
  async (_: any, { rejectWithValue }) => {
    console.log("request to /main");
    const response = await axiosNoUser.get("/repotage");
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response.status);
    }
  }
);

export const sendResomeThunk = createAsyncThunk(
  "sendResomeThunk",
  async (action: { desc: string }, { rejectWithValue }) => {
    console.log("request to /repotage");
    const response = await axiosUser.post("/api/repotage", action);
    console.log("response -> ", response.data);

    if (response.status === 200) {
      return true;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
