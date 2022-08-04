import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    witnessList: []
}

export const witnessSlice = createSlice({
     

    name : 'witness',
    initialState,
    reducers:{
        
      
       addWitness : (state,action) => {
        state.witnessList.push(action.payload);
       },
       remove: (state) => {
           state.witness = [];
       },
    },
   
});

export const {addWitness,remove} = witnessSlice.actions;
export const selectWitness = (state) => state.witness.witnessList;

export default witnessSlice.reducer;

// console.log(state.customers.customer)