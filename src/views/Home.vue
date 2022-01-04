<template>
  <div class="home">
    <v-container fluid>
      <v-row align="center">
        <h1>Films</h1>
        <v-spacer></v-spacer>
        <v-btn class="mx-2 " fab dark small color="red">
          <v-icon dark flat>
            mdi-filter
          </v-icon>
        </v-btn>
      </v-row>

      <v-row class="justify-content-md-right">
        <v-col v-for="(film, index) in getFilms" :key="index" class="col-3">
          <router-link @click.native="addCurrentFilm(index)" style="text-decoration: none; color: inherit;"
                       to="/filmview">
            <v-card
                class="mx-auto"
            >
              <v-img
                  :src="'../assets/img/' + film.image"
                  :alt="film.image"
                  height="200px"
              ></v-img>

              <v-card-title>
                {{ film.title }}
              </v-card-title>

              <v-card-subtitle>
                <h3><b>Lenght:</b>{{ film.length }} minutes</h3>
                <h3><b>Rating:</b> {{ film.rating }}%</h3>
              </v-card-subtitle>

              <v-card-text justify="space-around" align="left">
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
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {}

  },
  computed: {
    ...mapGetters([
      "getFilms"
    ]),
  },
  methods: {
    ...mapActions([
      'currentFilm',
    ]),
    addCurrentFilm(film) {
      this.currentFilm(film);
    },
  },
  created() {
    console.log('Log', this.getImage)
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
