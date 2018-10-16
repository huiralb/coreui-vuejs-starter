import axios from "axios"

const api = axios.create({
  baseURL: location.origin + "/api"
})

export default api
