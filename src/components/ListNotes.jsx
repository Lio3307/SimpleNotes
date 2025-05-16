import { Link } from "react-router-dom"
import { useNotesContext } from "../utils/notesContext"

export function ListNotes() {
    const { notesData, removeNotes } = useNotesContext()
    const handleRemove = (id) => {
        const confirmDelete = window.confirm("Are you sure to delete this note?");
        if (!confirmDelete) return
        removeNotes(id)
    }
    return (
        <>
            <div className="container d-flex flex-column">
                {notesData.length > 0 ? (notesData.map((notes) => (
                    <div
                        className="card my-2 shadow-sm"
                        key={notes.noteId}
                        style={{
                            backgroundColor: "#fff8dc", // warna seperti kertas
                            fontFamily: "'Courier New', Courier, monospace",
                            borderLeft: "5px solid #ffc107" // aksen warna sticky note
                        }}
                    >
                        <div className="card-body">
                            <h5 className="card-title">{notes.noteTitle}</h5>
                            <p
                                className="card-text text-truncate"
                                style={{ maxWidth: "100%", whiteSpace: "nowrap" }}
                            >
                                {notes.noteText}
                            </p>
                            <Link
                                className="btn btn-sm mx-1 btn-outline-primary"
                                to={`/note/${Number(notes.noteId)}`}
                            >
                                View Details
                            </Link>


                            <Link
                                to={`/note/editNote/${Number(notes.noteId)}`}
                                className="btn btn-sm mx-1 btn-outline-warning">Edit</Link>


                            <button
                                className="btn btn-sm mx-1 btn-outline-danger"
                                onClick={() => handleRemove(notes.noteId)}
                            >Delete</button>
                        </div>
                    </div>
                ))) : <h3 className="text-center">Tidak Ada Catatan</h3>}
            </div>
        </>
    )
}
