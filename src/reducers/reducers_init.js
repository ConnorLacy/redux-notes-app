import { ADD_NOTE, REMOVE_NOTE } from '../actions/actions';

/*
    Initial state object of reducer
    This will be specific to reducer, but in this case represents 
    state of the whole application
*/

const intialState = {
    notes: []
};

/* 
    Accepts previous state and action being dispatched
    Never modify state directly -- return new object (immutable)
*/
function rootReducer(state = intialState, action){
    switch(action.type){
        case ADD_NOTE:
            //Return new state: Old state with new element
            return {
                notes: [
                    ...state.notes,
                    {
                        title: action.title,
                        content: action.content
                    }
                ]
            };
        case REMOVE_NOTE:
            //Return new object with all the notes except the id from the removal action
            return {
                notes: state.notes.filter((note, index) => index != action.id)
            };
        default:
            return state;
    };
}

export default rootReducer;