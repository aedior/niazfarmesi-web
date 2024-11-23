import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../user/slice";
import { AxiosError } from "axios";

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData: Partial<UserType["user"]>, { rejectWithValue }) => {
    try {
      // Make an API call to update the user profile
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
