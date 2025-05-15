// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AddNewNote } from "./pages/AddNewNote";
import { AddNoteBtn } from "./components/AddNoteBtn";
import { ListNotes } from "./components/ListNotes";
import { DisplayNote } from "./pages/DisplayNote";
import { EditNote } from "./pages/EditNote";
import { HomeHeader } from "./components/HomeHeader";

function App() {


  return (
    <>



      {/* Routes */}

      <Routes>

        <Route path="/" element={
          <>
            <HomeHeader/>
            <AddNoteBtn />
            <ListNotes />
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


