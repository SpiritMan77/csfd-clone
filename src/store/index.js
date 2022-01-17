import Vue from 'vue'
import Vuex from 'vuex'
import * as Films from '../data/films.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: Films.films,
    currentFilm: {},
    categories: [],
    wishlist: [],
  },
  mutations: {
    ADD_FILM: (state, film) => {
      state.films.push(film);
    },
    CURRENT_FILM: (state, film) => {
      state.currentFilm = film;
    },
    ADD_WISHLIST: (state, film) => {
      state.wishlist.push(film);
    },
    REMOVE_WISHLIST: (state, index) => {
      state.films.splice(index, 1);
    },
  },
  getters: {
    getFilms: state => state.films,
    getCurrentFilm: state => state.currentFilm,
    getCategories: state => state.categories,
    getWishlist: state => state.wishlist,
  },
  modules: {
  }
})
