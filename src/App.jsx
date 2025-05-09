import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar/Navbar'

import MovieIndex from './components/MovieIndex/MovieIndex'
import MovieShow from './components/MovieShow/MovieShow'
import MovieCreate from './components/MovieCreate/MovieCreate'
import MovieUpdate from './components/MovieUpdate/MovieUpdate'
import UserCreate from './components/UserCreate/UserCreate'
import UserLogin from './components/UserLogin/UserLogin'
import SplashPage from './components/SplashPage/SplashPage'
import Dashboard from './components/Dashboard/Dashboard'


import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

function App() {
  
  const { user } = useContext(UserContext)

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

        { user
          ? <Route path='/' element={<Dashboard />} />
          : <Route path='/' element={<SplashPage />} />
        }
     </Routes>
    </>
  )
}

export default App
