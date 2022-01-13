<template>
  <div class="film-view">
    <v-container>
      <v-row
          class="mb-6"
          no-gutters
      >
        <v-col
            sm="5"
            md="6"
        >

        </v-col>
        <v-col
            sm="5"
            offset-sm="2"
            md="6"
            offset-md="0"
        >
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
            sm="6"
            md="5"
            lg="6"
        >
          <h3>Title: </h3>
          <h3>Description:</h3>
          <h3>Length: </h3>
          <h3>Rates: </h3>
          <h3>Genres: </h3>


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
              src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: "FilmView",
  data() {
    return {
      test: "Hello"
    }
  }
}
</script>

<style scoped>

</style>
