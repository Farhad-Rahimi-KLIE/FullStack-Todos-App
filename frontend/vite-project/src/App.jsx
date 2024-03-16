import React from 'react'
import Todos from './Components/Todos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateMenu from './UpdateMenu'
// import UpdateMenu from './Components/UpdateMenu'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Todos/>}/>
      <Route path='/update/:id' element={<UpdateMenu/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App