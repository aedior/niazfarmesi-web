import { createSlice } from '@reduxjs/toolkit'



interface karjoModelType{onvan: number;
lName: string;
fName: string;
birthdate: Date;
gender: number;
sokonat: number;
tahsilat_file: any;
tahsilat: number;
worked_file: any;
worked: number;
nezam: number;
meliNo_file: any;
meliNo: string;
moaref: string;
ashnaii: number;
teknesian_file: any;
teknesian: number;
mortabet_file: any;
mortabet: number;
narmAfzar: number;
soPishine_file: any;
soPishine: number;
saatBazAmozy_file: any;
saatBazAmozy: number;
}


const initialState:karjoModelType[] = [];

const KarjomodelSlice = createSlice({
name:'KarjomodelSlice',

initialState,

reducers: {},

})


export default KarjomodelSlice.reducer