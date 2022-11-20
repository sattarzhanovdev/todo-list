import React from 'react'
import {API} from '../../../API'
import { Link, useNavigate } from 'react-router-dom';
import cls from './LoginComponent.module.scss'

const LoginComponent = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  
  const navigate = useNavigate()

  const handleLogin = () => {
    if(email.length !== 0 && password.length !== 0){
      API.login(email , password)
        .then(res => {
          localStorage.setItem('accessToken', res.accessToken)
          localStorage.setItem('refreshToken', res.refreshToken)
          localStorage.setItem('user' , JSON.stringify(res.user))
          localStorage.setItem('isActivated' , res.user.isActivated)

          setTimeout(() => {
            navigate('/')
          }, 2000);
        })
    }
  }

  return (
    <div className={cls.container}>
      <div className={cls.register_card}>
        <h4>Authorization</h4>

        <hr />

        <form>
          <div>
            <input type='email' placeholder='Email *' defaultValue={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <input type='password' placeholder='Password *' defaultValue={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className={cls.register_btn}>
            <button 
              onClick={e => {
                e.preventDefault()
                handleLogin()
              }}
              className={cls.btn_primary}
            >
              Authotization
            </button>
          </div>
        </form>

        <div className={cls.link_register}>
          <Link to='/auth/register'>Create a new account</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent