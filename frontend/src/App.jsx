import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import WelcomePage from './pages/WelcomePage'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import useAuthStore from './stores/useAuthStore'
import { Loader } from 'lucide-react'
import { ThemeProvider } from './Theme-provider'

const App = () => {


  const {authUser, isCheckingCurrenUser, getCurrentUser} =useAuthStore()

  useEffect(() => {
    getCurrentUser()
  },[getCurrentUser])

  if(!authUser && isCheckingCurrenUser){
    return(
      <div className='flex justify-center items-center h-screen'>
        <Loader className='animate-spin' size={30} />
      </div>
    )
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
      <Toaster/>
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={!authUser?<WelcomePage/>:<HomePage/>} />
          <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to={"/"}/>} />
          <Route path='/signup' element={!authUser?<RegisterPage/>:<Navigate to={"/"}/>} />
        </Route>
      </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App