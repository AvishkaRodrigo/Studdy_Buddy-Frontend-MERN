import { useEffect} from "react";
import { useNotesContext } from "../hooks/useNotesContext";

import NoteDetails from "../components/NoteDetails";
import NotesForm from "../components/NotesForm";

const Home = () => {

    const {notes, dispatch} = useNotesContext()

    useEffect(() => {
        const fetchNotes = async () => {
    
            const response = await fetch('/notes');
            const json = await response.json();

            if (response.ok) {
                dispatch({type : 'SET_NOTES', payload: json})
            }
        
        }

        fetchNotes();

    }, [dispatch] )

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