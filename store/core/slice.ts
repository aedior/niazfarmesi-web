import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export enum ServerStatusEnum {
    accepted,
    pending,
    rejected
}

export type appMessageType = {
    type: "" | "success" | "error" | "warning" | "info";
    title: string;
    desc: string;
};

export type coreType = {
    message: appMessageType;
};

const initialState: coreType = {
    message: {
        type: "",
        title: "",
        desc: "",
    },
};

const coreSlice = createSlice({
    name: "coreSlice",
    initialState,
    reducers: {
        changeMessage: (state, action: PayloadAction<appMessageType>) => {
            console.log("ok");

            state.message = action.payload;
        },
        clearMessage: (state) => {
            state.message = {
                type: "",
                title: "",
                desc: "",
            };
        },
    },
});

export default coreSlice.reducer;
export const { changeMessage, clearMessage } = coreSlice.actions;
