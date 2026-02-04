import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  // state variable
  // const [notes, setNotes] = useState([
  //   {
  //     title:"test title 1",
  //     description:"test description 1"
  //   },
  //   {
  //     title:"test title 2",
  //     description:"test description 2"
  //   },
  //   {
  //     title:"test title 3",
  //     description:"test description 3"
  //   },
  //   {
    //     title:"test title 4",
    //     description:"test description 4"
    //   },
    // ]);
    
    const [notes, setNotes] = useState([])
    // ye console pe baar baar aa rha hai quki app component baar baar re-render ho rhi hai
    // jab v hum state variable ko change krte hai to uske andr jo components hota hai wo baar baar re-render hote hai
    // isse bachne ke liye humlog useEffect ka use krte hai jisme hm api ko call krte hai axios ki help seh
    console.log("hello integration");
    
    function fetchNotes(){
      axios.get("http://localhost:3000/api/notes")
        .then((res)=>{
          console.log("Notes fetched:", res.data.notes);
          setNotes(res.data.notes)
        })
  }
  useEffect(()=>{
    fetchNotes()
  },[])
  
// Created a function to submit the form
  function handleSubmit(e){
    e.preventDefault()

    const {title,description} = e.target.elements

    console.log(title.value,description.value);

    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then((res)=>{
      console.log("Note created:", res.data)
      fetchNotes()
    })
  }

  // Create a function to delete a note

  function handleDeleteNote(noteId){
    console.log(noteId);
    
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log("Note deleted:", res.data);
      fetchNotes()
    })
  }

  // create a function to update a note

  function handleUpdateNote(noteId){
    const newDescription = window.prompt("Enter new description:")
    if (!newDescription) return

    axios.patch(`http://localhost:3000/api/notes/${noteId}`, {
      description: newDescription
    })
    .then((res)=>{
      console.log("Note Updated", res.data);
      fetchNotes()
    })

  }

  return (
    <div>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create Note</button>
      </form>
      <div className="notes">
        {
          notes.map(note =>{
            return <div key={note._id} className="note">
                       <h1>{note.title}</h1>
                       <p>{note.description}</p>
                       <button onClick={() => handleDeleteNote(note._id)}>Delete Note</button>
                       <button onClick={() => handleUpdateNote(note._id)}>Update Note</button>
                    </div>
            })
        }
      </div>
    </div>
  )
}

export default App





// cors policy hmlog ko ek site se dusre site me jaane ke liye allow nhi krta hai
// api call through axios method