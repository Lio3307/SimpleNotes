import { useState, createContext, useEffect, useContext } from "react";

const NotesContext = createContext();

export function NoteProvider({ children }) {
    const [notesData, setNotesData] = useState([])

    useEffect(() => {
        const savedData = localStorage.getItem('notesData');
        if(savedData) setNotesData(JSON.parse(savedData))
    },[])

    // useEffect(() => {
    //     localStorage.setItem('notesData', JSON.stringify(notesData));
    // },[notesData])

    const addNotes = (noteTitle, noteText) => {
        const noteId = Number(Date.now());
        const newNote = { noteId, noteTitle, noteText };
    
        setNotesData(currentVal => {
            const updated = [...currentVal, newNote];
            localStorage.setItem('notesData', JSON.stringify(updated)); 
            return updated;
        });
    
        return noteId;
    };
    const updateNote = (id, newTitle, newText) => {
        setNotesData((currentVal) => {
            const updated = currentVal.map((value) =>
                value.noteId === id ? { ...value, noteTitle: newTitle, noteText: newText } : value
            );
            localStorage.setItem('notesData', JSON.stringify(updated)); 
            return updated;
        });
    };
    
    

    const removeNotes = (noteId) => {
        setNotesData((currentVal) => {
            const updated = currentVal.filter((notes) => notes.noteId !== noteId);
            localStorage.setItem('notesData', JSON.stringify(updated)); 
            return updated;
        });
    };
    
    const notesValue = {
        notesData,
        addNotes,
        removeNotes,
        updateNote
    }


    return (
        <>
            <NotesContext.Provider value={notesValue}>
                {children}
            </NotesContext.Provider>
        </>
    )
}

export const useNotesContext = () => useContext(NotesContext);