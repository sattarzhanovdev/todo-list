const BASE_URL = 'https://todo-itacademy.herokuapp.com/api'

export const API = {
  getTodos: (accessToken) => {
    return fetch(`${BASE_URL}/todos`, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
  },
  createTodo: (accessToken, data) => {
    return fetch(`${BASE_URL}/todos/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  },
  deleteTodo: (id, accessToken) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
    })
      .then(res => res.json())
  },
  completeTodo: (id, accessToken) => {
    return fetch(`${BASE_URL}/todos/${id}/completed`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
    })
      .then(res => res.json())
  },
  editTodo: (id, accessToken, data) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  },
  getSingleTodo: (id, accessToken, data) => {
    return fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  },
  registration: (email, password) => {
    return fetch(`${BASE_URL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
  },
  login: (email, password) => {
    return fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => res.json())
  },
  signOut: (refreshToken) => {
    return fetch(`${BASE_URL}/logout`, {
      method:'POST',
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify(refreshToken)
    })
      .then(res => res.json())
  }
}