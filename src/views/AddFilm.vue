<template>
  <div>
    <h1>Add Film</h1>
    <v-form
        ref="form"
        v-model="valid"
    >
      <v-text-field
          v-model="title"
          :rules="titleRules"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="description"
          :rules="descriptionRules"
          label="Description"
          required
      ></v-text-field>

      <v-text-field
          v-model="length"
          :rules="lengthRules"
          label="Lenght"
          required
      ></v-text-field>

      <v-text-field
          v-model="rating"
          :rules="ratingRules"
          label="Rating"
          required
      ></v-text-field>

      <v-text-field
          v-model="genres"
          :rules="genresRules"
          label="Genres"
          required
      ></v-text-field>

      <v-file-input
          multiple
          label="File input"
          v-model="image"
          prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn
          color="success"
          class="mr-4"
          @click="addFilm"

      >
        Add Film
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "AddFilm",
  data() {
    return {
      valid: true,
      titleRules: [
        v => !!v || 'Title is required',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
      ],
      lengthRules: [
        v => !!v || 'Lenght is required',
      ],
      ratingRules: [
        v => !!v || 'Rating is required',
      ],
      genresRules: [
        v => !!v || 'Genres are required',
      ],
      newFilm: {
        id: 0,
        image: '',
        title: '',
        description: '',
        length: '',
        rating: '',
        genres: '',
      }
    }
  },
  methods: {
    ...mapMutations([
      'ADD_FILM',
      'ADD_WISHLIST',
    ]),
    addFilm() {
      if (this.$refs.form.validate()) {
        this.newFilm.title = this.title
        this.newFilm.description = this.description
        this.newFilm.length = this.length
        this.newFilm.rating = this.rating
        this.newFilm.genres = this.genres
        this.newFilm.image = 'default.jpg'
        this.ADD_FILM(this.newFilm)
        this.$router.go(-1)
      }
    },
  },
}
</script>

<style scoped>

</style>
