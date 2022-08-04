import {SET_NEW_WITNESS,SET_NEW_WITNESS_ID,CLEAR_NEW} from './actions';
const initialState = {
 
    newWitnessID : 1,
  newWitness :[]

};

function WitnessReducer(state = initialState, action) {
  switch (action.type) {
   

      case SET_NEW_WITNESS:
        return {...state, newWitness: action.payload};

        case SET_NEW_WITNESS_ID:
          return {...state, newWitnessID: action.payload};

  

      case CLEAR_NEW:
      return {...state, newWitness: []};

    default:
      return state;
  }

//   if(action.type === offlineActionTypes.CONNECTION_CHANGE) 

}

export default WitnessReducer;



