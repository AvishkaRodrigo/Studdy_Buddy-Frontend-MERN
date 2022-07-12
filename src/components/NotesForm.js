import { useState } from "react";
import {useNotesContext} from '../hooks/useNotesContext'

const NotesForm = () => {
    
    const {dispatch} = useNotesContext();

    const [heading, setHeading] = useState('');
    const [course_id, setCourse_id] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const note = {heading, course_id, description};


        const response = await fetch('/notes',{
            method : 'POST',
            body : JSON.stringify(note),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        
        const json = await response.json();

        if (!response.ok){
            setError(json.error);
        }
        if (response.ok){
            setError(null);
            console.log('new note added', json);
            setHeading('');
            setCourse_id('');
            setDescription('');
            dispatch({type : 'CREATE_NOTE', payload : json})
        }

        
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            
            <div className="field">
                <h3>Add a new note</h3>
            </div>
            
                <label>Note heading : </label>
            <div className="field">
                <input
                    type="text"
                    onChange={(e) => setHeading(e.target.value)}
                    value={heading}
                />
            </div>

                <label>Course Code : </label>
            <div className="field">
                <input
                    type="number"
                    onChange={(e) => setCourse_id(e.target.value)}
                    value={course_id}
                />
            </div>

                <label>Description : </label>
            <div className="field">
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
            </div>

            <div className="field">
                <button>
                    Add Note
                </button>
            </div>

            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default NotesForm;