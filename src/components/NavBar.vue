<template>
  <nav>
    <v-app-bar color="red" dark flat app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title><h1>{{ title }}</h1></v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        dark
        temporary
        color="red"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            class="list"
            active-class="deep-white--text text--accent-4"
        >
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    title: 'CSFD',
    drawer: false,
    group: null,
    links: [
      {icon: 'mdi-home', text: 'Home', route: '/'},
      {icon: 'mdi-plus', text: 'Add Film', route: '/addfilm'},
      {icon: 'mdi-heart', text: 'Wish List', route: '/wishlist'},
    ],
  }),
}
</script>
<style scoped>

</style>
