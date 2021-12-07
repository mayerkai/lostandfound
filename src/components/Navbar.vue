<template>
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
    <button class="lost">Lost</button>
    <button class="found">Found</button>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  components: {
    
  }
}
</script>

<style>
.navbar {
  width: 100%;
  background-color: #313131;
  margin: auto;
  position: fixed;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.search-box .search-bar {
  display: block;
  padding: 20px;
  height: 31px;
  color: #313131;
  font-size: 25px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  outline: none;
  background: none;
  background-color: rgba(255, 255, 255, 0.75);
}

button {
  width: 250px;
  background-color: rgba(255, 255, 255, 0.75);
  margin-left: 5px;
  border: none;
  outline: none;
  font-size: 35px;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
 "Lucida Sans", Arial, sans-serif;
}

.lost {
  margin-left: auto;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.65);
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
}

.searchIcon {
  height: 69px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
}

button.searchButton {
  width: 100px;
  margin: 0;
  padding: 0;
  display: center;
}
</style>