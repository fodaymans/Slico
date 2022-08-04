import {createSlice} from "@reduxjs/toolkit";

export const premiumSlice = createSlice({
    name : "premium",
    initialState:{
        premium: []
    },


    // name : "auth",
    // initialState:{
    //     auth: null
    // },

    
    reducers:{
       addPremium : (state,action) =>{
        state.premium = action.payload;
       },
       remove: (state) => {
           state.premium = [];
       },
    },
   
});

export const {addPremium,remove} = premiumSlice.actions;
export const selectPremium = (state) => state.premium.premium;

export default premiumSlice.reducer;