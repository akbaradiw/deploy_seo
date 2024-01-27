import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Helmet } from 'react-helmet'
// import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(()=>import('./pages/HomePage'))

function App() {
  // const [ count, setCount ] = useState( 0 )

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
