<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center">
        <h1>Films</h1>
        <v-spacer></v-spacer>
        <v-btn class="mx-2 " fab dark small color="red" to="/wishlist">
          <v-icon dark flat>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn class="mx-2 " fab dark small color="red" to="/addfilm">
          <v-icon dark flat>
            mdi-plus
          </v-icon>
        </v-btn>

        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="mx-2" fab dark small color="red"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon dark flat>
                  mdi-filter
                </v-icon>
              </v-btn>
            </template>


            <v-list>
              <h3>By Genre</h3>
              <v-list-item>
                <v-list-item-title>
                  <!--                  <v-btn v-for="genre in getFilms.genres" :key="genre">-->
                  <!--                    {{ genre | myFilter }}-->
                  <!--                  </v-btn>-->
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list>
              <h3>By Lenght</h3>
              <v-list-item>
                <v-list-item-title>
                  <v-checkbox
                      v-model="longest"
                      label="Longest"
                      color="red"
                      value="longest"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="shortest"
                      label="Shortest"
                      color="red"
                      value="shortest"
                      hide-details
                  ></v-checkbox>
                </v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list>
              <h3>By Rating</h3>
              <v-list-item>
                <v-list-item-title>
                  <v-checkbox
                      v-model="best"
                      label="Best"
                      color="red"
                      value="best"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="worst"
                      label="Worst"
                      color="red"
                      value="worst"
                      hide-details
                  ></v-checkbox>
                </v-list-item-title>
              </v-list-item>
            </v-list>

          </v-menu>
        </div>
      </v-row>

      <v-row class="justify-content-md-right">
        <v-col v-for="(film, index) in getFilms" :key="index" class="col-3">
          <router-link @click.native="addCurrentFilm(film)" style="text-decoration: none; color: inherit;"
                       :to="{name:'filmview', params: {id: film.id} }">
            <v-card
                class="mx-auto"
            >
              <v-img
                  :src="require(`../assets/img/${film.image}`)"
                  :alt="film.image"
                  height="700px"
              >
              </v-img>

              <v-card-title>
                {{ film.title }}
              </v-card-title>

              <v-card-subtitle>
                <h3><b>Lenght:</b>{{ film.length }} minutes</h3>
                <h3><b>Rating:</b> {{ film.rating }}%</h3>
              </v-card-subtitle>

              <v-card-text justify="space-around" align="center">
                <v-chip class="ma-2" small color="red" dark height="10px" v-for="genre in film.genres"
                        :key="genre">
                  {{ filmsss }}
                </v-chip>
              </v-card-text>

            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import {films} from "@/data/films";
// import FilmView from "@/views/FilmView";
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'Home',
  // components: {FilmView},
  data() {
    return {
      longest: false,
      shortest: false,
      best: false,
      worst: false,
      // films,
      // currentFilm: ['test'],
    }
  },
  computed: {
    ...mapGetters([
      'getFilms',
      "getCurrentFilm"
    ]),
    sortedArray: function() {
      function compare(a, b) {
        if (a < b)
          return -1;
        if (a > b)
          return 1;
        return 0;
      }

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.filmsss.sort(compare);
    }
    // CURRENT_FILM(film) {
    //   return this.currentFilm == film
    // }
  },
  methods: {
    ...mapMutations([
      'CURRENT_FILM',
    ]),
    addCurrentFilm(film) {
      this.CURRENT_FILM(film);
    },
  },
  filters: {
    myFilter: function (val, idx, getFilms) {
      for (var i = 0; i < idx; i++) {
        if (getFilms[i].genres === val.genres) {
          return false;
        }
      }
      return true;
    }
  },
  created() {
    // console.log('Log', this.getFilms.image)
  }
}
</script>
<style>
.home {
  overflow: hidden;
}

.chip {
  padding-left: 0;
}
</style>
