<template>
  <div class="film-view">
    <v-container>
      <v-row no-gutters>
        <v-col
            sm="6"
            md="5"
            lg="6"
        >
          <h3>Title: {{ getCurrentFilm.title }} </h3>
          <h3>Description: {{ getCurrentFilm.description  }} </h3>
          <h3>Lenght: {{ getCurrentFilm.length }} min. </h3>
          <h3>Rating: {{ getCurrentFilm.rating }}% </h3>
          <h3 >Genres: {{ genres}} </h3>



        </v-col>
        <v-col
            sm="6"
            md="5"
            offset-md="2"
            lg="6"
            offset-lg="0"
        >
          <v-img
              lazy-src=""
              max-height="300"
              max-width="500"
              src="../assets/img/john_wick.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "FilmView",
  props: ['film'],
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'getCurrentFilm'
    ]),
  },
  methods: {
    // getGenres() {
    //   for genre in this.getCurrentFilm
    //
    // }
  }
}
</script>

<style scoped>

</style>
