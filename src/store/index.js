import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    wishlist: [],
  },
  mutations: {
    ADD_FILM: (state, film) => {
      state.films.push(film);
    },
    ADD_WISHLIST: (state, film) => {
      state.wishlist = film;
    },
    REMOVE_WISHLIST: (state, index) => {
      state.films.splice(index, 1);
    },
  },
  getters: {
    getCategories: state => state.categories,
    getWishlist: state => state.wishlist,
  },
  modules: {
  }
})
