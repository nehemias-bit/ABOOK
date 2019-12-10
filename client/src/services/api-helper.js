import axios from 'axios';

// const baseUrl = "https://abook-api.herokuapp.com/"

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
  const response = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const verifyUser = async () => {
  const token = localStorage.authToken;

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.get('/auth/verify')
    return response.data
  }
  return false
}

//=========Udate User===========//
export const updateUser = async (userId, userData) => {
  const response = await api.put(`/users_img/${userId}`, { user: userData });
  return response.data
}


//======Create Book===========//
export const createBook = async (bookData) => {
  const response = await api.post('/books', bookData);
  return response.data
}

//======Show Book==========//

export const showAllBooks = async () => {
  const response = await api.get('/books');
  return response.data
}

//==========One Book======//

export const getOneBook = async (id) => {
  const response = await api.get(`/books/${id}`);
  return response.data
}

//=======Delete Book========//
export const deleteBook = async (id) => {
  const response = await api.delete(`/books/${id}`);
  return response.data
}

//=======Update Book========//
export const updateABook = async (id, bookData) => {
  const response = await api.put(`/books/${id}`, bookData)
  return response.data
}


//======Create Notes=========//
export const createNotes = async (id, notes) => {
  const response = await api.post(`/books/${id}/notes`, notes);
  return response.data
}

//=======Delete Note======//
export const deleteNote = async (bookId, noteId) => {
  const response = await api.delete(`/books/${bookId}/notes/${noteId}`);
  return response.data
}

//=========Random Quote======//

export const randomQuote = async () => {
  const response = await api.get("https://quote-garden.herokuapp.com/quotes/random")
  return response.data
}