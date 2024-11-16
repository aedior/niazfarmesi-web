import { createSlice } from '@reduxjs/toolkit'



interface messagesModelType{time: string;
}


const initialState:messagesModelType[] = [];

const MessagesmodelSlice = createSlice({
name:'MessagesmodelSlice',

initialState,

reducers: {},

})


export default MessagesmodelSlice.reducer