import { axiosUser } from "@/core/axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserProfile } from "./updateProfile";

// Types
export enum ResumeStatus {
  UNSEEN = "مشاهده نشده",
  SEEN = "مشاهده شده",
  PENDING_INTERVIEW = "در انتظار مصاحبه",
  REJECTED = "رد شده",
}

export interface Skill {
  name: string;
  level: number;
}

export interface Interview {
  datetime: string;
}

export interface Resume {
  id: number;
  name: string;
  status: ResumeStatus;
  description: string;
  education: string;
  experience: string;
  skills: Skill[];
  languages: string[];
  email: string;
  phone: string;
  website: string;
  interview?: Interview;
}

export enum KarjoEnum {
  DOCTOR = "دکتر",
  NURSE = "پرستار",
  PHARMACIST = "داروساز",
  OTHER = "سایر",
}

export interface JobPosting {
  id: number;
  title: string;
  location: string;
  resumes: Resume[];
  gender: number;
  nameMotabar: number;
  nezam: number;
  saatHamkari: string;
  price: string;
  desc: string;
  website?: string;
  lat?: number;
  long?: number;
  fori: boolean;
  created_at: Date;
  tags: string[];
  fromKarfarma: {
    name: string;
    logo: string;
  };
}

interface JobPostingsState {
  data: JobPosting[];
  loading: boolean;
  error: string | null;
}

const initialState: JobPostingsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchJobPostings = createAsyncThunk(
  "jobPostings/fetchJobPostings",
  async () => {
    const response = await axiosUser.get("/api/karfarma/repotages");

    return response.data;
  }
);

export const scheduleInterview = createAsyncThunk(
  "jobPostings/scheduleInterview",
  async (
    payload: { jobId: number; resumeId: number; interview: Interview },
    { getState }
  ) => {
    // Simulating API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would make an API call here
    // For now, we'll just return the payload
    return payload;
  }
);

const jobPostingsSlice = createSlice({
  name: "jobPostings",
  initialState,
  reducers: {
    updateResumeStatus: (
      state,
      action: PayloadAction<{
        jobId: number;
        resumeId: number;
        status: ResumeStatus;
      }>
    ) => {
      const { jobId, resumeId, status } = action.payload;
      const job = state.data.find((job) => job.id === jobId);
      if (job) {
        const resume = job.resumes.find((resume) => resume.id === resumeId);
        if (resume) {
          resume.status = status;
        }
      }
    },
    refreshJobPostingsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    refreshJobPostingsSuccess: (state, action: PayloadAction<JobPosting[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    refreshJobPostingsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobPostings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobPostings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchJobPostings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      })
      .addCase(scheduleInterview.fulfilled, (state, action) => {
        const { jobId, resumeId, interview } = action.payload;
        const job = state.data.find((job) => job.id === jobId);
        if (job) {
          const resume = job.resumes.find((resume) => resume.id === resumeId);
          if (resume) {
            resume.status = ResumeStatus.PENDING_INTERVIEW;
            resume.interview = interview;
          }
        }
      });
  },
});

export const {
  updateResumeStatus,
  refreshJobPostingsStart,
  refreshJobPostingsSuccess,
  refreshJobPostingsFailure,
} = jobPostingsSlice.actions;

export default jobPostingsSlice.reducer;
