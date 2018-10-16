import ApiProduct from "@/services/product"

export default {
  state: {
    items: [],
    produk: {
      user_id: 1,
      category_id: null,
      name: null
    }
  },
  mutations: {
    update_produk(state, payload) {
      state.produk[payload.key] = payload.value
    },
    tambah_bahan_baku(state, payload) {
      state.items.push(payload)
    }
  }
}
