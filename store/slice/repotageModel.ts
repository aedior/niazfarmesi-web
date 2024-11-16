import { createSlice } from "@reduxjs/toolkit";
import { getRepotages } from "../thunk/repotage";
import { KarjoEnum } from "../user/slice";

export interface repotageModelType {
  id: number;
  gender: number;
  nameMotabar: number;
  nezam: number;
  saatHamkari: string;
  price: string;
  desc: string;
  onvan: KarjoEnum;
  website?: string;
  drugstoreName: string;
  lat?: number;
  long?: number;
  fori: boolean;
  created_at: Date;
  tags: string[];
  drugstore: {
    name: string;
    logo: string;
  };
}

const initialState: repotageModelType[] = [
  {
    created_at: new Date("2024-11-07T15:56:31.772203+03:30"),
    desc: "3123123",
    fori: false,
    // fromKarfarma: "مهدی نوری",
    gender: 1,
    id: 1,
    lat: 38.25260555271059,
    long: 48.275213241577156,
    nameMotabar: 1,
    nezam: 1,
    onvan: 4,
    price: "1231231",
    saatHamkari: "پاره وقت",
    tarikhHamkari: "123123123",
  },
];

const RepotagemodelSlice = createSlice({
  name: "RepotagemodelSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRepotages.fulfilled, (state, action) => action.payload);
  },
});

export default RepotagemodelSlice.reducer;
