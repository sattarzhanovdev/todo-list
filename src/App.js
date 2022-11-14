import React from 'react'
import './App.scss'
import { MainComponents } from './Components/MainComponents'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthPages } from './Pages/AuthPages'
import { MainPages } from './Pages/MainPages'

const App = () => {
  const accessToken = localStorage.getItem('accessToken')

  const navigate = useNavigate()

  React.useEffect(() => {
    accessToken ? navigate('/') : navigate('/auth/login')
  }, [accessToken])

  return (
    <div>
      <MainComponents.Component.Header />
      <Routes>
        <Route 
          path='/'
          element={<MainPages.Pages.Main />}
        />
        <Route 
          path='/admin'
          element={<MainPages.Pages.Admin />}
        />
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