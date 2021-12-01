import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/static_pages/Home'

import LogIn from './components/pages/auth/LogIn'
import NotFound from './components/pages/static_pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/iniciar-sesion" element={<LogIn/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;