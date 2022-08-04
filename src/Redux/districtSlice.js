import {createSlice} from "@reduxjs/toolkit";

export const districtSlice = createSlice({
    name : "district",
    initialState:{
        district: []
    },


    // name : "auth",
    // initialState:{
    //     auth: null
    // },

    
    reducers:{
       addDistrict : (state,action) =>{
        state.district = action.payload;
       },
       remove: (state) => {
           state.district = [];
       },
    },
   
});

export const {addDistrict,remove} = districtSlice.actions;
export const selectDistrict= (state) => state.district.district;

export default districtSlice.reducer;