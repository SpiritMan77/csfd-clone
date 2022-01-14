<template>
  <div>
    <h1>Add Film</h1>
    <v-form
        ref="form"
        v-model="valid"
    >
      <v-text-field
          v-model="title"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="description"
          label="Description"
          required
      ></v-text-field>

      <v-text-field
          v-model="length"
          label="Lenght"
          required
      ></v-text-field>

      <v-text-field
          v-model="rating"
          label="Rating"
          required
      ></v-text-field>

      <v-text-field
          v-model="genres"
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
export default {
  name: "AddFilm",
  data() {
    return {
      newFilm: {
        id: 0,
        image: this.image,
        title: this.title,
        description: this.description,
        length: this.length,
        rating: this.rating,
        genres: this.genres,
      }
    }
  },
  methods: {
    addFilm() {
      this.films.push(this.newFilm)
      console.log(this.newFilm)
      this.newFilm = ''
    },
  }
}
</script>

<style scoped>

</style>
