<template>
  <Navbar/>
  <router-view>

  </router-view>
</template>

<script>
  import Navbar from "./components/Navbar.vue"
  // import Items from "./components/Items.vue"
  // import Lost from "./components/Lost.vue"
  // import router from "./router"

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
  body {
    margin: auto;
  }
</style>
