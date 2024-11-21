import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "@/store/thunk/login";
import { SendKarfarmaInnerTypeThunk, submitKarjoSignup } from "./thunk";
import { kifpoolThunk } from "../thunk/kifpool";
import { smsThunk } from "../thunk/sms";
import { SMS_PRICE } from "@/core";
import type { UploadFile } from "antd/es/upload/interface";

export enum UserEnum {
  KARFARMA = 1,
  KARJO = 2,
}

export interface AllUsers {
  id: number;
  active: boolean;
  location: string;
  last_login: Date;
  dataAccepted: boolean;
  kifpool: number;
  sms: number;
}

export enum KarfarmaInnerType {
  DRUGSTORE_DOCTOR,
  DRUGSTORE_PERSON,
  COMPANY_DOCTOR,
  COMPANY_PERSON,
}
export interface KarfarmaType extends AllUsers {
  usertype: UserEnum.KARFARMA;
  type?: KarfarmaInnerType;
}

export enum GenderType {
  MALE,
  FEMALE,
}

export enum KarjoEnum {
  DAROKHANE,
  ARAYESHI,
  SANDOGDAR,
  ANBARDAR,
  MASOLFANI,
  GAEMMAGAM,
  KARAMOZ_DARO,
  KARAMOZ_ARAYESHI,
}

export enum EducationType {
  STUDENT,
  SIKLE,
  DIPLOMA,
  LISANCE,
  ARSHAD,
  PHD,
}

export enum HaveType {
  NO,
  YES,
}

export enum NezamType {
  MOAF,
  MASHMOL,
  PAYAN,
}

export enum KnowType {
  MOAREF,
  DAROKHANE,
  GOOGLE,
}
export enum ProgramType {
  EMENAFZAR,
  GANON,
  FARMASI,
  DARO_PARDAZAN,
  MANDEGFAR,
  VAKIL,
}

export interface KarjoType extends AllUsers {
  usertype: UserEnum.KARJO;
  profilePicture?: string;
  type: KarjoEnum;
  fName: string;
  lName: string;
  birthdate: Date;
  gender: GenderType;
  lat: number;
  long: number;
  knowType: KnowType;
  referralCode?: string;
  education: EducationType;
  education_file?: UploadFile;
  worked: HaveType;
  worked_file?: UploadFile;
  nezam: NezamType;
  nezam_file?: UploadFile;
  meliNo: string;
  meliNo_file: UploadFile;
  technician: HaveType;
  technician_file?: UploadFile;
  certificate: HaveType;
  certificate_file?: UploadFile;
  badBack: HaveType;
  badBack_file?: UploadFile;
  retrain: HaveType;
  retrain_file?: UploadFile;
  program: ProgramType;
}

export type UserType = {
  phone?: number;
  access?: string;
  type?: UserEnum;
  refresh?: string;
  user?: KarjoType | KarfarmaType;
};

const initialState: {
  user?: UserType;
  inLogin: "signup" | "rejected" | "pending" | "" | "accepted" | "calling";
} = {
  // user: {
  //   phone: 123123123,
  //   type: UserEnum.KARFARMA,
  //   access:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMDE4OTE1LCJpYXQiOjE3MzE5MzI1MTUsImp0aSI6IjE1OTg5YjU4OGVlYjQyMWE4ZjY3M2MxNDI1MTlhOGRlIiwidXNlcl9pZCI6Mn0.or84wwu7GQYTpyfOB1DaHOJFWZQc0XgcJOMJUPAAbtg",
  //   user: {
  //     id: 1,
  //     active: true,
  //     dataAccepted: true,
  //     kifpool: 0,
  //     last_login: new Date(),
  //     location: "",
  //     usertype: UserEnum.KARFARMA,
  //     type: KarfarmaInnerType.DRUGSTORE_DOCTOR,
  //     sms: 0,
  //   },
  // },
  inLogin: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setPhoneNumber: (
      state,
      action: PayloadAction<{ phone: number; type: UserEnum }>
    ) => ({ ...state, user: action.payload }),
    inSignup: (state, action: PayloadAction<{}>) => ({
      ...state,
      user: {
        ...state.user,
        user: { ...state.user?.user, dataAccepted: true },
      },
    }),
  },
  extraReducers(builder) {
    builder.addCase(loginThunk.fulfilled, (state, action) => ({
      ...state,
      inLogin: action.payload.user.user.dataAccepted ? "accepted" : "signup",
      user: { ...state.user, ...action.payload.user },
    }));
    builder.addCase(loginThunk.pending, (state, action) => ({
      ...state,
      inLogin: "pending",
    }));
    builder.addCase(loginThunk.rejected, (state, action) => ({
      ...state,
      inLogin: "rejected",
    }));
    builder.addCase(SendKarfarmaInnerTypeThunk.fulfilled, (state, action) => ({
      ...state,
      inLogin: "calling",
      user: {
        ...state.user,
        user: { ...state?.user?.user, type: action.payload.type },
      },
    }));

    // ----------------------------------- panel data handler

    builder.addCase(kifpoolThunk.fulfilled, (state, action) => ({
      ...state,
      user: {
        ...state.user,
        user: {
          ...state?.user?.user,
          kifpool: (state.user?.user?.kifpool || 0) + action.payload.price,
        },
      },
    }));
    builder
      .addCase(smsThunk.fulfilled, (state, action) => ({
        ...state,
        user: {
          ...state.user,
          user: {
            ...state?.user?.user,
            sms: (state.user?.user?.sms || 0) + action.payload.count,
            kifpool:
              (state.user?.user?.kifpool || 0) -
              action.payload.count * SMS_PRICE,
          },
        },
      }))
      .addCase(
        submitKarjoSignup.fulfilled,
        (state, action: PayloadAction<KarjoType>) => {
          if (state.user) state.user.user = action.payload;
        }
      );
  },
});

export default userSlice.reducer;
export const { setPhoneNumber, inSignup } = userSlice.actions;
