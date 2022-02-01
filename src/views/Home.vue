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

              </v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list>
            <h3>By Lenght</h3>
            <v-list-item>
              <v-list-item-title>
                <v-btn v-on:click="filterBy('lenght')">
                  Length
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <v-list>
            <h3>By Rating</h3>
            <v-list-item>
              <v-list-item-title>
                <v-btn v-on:click="filterBy('rating')">Rating
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>

      <v-row class="justify-content-md-right">
        <v-col v-for="film in getFilms" :key="film.id" class="col-3">
          <router-link style="text-decoration: none; color: inherit;"
                       :to="{name: 'filmview', params: {film: film, id: film.id}  }">
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
                <h3><b>Lenght:</b>{{ film.time }} minutes</h3>
                <h3><b>Rating:</b> {{ film.rating }}%</h3>
              </v-card-subtitle>

              <v-card-text justify="space-around" align="center">
                <v-chip class="ma-2" small color="red" dark height="10px" v-for="genre in film.genres"
                        :key="genre">
                  {{ genre }}
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
import {mapGetters} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      sortDirection: 'ASC',
      longest: false,
      shortest: false,
      best: false,
      worst: false,
      outGenres: [],
    }
  },
  computed: {
    ...mapGetters([
      'getFilms',
    ]),
  },
  methods: {
    filterBy(by) {
      if (by == this.sortBy) {
        if (this.sortDirection == 'ASC') {
          this.sortDirection = 'DESC';
        } else {
          this.sortDirection = 'ASC';
        }
      }

      if (by != this.sortBy) {
        this.sortDirection = 'ASC';
        this.sortBy = by;
      }

      switch (this.sortBy) {
        case 'lenght':
          this.sortFilmsByLength();
          break;
        case 'rating':
          this.sortFilmsByRate();
          break;
      }
    },
    sortFilmsByLength() {
      this.getFilms.sort(function (a, b) {
        if (this.sortDirection == 'ASC') {
          return parseInt(a.time) < parseInt(b.time) ? 1 : -1;
        }

        if (this.sortDirection == 'DESC') {
          return parseInt(a.time) > parseInt(b.time) ? 1 : -1;
        }
      }.bind(this));
    },

    sortFilmsByRate() {
      this.getFilms.sort(function (a, b) {
        if (this.sortDirection == 'ASC') {
          return parseInt(a.rating) < parseInt(b.rating) ? 1 : -1;
        }

        if (this.sortDirection == 'DESC') {
          return parseInt(a.rating) > parseInt(b.rating) ? 1 : -1;
        }
      }.bind(this));
    }
  },
}
</script>
<style>
.home {
  overflow: hidden;
}
</style>
