export const SET_VERIFIED = 'SET_VERIFIED';
export const SET_VERIFIED_ID = 'SET_VERIFIED_ID';

export const CLEAR = 'CLEAR';

export const SET_NEW = 'SET_NEW';
export const SET_NEW_ID = 'SET_NEW_ID';
export const CLEAR_NEW = 'CLEAR_NEW';

export const SET_NEW_DEPENDANT = 'SET_NEW_DEPENDANT';
export const SET_NEW_DEPENDANT_ID = 'SET_NEW_DEPENDANT_ID';

export const SET_NEW_WITNESS = 'SET_NEW_WITNESS';
export const SET_NEW_WITNESS_ID = 'SET_NEW_WITNESS_ID';

export const SET_NEW_ELECTION = 'SET_NEW_ELECTION';

export const SET_NEW_ELECTION_ID = 'SET_NEW_ELECTION_ID';

export const CLEAR_ELECTION = 'CLEAR_ELECTION';

export const ADD_EVENT = 'ADD_EVENT';

export const ADD_COMPLAIN = 'ADD_COMPLAIN';


export const setNewWitness = newWitness => dispatch => {
    dispatch({
        type: SET_NEW_WITNESS,
        payload: newWitness,
    });
};



export const setNewWitnessId = newWitnessID => dispatch => {
    dispatch({
        type: SET_NEW_WITNESS_ID,
        payload: newWitnessID,
    });
};



export const setNewDep = newDependant => dispatch => {
    dispatch({
        type: SET_NEW_DEPENDANT,
        payload: newDependant,
    });
};



export const setNewDepId = newDependantID => dispatch => {
    dispatch({
        type: SET_NEW_DEPENDANT_ID,
        payload: newDependantID,
    });
};




export const setVerified = verified => dispatch => {
    dispatch({
        type: SET_VERIFIED,
        payload: verified,
    });
};

 

export const setNew = newReg => dispatch => {
    dispatch({
        type: SET_NEW,
        payload: newReg,
    });
};



export const setNewID = newRegID => dispatch => {
    dispatch({
        type: SET_NEW_ID,
        payload: newRegID,
    });
};



export const removeNew = newReg => dispatch => {
    dispatch({
        type: CLEAR_NEW,
        payload: newReg,
    });
}



 



  

