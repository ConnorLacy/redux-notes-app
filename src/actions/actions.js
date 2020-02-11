/*
    Action describes WHAT happened
*/

/*
    Exporting this to use in several other places later.
    Better idea to define it here if you'd like to change it at a later point
*/
export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SHOW_ALL = 'SHOW_ALL';

/*
    This function is an ACTION-CREATOR. That means it returns a plain object
    It only defines WHAT changed, not HOW
*/
export function addNote(title, content){
    return {type: ADD_NOTE, title: title, content: content };
}

export function removeNote(id){
    return {type: REMOVE_NOTE, id: id};
}

export function showAll(){
    return {type: SHOW_ALL};
}