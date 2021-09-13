import axios from 'axios'
import { getToken } from './auth'

function headers() {
  return {
    headers: { authorization: `Bearer ${getToken()}` },
  }
}

// * Chat & Message Requests

export function getAllChats() {
  return axios.get('/api/chat/', headers())
}


// * Auth Requests

export function loginUser(formData) {
  return axios.post('/api/auth/login/', formData)
}

export function registerUser(formData) {
  return axios.post('/api/auth/register/', formData)
}