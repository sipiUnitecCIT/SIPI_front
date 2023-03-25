import axios from "axios"
import config from "../config"

const { API_URL } = config

const API = axios.create({
  baseURL: API_URL
})

export default API;