import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dependantList: []
}

export const dependantSlice = createSlice({
     

    name : 'dependants',
    initialState,
    reducers:{
        
      
       addDependants : (state,action) => {
        state.dependantList.push(action.payload);
       },
       remove: (state) => {
           state.dependants = [];
       },
    },
   
});

export const {addDependants,remove} = dependantSlice.actions;
export const selectDependants = (state) => state.dependants.dependantList;

export default dependantSlice.reducer;

// console.log(state.customers.customer)