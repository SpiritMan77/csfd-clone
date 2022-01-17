<template>
  <div class="wishlist">
    <h1>Wishlist</h1>

    <v-row class="justify-content-md-right">
      <v-col v-for="film in getWishlist" :key="film" class="col-3">
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
              <v-chip class="ma-2" small color="red" dark height="10px" v-for="genre in getWishlist.genres"
                      :key="genre">
                {{ genre }}
              </v-chip>
            </v-card-text>

          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "WishList",
  props: ['film'],
  computed: {
    ...mapGetters([
      'getWishlist'
    ]),
  },
  methods: {
    ...mapMutations([
      'CURRENT_FILM',
    ]),
    addCurrentFilm(film) {
      this.CURRENT_FILM(film);
    },
  },
}
</script>

<style scoped>

</style>
