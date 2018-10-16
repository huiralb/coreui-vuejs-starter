import api from "./api"

export default {
  get(query) {
    return api.get("product", { params: query })
  }
}
