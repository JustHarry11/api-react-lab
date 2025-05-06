import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'

import MovieIndex from './components/MovieIndex/MovieIndex'
import MovieShow from './components/MovieShow/MovieShow'

function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/movies" element={< MovieIndex />}/>
        <Route path="/movies/:movieId" element={< MovieShow />}/>
     </Routes>
    </>
  )
}

export default App
