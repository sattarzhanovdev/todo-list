import axios from 'axios'

const BASE_URL = 'https://todo-itacademy.herokuapp.com/api'

export const API = {
  getTodos: (accessToken) => {
    return axios.get(`${BASE_URL}/todos`,  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    })
  },
  createTodo: (accessToken, data) => {
    return axios.post(`${BASE_URL}/todos/create`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    })
  },
  deleteTodo: (id, accessToken) => {
    return axios.delete(`${BASE_URL}/todos/${id}`,  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    })
  },
  completeTodo: (id, accessToken) => {
    return axios.get(`${BASE_URL}/todos/${id}/completed`,  {
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    })
  },
  editTodo: (id, accessToken, data) => {
    return axios.put(`${BASE_URL}/todos/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`  
      }
    })
  },
  getSingleTodo: (id, accessToken, data) => {
    return axios.put(`${BASE_URL}/todos/${id}`, data, {
      headers: {
        'Authorization': `Bearer ${accessToken}`  
      }
    })
  },
  registration: (email, password) => {
    return axios.post(`${BASE_URL}/registration`, {email, password})
  },
  login: (email, password) => {
    return axios.post(`${BASE_URL}/login`, {email, password})
  },
  signOut: (refreshToken) => {
    return axios.post(`${BASE_URL}/logout`, refreshToken)
  }
}