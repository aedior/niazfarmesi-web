import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginThunk } from "@/store/thunk/login";
import { SendKarfarmaInnerTypeThunk } from "./thunk";
import { kifpoolThunk } from "../thunk/kifpool";
import { smsThunk } from "../thunk/sms";
import { SMS_PRICE } from "@/core";

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
export interface KarjoType extends AllUsers {
  usertype: UserEnum.KARJO;
}

export enum KarjoEnum {
  DAROKHANE = 1,
  ARAYESHI = 2,
  SANDOGDAR = 3,
  ANBARDAR = 4,
  MASOLFANI = 5,
  GAEMMAGAM = 6,
  KARAMOZ_DARO = 7,
  KARAMOZ_ARAYESHI = 8,
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
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMxMDY4NDU0LCJpYXQiOjE3MzA5ODIwNTQsImp0aSI6IjJkZTMzZjE4YzdlZDQxMjE4ODc1MDY3ZWZiNzZkODM5IiwidXNlcl9pZCI6MX0.5JoAqU8gIMKwACVJTP0CYg94SvhkHS5yjppMzUfCQ3M",
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
    builder.addCase(smsThunk.fulfilled, (state, action) => ({
      ...state,
      user: {
        ...state.user,
        user: {
          ...state?.user?.user,
          sms: (state.user?.user?.sms || 0) + action.payload.count,
          kifpool:
            (state.user?.user?.kifpool || 0) - action.payload.count * SMS_PRICE,
        },
      },
    }));
  },
});

export default userSlice.reducer;
export const { setPhoneNumber, inSignup } = userSlice.actions;
