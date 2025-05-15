import { useParams } from "react-router-dom"
import { useNotesContext } from "../utils/notesContext"
import { useEffect, useState } from "react"
import { BackButton } from "../components/BackButton"
import { useNavigate } from "react-router-dom"


export function EditNote() {
    const { noteId } = useParams()
    const { notesData, updateNote } = useNotesContext()
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')

    const matchingNote = notesData.find((note) => Number(note.noteId) === Number(noteId))
    const navigate = useNavigate()


    useEffect(() => {
        if (matchingNote) {
            setNewTitle(matchingNote.noteTitle)
            setNewText(matchingNote.noteText)
        }
    }, [matchingNote])


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!newTitle.trim() || !newText.trim()) {
            alert("Semua field harus diisi.");
            return;
        }
        updateNote(matchingNote.noteId, newTitle, newText)
        alert("Update berhasil!!")
        navigate(`/note/${matchingNote.noteId}`)

    }

    return (
        <>
            {matchingNote ? (
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="my-1">
                            <input
                                value={newTitle}
                                onChange={(e) => {
                                    if(!e.target.value.trim()) {
                                        alert("Field Title harus diisi.");
                                        return
                                    }
                                    setNewTitle(e.target.value)
                                }}
                                type="text" />
                        </div>

                        <div className="my-1">
                            <textarea
                                className="form-control"
                                rows="10"
                                style={{
                                    fontFamily: "'Courier New', Courier, monospace",
                                    backgroundColor: "#fff8dc", // seperti warna kertas
                                    border: "1px solid #ccc",
                                    padding: "1rem",
                                    resize: "vertical"
                                }}
                                value={newText}
                                onChange={(e) => {
                                    if(!e.target.value.trim()) {
                                        alert("Field text harus diisi.");
                                        return
                                    }
                                    setNewText(e.target.value)}}

                                placeholder="Tulis catatan di sini..."
                            />
                        </div>
                        <button
                            style={{
                                fontFamily: "'Courier New', Courier, monospace",
                                letterSpacing: "1px",
                                padding: "10px 20px",
                                border: "2px dashed #ffc107",
                                backgroundColor: "#fff8dc",
                                color: "#212529"
                            }}
                            className="btn btn-warning my-2 shadow-sm fw-bold"
                        >Update</button>

                        <BackButton styleValue={{
                            fontFamily: "'Courier New', Courier, monospace",
                            letterSpacing: "1px",
                            padding: "10px 20px",
                            border: "2px dashed rgb(255, 7, 7)",
                            backgroundColor: "#fff8dc",
                            color: "#212529"
                        }}
                            classNameValue={"btn btn-warning shadow-sm m-2 fw-bold"}
                            textValue={"Cancel Editing"} />

                    </form>
                </div>

            ) : (<div className="container d-flex justify-content-center align-items-center">Tidak ada Catatan</div>)}
        </>
    )
}