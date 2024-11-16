import { createSlice } from "@reduxjs/toolkit";
import { DrugStoresThunk } from "../thunk/drugStores";

interface drugstoresModelType {
  name: string;
  city: string;
  person: string;
  phone: string;
  desc: string;
  phone1: string;
  phone2: string;
}

const initialState: drugstoresModelType[] = [
  {
    name: "nprian drugs",
    city: "اردبیل",
    person: "مهدی نوری",
    phone: "۰۹۱۴۰۰۰۰۰۰۰",
    desc: "این توضیح تست است",
    phone1: "۰۹۱۴۰۰۰۰۰۰۰",
    phone2: "۰۹۱۴۰۰۰۰۰۰۱",
  },
];

const DrugstoresmodelSlice = createSlice({
  name: "DrugstoresmodelSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      DrugStoresThunk.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default DrugstoresmodelSlice.reducer;
