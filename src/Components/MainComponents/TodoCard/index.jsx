import React from 'react'
import { API } from '../../../API'

const TodoCard = ({key, item, setMonitoring}) => {
  const accessToken = localStorage.getItem('accessToken')
  const [showInput , setShowInput] = React.useState(false)
  const [title , setTitle] = React.useState(null)
  const [newTitle , setNewTitle] = React.useState('')

  const completeTask = (id) => {
    getCompleted(id, accessToken)
    .then(() => setMonitoring('Work from comlete'))
  }

  const deleteTask = (id) => {
    API.(id , accessToken)
    .then(() => setMonitoring('Deleted!'))
  } 

  const getTitleToEdit = (id) => {
    getSingleTodo(id , accessToken)
    .then(res => {
      setMonitoring('Edited')
      setShowInput(true)
      setTitle(res)
    })
  }
  
  const editTodo = (id) => {
    getEdit(id , accessToken , {
      title: newTitle.length !== 0 && newTitle || title.title,
    })
    .then(() => {
      setShowInput(false)
      setMonitoring('Edited')
    })
  }

  return (
    <div key={item.id} className='card'>
      {item.completed && <img className='completed' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png'/>}
      <div className='card-header'>
        <h3>{item.title}</h3>
      </div>
      <div className='card-body'>
        <p>
          {item.content}
        </p>
        <p className='date'>{item.date}</p>
      </div>
      <div className='card-input'>
        {showInput && <p>Change title to:</p>}
        {showInput && <input type='text' onChange={(e) => setNewTitle(e.target.value)} placeholder='Change to new Title' defaultValue={title.title}/>}
        {
          showInput && (
            <div className='change_btn'>
              <button onClick={() => editTodo(item.id)}>Change</button>
            </div>
          )
        }
      </div>
      <div className='card-footer'>
        <button onClick={() => deleteTask(item.id)}><AiFillDelete /></button>
        <button onClick={() => completeTask(item.id)}><BsFillCheckCircleFill /></button>
        <button onClick={() => getTitleToEdit(item.id)}><FaEdit /></button>
      </div>
    </div>
  )
}

export default TodoCard