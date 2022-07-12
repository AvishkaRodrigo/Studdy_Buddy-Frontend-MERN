const NoteDetails = ({note}) => {
    return ( 
        <div className="note-details">
            <h4>{note.heading}</h4>
            <p><strong>Course Code : </strong>{note.course_id}</p>
            <p><strong>Description : </strong>{note.description}</p>
        </div>
     );
}
 
export default NoteDetails;