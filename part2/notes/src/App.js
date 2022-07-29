import React, { useState } from "react";
import Note from "./component/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes) // the component uses the useState function to initializze the piece of state stored in notes with the array of notes passed in the props
  // const [notes, setNotes] = useState([]) // start with an empty list of notes

  // controlled component
  const [newNote, setNewNote] = useState (  // store the user-submitted input 
    'a new note...'
  )

  // filtering displayed elements
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => { // event handler to the form element that will be called when the form is submitted, by clicking the submit button
    // the event that triggers the call to the event handler function
    event.preventDefault()     // prevent the default action of submitting a form (cause page to reload)
    //console.log('button clicked', event.target) 
    const noteObject = { // noteObject receive its content from the component's newNote state.
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5, // 50% chance of being marked as important
      id: notes.length + 1, // generated based on the total number of notes
    }

    setNotes(notes.concat(noteObject)) // doesn't mutate the original notes array, but rather creates a new copy of the array with the new item added to the end
    setNewNote('') // reset the value of the controlled in input elemen
  }

  // event handler that synchronizes the changes made to the input with the component's state
  const handleNoteChange = (event) => {
    console.log(event.target.value) // target property of the event object now corresponds to the controlled input element
    setNewNote(event.target.value) // event.target.value refers to the input value of that element
  }
  // Note: no need to call event.preventDefault() method like we did in the onSubmit event handler.

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange} // the event handler is called every time a change occurs in the input element
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}
export default App;