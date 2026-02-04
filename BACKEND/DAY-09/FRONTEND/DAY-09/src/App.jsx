import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {

    const [notes, setNotes] = useState([
      {
        title:"test title 1",
        description:"test desc 1"
      },
      {
        title:"test title 2",
        description:"test desc 2"
      },
      {
        title:"test title 3",
        description:"test desc 3"
      },
      {
        title:"test title 4",
        description:"test desc 4"
      },
    ]);

    axios.get("http://localhost:300/api/notes")
    .then((res)=>{
      // console.log(res.data);
      setNotes(res.data.notes)
      
    })

  return (
    <div>
      <div className="notes">
        {
          notes.map(note =>{
            return <div className="note">
                     <h1>{note.title}</h1>
                     <p>{note.description}</p>
                     </div>
          })
        }
      </div>
    </div>
  )
}


export default App
 