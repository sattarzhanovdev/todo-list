import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cls from './Header.module.scss'
import {GoSignOut} from 'react-icons/go'
import {MdAdminPanelSettings} from 'react-icons/md'
import {RiMenu3Line} from 'react-icons/ri'
import { API } from '../../../API'

const Header = () => {
  const [toggle , setToggle] = React.useState(false)
  const user = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const navigate = useNavigate()

  const signOut = () => {
    API.signOut(refreshToken)
      .then(() => {
        localStorage.clear()
        setToggle(!toggle)
        navigate('/auth/register')
      })
  }

  return (
    <nav className={toggle ? cls.toggle : ''}>
      <div className={cls.navbar}>
        <div>
          <Link to='/'>TODO API</Link>
        </div>

      <div className={toggle ? cls.active : cls.buttons}>
        <Link 
          onClick={() => setToggle(!toggle)} 
          to='/admin' 
          className={cls.green}
        >
          <MdAdminPanelSettings /> Admin 
        </Link>
        <Link
          onClick={() => signOut()}
          className={cls.red}
        >
          <GoSignOut/> Sign out
        </Link>
       </div>

        {
          user ? (
            <div className={cls.burger}>
              <RiMenu3Line onClick={() => setToggle(!toggle)}/>
            </div>
          )
          : null
        }
      </div>
    </nav>
  )
}

export default Header