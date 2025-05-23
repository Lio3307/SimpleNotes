// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddNewNote } from "./pages/AddNewNote";
import { AddNoteBtn } from "./components/AddNoteBtn";
import { ListNotes } from "./components/ListNotes";
import { DisplayNote } from "./pages/DisplayNote";
import { EditNote } from "./pages/EditNote";
import { HomeHeader } from "./components/HomeHeader";
import { useNotesContext } from "./utils/notesContext";
import { useState, } from "react";

function App() {
  const { notesData } = useNotesContext()
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState()

  const handleSearch = (e) => {
    e.preventDefault()
    const result = notesData.filter((note) =>
      note.noteTitle.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(result)
  }

  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/"
          element={
            <>
              <HomeHeader />
              <AddNoteBtn />
              <form onSubmit={handleSearch} className="my-3 container">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari judul catatan..."
                    value={searchValue}
                    style={{
                      boxShadow: 'none',
                      outline: 'none'
                    }}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button className="btn btn-success" type="submit">
                    Search
                  </button>
                </div>
              </form>

              {filteredData ? (
                filteredData.length > 0 ? (
                  <ListNotes data={filteredData} />
                ) : (
                  <p className="text-center">Tidak ada data yang dicari</p>
                )
              ) : (
                <ListNotes data={notesData} />
              )}
            </>
          }
        />
        <Route path="/note/editNote/:noteId" element={<EditNote />} />
        <Route path="/note/:noteId" element={<DisplayNote />} />

        <Route path="/addNote" element={<AddNewNote />} />
      </Routes>
    </>
  )
}


export default App


