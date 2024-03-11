import axios from "axios";

const URL = 'http://127.0.0.1:8000/'

export const createUser = (userData) => axios.post(`${URL}auth/users/`, userData)