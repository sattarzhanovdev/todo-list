import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../../../API'
import cls from './AdminComponent.module.scss'

const AdminComponent = () => {
  const [ title, setTitle ] = React.useState('')
  const [ content, setContent ] = React.useState('')
  const [ date, setDate ] = React.useState('')
  const [ error, setError ] = React.useState('')

  const accessToken = localStorage.getItem('accessToken')

  const navigate = useNavigate()

  const postTodo = () => {
    if(title.length !== 0 || content.length !== 0 || date.length !== 0){
      API.createTodo(accessToken, {title, content, date})
      setError('Successfully created!')

      setTimeout(() => {
        navigate('/')
      }, 2000)
    }else{
      setError('Fill the area!')
    }
  }

  return (
    <div className={cls.container}>
      <div 
        className={error !== '' ? cls.error : cls.error_disabled}
        id={error === 'Successfully created!' ? cls.success : ''}
      >
        <li>
          {error ? error : ''}
        </li>
      </div>
      <div className={cls.admin}>
        <h4>Admin</h4>

        <hr />

        <form>
          <div>
            <input 
              type="text"
              placeholder='Title *'
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input 
              type="text"
              placeholder='Content *'
              onChange={e => setContent(e.target.value)}
            />
          </div>
          <div>
            <input 
              type="date"
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <button
            onClick={e => {
              e.preventDefault()
              postTodo()
            }}
          >
            Adding
          </button>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
        </form>
      </div>
    </div>
  )
}

export default AdminComponent