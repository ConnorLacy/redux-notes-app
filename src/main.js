import store from './store/store';
import { addNote, removeNote } from './actions/actions';

console.log('Before:', store.getState());
store.dispatch(addNote('One', 'One Content'));
store.dispatch(addNote('Two', 'Two Content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState());

// ----HTML references-----
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ----- Redux ------
function deleteNote(index){
    store.dispatch(removeNote(index))
    console.log('Deleted note: ', index)
}

store.subscribe(() => {
    renderNotes();
});

function renderNotes(){
    let notes = store.getState().notes;

    notesUList.innerHTML = '';
    notes.map((note, index) => {
        let noteItem = `
        <li>
            <b>${note.title}</b>
            <button data-id="${index}">x</button>
            <br />
            <span>${note.content}</span>
        `;
        notesUList.innerHTML += noteItem;
    })
    setDeleteNoteButtonsEventListeners();
}

// ----- Event Listeners -----
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNote(title, content));
    console.log('Title:', addNoteTitle.valueOf, 'Content:', addNoteContent.value)
});

function setDeleteNoteButtonsEventListeners(){
    let buttons = document.querySelectorAll('ul#notes li button');

    for(let button of buttons){
        button.addEventListener('click', () => {
            deleteNote(button.dataset.id);
        });
    }
}

// ----Render the initial notes----
renderNotes();