import { Link } from "react-router-dom"

export function AddNoteBtn() {
    return (
        <>
            <div className="container d-flex justify-content-start my-3">
                <Link 
                    to="/addNote" 
                    className="btn btn-warning shadow-sm fw-bold"
                    style={{
                        fontFamily: "'Courier New', Courier, monospace",
                        letterSpacing: "1px",
                        padding: "10px 20px",
                        border: "2px dashed #ffc107",
                        backgroundColor: "#fff8dc",
                        color: "#212529"
                    }}
                >
                    + Add Note
                </Link>
            </div>
        </>
    )
}
