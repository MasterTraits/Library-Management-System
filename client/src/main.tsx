import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from "@nextui-org/react";
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Students from './pages/Students'
import Books from './pages/Books'
import Borrowing from './pages/Borrowing'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <NextUIProvider>
          <Routes>
            <Route path="/" element={<Students />} />
            <Route path="/books" element={<Books />} />
            <Route path="/borrowing" element={<Borrowing />} />
          </Routes>
        </NextUIProvider>
      </BrowserRouter>
  </StrictMode>
)
  