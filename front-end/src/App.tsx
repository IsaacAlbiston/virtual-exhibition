import './App.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewExhibitionPage from './pages/NewExhibitionPage'
import ExhibitionsPage from './pages/ExhibitionsPage'
import { useState } from 'react'
import type { Exhibition } from './models/Exhibitions'

function App() {

  const [exhibitions,setExhibitions] = useState<Exhibition[]>([])

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage exhibitions={exhibitions} setExhibitions={setExhibitions} />}/>
      <Route path='/new-exhibition' element={<NewExhibitionPage exhibitions={exhibitions} setExhibitions={setExhibitions} />}/>
      <Route path='/exhibitions' element={<ExhibitionsPage exhibitions={exhibitions} />}/>
    </Routes>
    </>
  )
}

export default App
