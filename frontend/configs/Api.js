import axios from "axios"

export const endpoints = {
    'medicine':  '/medicine/',
    "oauth2-info":"/oauth2-info",
    "login":"/o/token/",
    "current_user":"/users/current-user/",
    "users":"/users/",
    "examination-schedule":'/examination_schedule/',
    'medicine-detail': (medicineId) => `/medicine/${medicineId}/`,
    'like-medicine': (medicineId) => `/medicine/${medicineId}/like/`,
    'rate-medicine': (medicineId) => `/medicine/${medicineId}/rating/`,
    'patient': '/patient/',
    'bill': '/bill/',
    'medicine-comments': (medicineId) => `/medicine/${medicineId}/comments/`,
    'comments': '/comments/'
}

export const authAxios = (accessToken) => axios.create({
    baseURL:"http://10.0.2.2:8000/",
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL:"http://10.0.2.2:8000/"
    //172.17.204.149:8081
})