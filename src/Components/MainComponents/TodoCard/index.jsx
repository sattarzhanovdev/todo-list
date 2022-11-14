import React from 'react'
import { API } from '../../../API'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import cls from './TodoCard.module.scss'

const TodoCard = ({key, item, setDependence}) => {
  const accessToken = localStorage.getItem('accessToken')
  const [showInput , setShowInput] = React.useState(false)
  const [title , setTitle] = React.useState(null)
  const [newTitle , setNewTitle] = React.useState('')

  const completeTask = (id) => {
    API.completeTodo(id, accessToken)
    .then(() => setDependence('Completed'))
  }

  const deleteTask = (id) => {
    API.deleteTodo(id , accessToken)
    .then(() => setDependence('Deleted'))
  } 

  const getTitleToEdit = (id) => {
    API.getSingleTodo(id , accessToken)
    .then(res => {
      setDependence('Edited')
      setShowInput(true)
      setTitle(res)
    })
  }
  
  const editTodo = (id) => {
    API.editTodo(id , accessToken , {
      title: newTitle.length !== 0 ? newTitle : title.title,
    })
    .then(() => {
      setShowInput(false)
      setDependence('Edited')
    })
  }

  return (
    <div 
      key={key} 
      className={cls.card}
    >
      {item.completed ?
        <img 
          className={cls.completed} 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png'
        />
        :
        null
      }
      <div className={cls.card_header}>
        <h3>{item.title}</h3>
      </div>
      <div className={cls.card_body}>
        <p>
          {item.content}
        </p>
        <p className={cls.date}>{item.date}</p>
      </div>
      <div className={cls.card_input}>
        {
          showInput ? 
            <p>Change title to:</p> 
          :
            null}
        {
          showInput ?
            <input 
              type='text' 
              onChange={(e) => setNewTitle(e.target.value)} 
              placeholder='Change to new Title' 
              defaultValue={title.title}
            />
          :
            null  
        }
        {
          showInput ? (
            <div className={cls.change_btn}>
              <button onClick={() => editTodo(item.id)}>Change</button>
            </div>
          ) : null
        }
      </div>
      <div className={cls.card_footer}>
        <button onClick={() => deleteTask(item.id)}><AiFillDelete /></button>
        <button onClick={() => completeTask(item.id)}><BsFillCheckCircleFill /></button>
        <button onClick={() => getTitleToEdit(item.id)}><FaEdit /></button>
      </div>
    </div>
  )
}

export default TodoCard