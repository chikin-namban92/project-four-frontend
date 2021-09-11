import axios from 'axios'

// function headers() {
//   return {
//     headers: { authorization: `Bearer ` },
//   }
// }

// * Auth Requests

export function loginUser(formData) {
  return axios.post('/api/auth/login/', formData)
}

export function registerUser(formData) {
  return axios.post('/api/auth/register/', formData)
}