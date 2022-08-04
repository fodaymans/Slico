import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./userSlice";
import premiumSlice from "./premiumSlice";
import districtSlice from "./districtSlice";
import customerSlice from "./customerSlice";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import {combineReducers} from 'redux';
import dependantSlice from "./dependantSlice";
import witnessSlice from "./witnessSlice";
import CustomerReducer from "./customerReducer";
import DependantReducer from "./dependantReducer";
import WitnessReducer from "./witnessReducer";

// export default configureStore({
//     reducer: {
//       user : userReducer,
//     },

    
// });



const rootReducer = combineReducers({
    user : userReducer,
    auth: authReducer,
    premium : premiumSlice,
    district : districtSlice,
    customers : customerSlice,
    dependants : dependantSlice,
    witness : witnessSlice,
    customerReducer : CustomerReducer,
    DependantReducer : DependantReducer,
    WitnessReducer : WitnessReducer
    

   
  });
  
  // persist config obj
  // blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
  const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  // const store = configureStore({
  //   reducer: persistedReducer,
  // });
  const store = configureStore({
    reducer: persistedReducer,
    // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  export const persistor = persistStore(store);
  export default store;