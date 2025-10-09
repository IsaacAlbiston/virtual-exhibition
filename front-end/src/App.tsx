import './App.css'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewExhibitionPage from './pages/NewExhibitionPage'
import ExhibitionsPage from './pages/ExhibitionsPage'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/new-exhibition' element={<NewExhibitionPage/>}/>
      <Route path='/exhibitions' element={<ExhibitionsPage/>}/>
    </Routes>
    </>
  )
}

export default App
