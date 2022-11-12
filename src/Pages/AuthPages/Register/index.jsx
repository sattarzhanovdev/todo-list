import React from 'react'
import RegisterComponent from '../../../Components/AuthComponents/RegisterComponent'
import cls from './Register.module.scss'

const Register = () => {
  return (
    <div className={cls.auth}>
      <RegisterComponent />
    </div>
  )
}

export default Register