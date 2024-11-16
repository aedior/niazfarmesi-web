import { createSlice } from '@reduxjs/toolkit'



interface contactModelType{email: string;
name: string;
title: string;
desc: string;
}


const initialState:contactModelType[] = [];

const ContactmodelSlice = createSlice({
name:'ContactmodelSlice',

initialState,

reducers: {},

})


export default ContactmodelSlice.reducer