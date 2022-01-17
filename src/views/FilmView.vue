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
          <h3>Description: {{ getCurrentFilm.description }} </h3>
          <h3>Lenght: {{ getCurrentFilm.length }} min. </h3>
          <h3>Rating: {{ getCurrentFilm.rating }}% </h3>
          <h3>Genres:
            <v-chip class="ma-2" small color="red" dark height="10px" v-for="genre in getCurrentFilm.genres"
                    :key="genre">
              {{ genre }}
            </v-chip>
          </h3>
          <v-btn class="mx-2 " fab dark small color="red" @click.native="addWishlist(getCurrentFilm)">
            <v-icon dark flat>
              mdi-heart
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
            sm="6"
            md="5"
            offset-md="2"
            lg="6"
            offset-lg="0"
        >
          <v-img
              v-if="getCurrentFilm.image"
              height="auto"
              width="auto"
              :src="require(`../assets/img/${getCurrentFilm.image}`)"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

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
    ...mapMutations([
      'ADD_WISHLIST',
    ]),
    addWishlist(film) {
      this.ADD_WISHLIST(film)
    }
  }
}
</script>

<style scoped>

</style>
