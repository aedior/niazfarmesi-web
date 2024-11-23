import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { createNewReportage } from "../thunk/createNewReportage ";
import { getRepotages, sendResomeThunk } from "../thunk/repotage";
import { fetchJobPostings } from "../thunk/scheduleInterview";

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
  resumeSended?: boolean;
}

interface JobPostingsState {
  data: JobPosting[];
  loading: boolean;
  error: string | null;
}

const initialState: JobPostingsState = {
  data: [
    {
      id: 1,
      title: "استخدام داروساز",
      location: "تهران، ونک",
      gender: 0,
      nameMotabar: 1,
      nezam: 12345,
      saatHamkari: "۸ صبح تا ۴ عصر",
      price: "۲۰ میلیون تومان",
      desc: "به یک داروساز با تجربه نیازمندیم",
      fori: true,
      created_at: new Date(),
      tags: ["داروسازی", "تمام وقت"],
      fromKarfarma: {
        name: "داروخانه شفا",
        logo: "https://example.com/logo.png",
      },
      resumes: [
        {
          id: 1,
          name: "علی محمدی",
          status: ResumeStatus.UNSEEN,
          description: "داروساز با ۴ سال تجربه در داروخانه‌های معتبر",
          education: "دکترای داروسازی، دانشگاه تهران",
          experience: "۴ سال تجربه در داروخانه‌های معتبر",
          skills: [
            { name: "مدیریت دارو", level: 90 },
            { name: "مشاوره دارویی", level: 85 },
            { name: "فارماکولوژی", level: 95 },
          ],
          languages: ["فارسی (مادری)", "انگلیسی (پیشرفته)"],
          email: "ali.mohammadi@example.com",
          phone: "۰۹۱۲۳۴۵۶۷۸۹",
          website: "www.alimohammadi.com",
        },
        {
          id: 1,
          name: "علی محمدی",
          status: ResumeStatus.UNSEEN,
          description: "داروساز با ۴ سال تجربه در داروخانه‌های معتبر",
          education: "دکترای داروسازی، دانشگاه تهران",
          experience: "۴ سال تجربه در داروخانه‌های معتبر",
          skills: [
            { name: "مدیریت دارو", level: 90 },
            { name: "مشاوره دارویی", level: 85 },
            { name: "فارماکولوژی", level: 95 },
          ],
          languages: ["فارسی (مادری)", "انگلیسی (پیشرفته)"],
          email: "ali.mohammadi@example.com",
          phone: "۰۹۱۲۳۴۵۶۷۸۹",
          website: "www.alimohammadi.com",
        },
        {
          id: 1,
          name: "علی محمدی",
          status: ResumeStatus.UNSEEN,
          description: "داروساز با ۴ سال تجربه در داروخانه‌های معتبر",
          education: "دکترای داروسازی، دانشگاه تهران",
          experience: "۴ سال تجربه در داروخانه‌های معتبر",
          skills: [
            { name: "مدیریت دارو", level: 90 },
            { name: "مشاوره دارویی", level: 85 },
            { name: "فارماکولوژی", level: 95 },
          ],
          languages: ["فارسی (مادری)", "انگلیسی (پیشرفته)"],
          email: "ali.mohammadi@example.com",
          phone: "۰۹۱۲۳۴۵۶۷۸۹",
          website: "www.alimohammadi.com",
        },
      ],
    },
  ],
  loading: false,
  error: null,
};

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
      })
      .addCase(createNewReportage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewReportage.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createNewReportage.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "An error occurred while creating the job posting";
      })
      .addCase(sendResomeThunk.fulfilled, (state, action) => {
        const { repotage_id } = action.payload;
        const job = state.data.find((job) => job.id === repotage_id);
        if (job) {
          job.resumeSended = true;
        }
      });
    builder.addCase(getRepotages.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
  },
});

export const {
  updateResumeStatus,
  refreshJobPostingsStart,
  refreshJobPostingsSuccess,
  refreshJobPostingsFailure,
} = jobPostingsSlice.actions;

export default jobPostingsSlice.reducer;
