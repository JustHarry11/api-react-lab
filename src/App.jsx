import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'

import MovieIndex from './components/MovieIndex/MovieIndex'
import MovieShow from './components/MovieShow/MovieShow'
import MovieCreate from './components/MovieCreate/MovieCreate'
import MovieUpdate from './components/MovieUpdate/MovieUpdate'
import UserCreate from './components/UserCreate/UserCreate'
import UserLogin from './components/UserLogin/UserLogin'


function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/movies" element={< MovieIndex />}/>
        <Route path="/movies/:movieId" element={< MovieShow />}/>
        <Route path="/movies/new" element={<MovieCreate />}/>
        <Route path="/movies/:movieId/edit" element={<MovieUpdate />}/>
        <Route path="/register" element={<UserCreate />}/>
        <Route path="/login" element={<UserLogin />}/>
     </Routes>
    </>
  )
}

export default App
