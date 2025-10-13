import './App.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewExhibitionPage from './pages/NewExhibitionPage'
import ExhibitionsPage from './pages/ExhibitionsPage'
import ExhibitionPage from './pages/ExhibitionPage'
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
      <Route path='/exhibitions/:exhibitionIndex' element={<ExhibitionPage exhibitions={exhibitions} />} />
    </Routes>
    </>
  )
}

export default App
