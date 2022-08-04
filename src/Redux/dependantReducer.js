import {SET_NEW_DEPENDANT,SET_NEW_DEPENDANT_ID,CLEAR_NEW} from './actions';
const initialState = {
 
    newDependantID : 1,
  newDependant :[]

};

function DependantReducer(state = initialState, action) {
  switch (action.type) {
   

      case SET_NEW_DEPENDANT:
        return {...state, newDependant: action.payload};

        case SET_NEW_DEPENDANT_ID:
          return {...state, newDependantID: action.payload};

  

    //   case CLEAR_NEW:
    //   return {...state, newDependant: []};

    default:
      return state;
  }

//   if(action.type === offlineActionTypes.CONNECTION_CHANGE) 

}

export default DependantReducer;



