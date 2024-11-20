import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { JobPosting } from "./scheduleInterview";
import { axiosUser } from "@/core/axios";

export interface ReportageData {
  gender: number;
  title: string;
  nameMotabar: number;
  nezam: number;
  saatHamkari: string;
  price: string;
  desc: string;
  tags: string[];
}
// Update the createNewReportage thunk
export const createNewReportage = createAsyncThunk(
  "jobPostings/createNewReportage",
  async (reportageData: ReportageData) => {
    const response = await axiosUser.post("/api/repotage", reportageData);

    return response.data;
  }
);
