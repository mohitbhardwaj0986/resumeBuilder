import React from 'react'
import FormPage from './pages/FormPage'
import ResumePreview from './pages/ResumePreview'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<FormPage/>} />
      <Route path='/preview' element={ <ResumePreview/>} />

    </Routes>
      
    
    </>
  )
}

export default App