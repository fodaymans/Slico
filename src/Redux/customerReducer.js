import {SET_NEW,SET_NEW_ID,CLEAR_NEW} from './actions';
const initialState = {
 
  newRegID : 1,
  newReg :[]

};

function CustomerReducer(state = initialState, action) {
  switch (action.type) {
   

      case SET_NEW:
        return {...state, newReg: action.payload};

        case SET_NEW_ID:
          return {...state, newRegID: action.payload};

  

      case CLEAR_NEW:
      return {...state, newReg: []};

    default:
      return state;
  }

//   if(action.type === offlineActionTypes.CONNECTION_CHANGE) 

}

export default CustomerReducer;



