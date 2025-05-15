import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { NoteProvider } from './utils/notesContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <App />
      </NoteProvider>
    </BrowserRouter>
  </StrictMode>
)
