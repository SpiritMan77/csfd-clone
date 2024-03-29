import Vue from 'vue'
import Vuex from 'vuex'
import * as Films from '../data/films.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: Films.films,
    categories: [],
    wishlist: [],
  },
  mutations: {
    ADD_FILM: (state, film) => {
      state.films.push(film);
    },
    ADD_WISHLIST: (state, film) => {
      state.wishlist.push(film);
    },
    REMOVE_WISHLIST: (state, index) => {
      state.wishlist.splice(index, 1);
    },
  },
  getters: {
    getFilms: state => state.films,
    getCategories: state => state.categories,
    getWishlist: state => state.wishlist,
  },
  modules: {
  }
})
