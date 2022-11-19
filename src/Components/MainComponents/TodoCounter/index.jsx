import React from 'react'
import { API } from '../../../API'
import TodoCard from '../TodoCard'
import { ImFileEmpty } from 'react-icons/im'
import cls from './TodoCounter.module.scss'

const TodoCounter = () => {
  const [dependence, setDependence] = React.useState('')
  const [base, setBase] = React.useState(null)

  const accessToken = localStorage.getItem('accessToken')

  React.useEffect(() => {
    API.getTodos(accessToken)
      .then(res => {
        setBase(res.data)
        setDependence('HELLO')
      })
  }, [dependence])

  return (
    <div className={cls.todoCounter}>
      <h1>Todo count: <span>{base && base?.todosCount}</span></h1>

      <div className={cls.todos}>
        {
          base?.todosCount !== 0 ? 
          base?.todos.map((item, i) => (
            <TodoCard
              key={i} 
              item={item} 
              setDependence={setDependence}
            />
          ))
          :
          <h1>
            <ImFileEmpty />
          </h1>
        }
      </div>
    </div>
  )
}

export default TodoCounter