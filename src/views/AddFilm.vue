<template>
  <div>
    <h1>Add Film</h1>
    <v-form
        ref="form"
        v-model="valid"
    >
      <v-text-field
          v-model="name"
          label="Title"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          label="Description"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          label="Lenght"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          label="Rating"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          label="Genres"
          required
      ></v-text-field>

      <v-file-input
          multiple
          label="File input"
          prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn
          color="success"
          class="mr-4"
          @click="validate"
      >
        Add Film
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddFilm",
}
</script>

<style scoped>

</style>
