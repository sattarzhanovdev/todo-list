import React from 'react'
import {API} from '../../../API'
import { Link, useNavigate } from 'react-router-dom';
import cls from './RegisterComponent.module.scss'

const RegisterComponent = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const [ alertActive, setAlertActive] = React.useState(false)

  const navigate = useNavigate()
  
  const handleRegister = () => {
    API.registration(email , password)
      .then(res => {
        setAlertActive(true)
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('refreshToken', res.refreshToken)
        localStorage.setItem('isActivated' , res.user.isActivated)
        localStorage.setItem('user' , JSON.stringify(res.user)) 

        setTimeout(() => {
          navigate('/auth/login')
        }, 2000)
      })
  }

  return (
    <div className={cls.container}>
      <div className={cls.register_card}>
        <h4>Registration</h4>

        <hr />

        <form>
          <div>
            <input 
              type='email' 
              placeholder='Email *' 
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input 
              type='password' 
              placeholder='Password *' 
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={cls.register_btn}>
            <button
              onClick={e => {
                e.preventDefault()
                handleRegister()
              }}
            >
              Registration
            </button>
          </div>
        </form>
        
        {
          alertActive ?
          <div className={cls.alert}>
            <div>На вашу почту отправлено, ссылка на активацию аккаунта</div>
            <p>Прежде чем перейти на Главную, активируйте аккаунт</p>
          </div>
          :
          null
        }

        <div className={cls.link_register}>
          <Link to='/auth/login'>Have already an account</Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent