import { createSlice } from '@reduxjs/toolkit'



interface storesModelType{name: string;
}


const initialState:storesModelType[] = [];

const StoresmodelSlice = createSlice({
name:'StoresmodelSlice',

initialState,

reducers: {},

})


export default StoresmodelSlice.reducer