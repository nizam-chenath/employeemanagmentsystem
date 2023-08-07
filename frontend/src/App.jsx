import { useState } from 'react'

import './App.css'
import Login from './Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'

function App() {
  

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
