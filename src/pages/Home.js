import { useEffect, useState } from "react";
import NoteDetails from "../components/NoteDetails";
import NotesForm from "../components/NotesForm";

const Home = () => {
    const  [notes, setNotes] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
    
            const response = await fetch('/notes');
            const json = await response.json();

            if (response.ok) {
                setNotes(json);
            }
        
        }

        fetchNotes();

    }, [] )

    return ( 
        <div className="home">
            <div className="notes">
                {notes && notes.map((note)=> (
                    <NoteDetails key={note._id} note={note}/>
                ))}
            </div>
            <NotesForm/>
        </div>
     );
}
 
export default Home;