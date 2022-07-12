import { useNotesContext } from "../hooks/useNotesContext";

const NoteDetails = ({note}) => {
    
    const {dispatch} = useNotesContext();

    const handleClick = async () => {
        const response = await fetch('/notes/'+ note._id, {
            method : 'DELETE'
        })
        const json = await response.json();

        if (response.ok){
            dispatch({type : 'DELETE_NOTE', payload: json})
        }
    }
    
    return ( 
        <div className="note-details">
            <h4>{note.heading}</h4>
            <p><strong>Course Code : </strong>{note.course_id}</p>
            <p><strong>Description : </strong>{note.description}</p>
            <p className="createdat">{note.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
     );
}
 
export default NoteDetails;