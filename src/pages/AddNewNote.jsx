import { useState } from "react"
import { useNotesContext } from "../utils/notesContext"
import { useNavigate } from "react-router-dom"
import { BackButton } from "../components/BackButton"

export function AddNewNote() {
    const { addNotes } = useNotesContext()
    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('')
    const navigate = useNavigate()

    return (
        <div className="container py-4">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    if (!noteTitle.trim() || !noteText.trim()) {
                        alert("Semua field harus diisi.");
                        return;
                    }

                    const newNoteId = addNotes(noteTitle, noteText)
                    alert("Catatan berhasil ditambahkan.")
                    setNoteTitle('')
                    setNoteText('')
                    navigate(`/note/${newNoteId}`)
                    
                }}
            >
                <div className="mb-3">
                    <label className="form-label">Note Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={noteTitle}
                        onChange={(e) => setNoteTitle(e.target.value)}
                        placeholder="Judul Catatan"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Note Text</label>
                    <textarea
                        className="form-control"
                        rows="10"
                        style={{
                            fontFamily: "'Courier New', Courier, monospace",
                            backgroundColor: "#fff8dc", 
                            border: "1px solid #ccc",
                            padding: "1rem",
                            resize: "vertical"
                        }}
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Tulis catatan di sini..."
                    />
                </div>

                <button type="submit" style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    letterSpacing: "1px",
                    padding: "10px 20px",
                    border: "2px dashed rgb(0, 139, 2)",
                    backgroundColor: "#fff8dc",
                    color: "#212529"
                }} className="btn btn-success shadow-sm m-1 fw-bold">Add</button>
                <BackButton 
                styleValue={{
                    fontFamily: "'Courier New', Courier, monospace",
                    letterSpacing: "1px",
                    padding: "10px 20px",
                    border: "2px dashed rgb(255, 7, 7)",
                    backgroundColor: "#fff8dc",
                    color: "#212529"
                }}
                classNameValue={"btn btn-warning shadow-sm m-1 fw-bold"} 
                textValue={"Back To List"} />
            </form>
        </div>
    )
}
