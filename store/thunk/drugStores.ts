import { axiosNoUser } from "@/core/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const DrugStoresThunk = createAsyncThunk(
  "DrugStoresThunk",
  async (action: {}, { rejectWithValue }) => {
    const response = await axiosNoUser.get("/drug-stores");

    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response.status);
    }
  }
);
