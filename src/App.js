import React from 'react'
import './App.scss'
import { MainComponents } from './Components/MainComponents'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthPages } from './Pages/AuthPages'

const App = () => {
  const accessToken = localStorage.getItem('accessToken')

  const navigate = useNavigate()

  React.useEffect(() => {
    accessToken ? navigate('/') : navigate('/auth/login')
  }, [])

  return (
    <div>
      <MainComponents.Component.Header />
      <Routes>
        <Route 
          path='/auth/register' 
          element={<AuthPages.Pages.Register />}
        />
        <Route 
          path='/auth/login'
          element={<AuthPages.Pages.Login />}
        />
      </Routes>
    </div>
  )
}

export default App