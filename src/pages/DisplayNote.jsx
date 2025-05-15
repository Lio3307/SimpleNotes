import { useParams } from "react-router-dom"
import { useNotesContext } from "../utils/notesContext"
import { BackButton } from "../components/BackButton"

export function DisplayNote() {
    const { notesData } = useNotesContext()
    const { noteId } = useParams()

    const matchNote = notesData.find(
        note => Number(note.noteId) === Number(noteId)
    )

    return (
        <div className="container py-4">
            {matchNote ? (
                <>
                    <div
                        className="p-4 shadow-sm rounded mb-3"
                        style={{
                            backgroundColor: "#fff8dc", // seperti warna kertas
                            border: "2px dashed #ffc107",
                            fontFamily: "'Courier New', Courier, monospace",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        <h3 className="fw-bold mb-3 ">{matchNote.noteTitle}</h3>
                        <p className="text-dark">{matchNote.noteText}</p>
                    </div>

                    <BackButton
                        textValue="Back To List"
                        classNameValue="btn btn-warning shadow-sm m-1 fw-bold"
                        styleValue={{
                            fontFamily: "'Courier New', Courier, monospace",
                            letterSpacing: "1px",
                            padding: "10px 20px",
                            border: "2px dashed rgb(255, 7, 7)",
                            backgroundColor: "#fff8dc",
                            color: "#212529"
                        }}
                    />
                </>
            ) : (
                <h4 className="text-center text-danger mt-5">Data tidak ada</h4>
            )}
        </div>
    )
}
