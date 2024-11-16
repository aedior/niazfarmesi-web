import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import MessagesmodelSlice from "@/store/slice/messagesModel";
import RepotagemodelSlice from "@/store/slice/repotageModel";
import BlogsmodelSlice from "@/store/slice/blogsModel";
import ContactmodelSlice from "@/store/slice/contactModel";
import StoresmodelSlice from "@/store/slice/storesModel";
import DrugstoresmodelSlice from "@/store/slice/drugstoresModel";
import KarjomodelSlice from "@/store/slice/karjoModel";
import category from "@/store/slice/categoryModel";
import writer from "@/store/slice/writerSlice";
import user from "@/store/user/slice";

// import slices
import core from "./core/slice";

export const store = configureStore({
  reducer: {
    core,
    MessagesmodelSlice,
    RepotagemodelSlice,
    BlogsmodelSlice,
    ContactmodelSlice,
    StoresmodelSlice,
    DrugstoresmodelSlice,
    KarjomodelSlice,
    user,
    writer,
    category,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
