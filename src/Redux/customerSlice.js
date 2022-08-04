import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    customerList: []
}

export const customerSlice = createSlice({
     

    name : 'customers',
    initialState,
    reducers:{
        
      
       addCustomer : (state,action) => {
        state.customerList.push(action.payload);
       },
    //    remove: (state) => {
    //        state.customer = [];
    //    },
    //    deleteCustomer :  (state,action) => {
    //     state.filter((customerList) => customers.ID !== action.payload);
    //    },
    },
   
});

export const {addCustomer} = customerSlice.actions;
export const selectCustomer = (state) => state.customers.customerList;

export default customerSlice.reducer;

// console.log(state.customers.customer)