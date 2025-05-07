import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'

import MovieIndex from './components/MovieIndex/MovieIndex'
import MovieShow from './components/MovieShow/MovieShow'
import MovieCreate from './components/MovieCreate/MovieCreate'
import MovieUpdate from './components/MovieUpdate/MovieUpdate'


function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/movies" element={< MovieIndex />}/>
        <Route path="/movies/:movieId" element={< MovieShow />}/>
        <Route path="/movies/new" element={<MovieCreate />}/>
        <Route path="/movies/:movieId/edit" element={<MovieUpdate />}/>
     </Routes>
    </>
  )
}

export default App
