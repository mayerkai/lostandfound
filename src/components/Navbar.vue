<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
<nav class="navbar">
    <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." />
    </div>
    <button class="searchButton">
        <img
        src="../assets/searchIconTransparent.png"
        alt="Image not Found"
        class="searchIcon"
        />
    </button>
    <img src="../assets/logo_large.png" alt="logo" class="img_logo">
    <router-link to="/" class="home">Home</router-link>
    <router-link to="/lost" class="lost">Lost</router-link>
    <router-link to="/found" class="found">Found</router-link>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    
  },
}
</script>

<style lang="scss">
$quiteBlack: #313131;
$veryLightGray: rgba(255, 255, 255, 0.75);

@mixin navbar_buttons {
  width: 250px;
  /* background-color: rgba(255, 255, 255, 0.75); */
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  text-align: center;
  text-decoration: none;
  color: white;
  margin-top: 15px;
  /* margin-left: auto; */
}

@mixin navbar_buttons_hover {
  transition: 0.3s ease;
  color: gray;
}

.navbar {
  width: 100%;
  background-color: $quiteBlack;
  margin: auto;
  position: fixed;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 2;
}

.search-box .search-bar {
  display: block;
  padding: 20px;
  height: 33px;
  color: $quiteBlack;
  font-size: 25px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: $veryLightGray;
}

.lost {
  @include navbar_buttons;
}

.lost:hover {
  @include navbar_buttons_hover;
}

.found {
  @include navbar_buttons;
}

.found:hover {
  @include navbar_buttons_hover;
}

.home {
  @include navbar_buttons;  
}

.home:hover {
  @include navbar_buttons_hover;  
}

.searchIcon {
  height: 69px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
}

.searchButton {
  width: 80px;
  margin: 0;
  padding: 0;
  display: center;
  background-color: $veryLightGray;
  border: none;
}

.searchButton:hover {
  transition: 0.3s ease;
  background-color: rgba(255, 255, 255, 0.6);  
}

.img_logo {
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
</style>