import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config'

function headers() {
  return {
    headers: { authorization: `Bearer ${getToken()}` },
  }
}

// * User Requests

export function getAllUsers() {
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}

export function likeUser(likedUserId, userId) {
  return axios.post(`${baseUrl}/auth/${likedUserId}/like/`, userId, headers())
}

// * Chat & Message Requests

export function getAllChats() {
  return axios.get(`${baseUrl}/chat/`, headers())
}

export function getAllMessages() {
  return axios.get(`${baseUrl}/chat/message`, headers())
}

export function sendMessage(chatId, formData) {
  return axios.post(`${baseUrl}/chat/${chatId}/message/`, formData, headers())
}


// * Auth Requests

export function loginUser(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export function registerUser(formData) {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}