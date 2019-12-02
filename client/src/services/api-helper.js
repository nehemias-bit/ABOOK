import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

//=======Register User=========//
export const registerUser = async (formData) => {
  const response = await api.post("/users", { user: formData });
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

//=======Login============//
export const loginUser = async (loginData) => {
  const response = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}