<template>
  <Navbar/>
  <Items/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Items from "./components/Items.vue"
export default {
  name: 'App',
  components: {
    Navbar, Items
  }
}
</script>

<style>
body {
  margin: auto;
}
</style>
