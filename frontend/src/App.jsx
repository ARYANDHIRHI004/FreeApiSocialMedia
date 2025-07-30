import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import WelcomePage from './pages/WelcomePage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<WelcomePage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App