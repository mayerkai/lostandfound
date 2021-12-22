<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

    <div class="selection">
        <div class="select">
            <label for="title_id" class="label_title">Title</label>
            <input id="select_title_id" class="select_title" name="title_id" placeholder="Item Title" type="text">
        </div>
        <div class="select">
            <label for="category_id" class="label_category">Category</label>
            <div class="select_div">
                <select>
                    <option>Phone</option>
                    <option>Headphones</option>
                    <option>Other Electronics</option>
                    <option>Clothes</option>
                    <option>Others</option>
                </select>
            </div>
        </div>
        <div class="select">
            <label for="color_id" class="label_color">Color</label>
            <div class="select_div">
                <select>
                    <option>Black</option>
                    <option>White</option>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>Others</option>
                </select>
            </div>
        </div>
        <div class="select">
            <label for="location_id" class="label_location">Location</label>
            <div class="select_div">
                <select>
                    <option>Turnsaal</option>
                    <option>Klassen Erdgeschoss</option>
                    <option>Klassen 1. Stock</option>
                    <option>Klassen 2. Stock</option>
                    <option>Weiß ich nicht mehr...</option>
                </select>
            </div>
        </div>
    </div>
    <div class="container">
        <button id="button" class="submit"></button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
* {
    font-family: 'Roboto', sans-serif;
}

@mixin label {
    font-size: 40px;
}

.selection {
    padding-top: 100px;
    padding-bottom: auto;
}

.select {
    position: relative;
    margin-left: 30px;
    margin-bottom: 60px;
}

.select_title {
    display: block;
    width: 300px;
    height: 50px;
    margin-top: 20px;
    padding: 3px 12px;
    font-size: 20px;
    line-height: 1.5;
    color: #282828;
    background-color: #f0eeee;
    background-image: none;
    border: 1px solid #b0afaf;
    border-radius: 0;
    font-weight: bold;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.label_title {
    @include label;
}

.label_category {
    @include label;
}

.label_color {
    @include label;
}

.label_location {
    @include label;
}

.select_div {
    margin-top: 20px;
}

select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 300px;
    height: 60px;
    -moz-padding-start: calc(10px - 3px);
    padding-left: 10px;
    color: #313131;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    margin-left: 0px;
}

option {
    cursor: pointer;
    font-weight: bold;
}



$primaryColor: #999;
$gray: #bbbbbb;

.container {
  margin-left: 30px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.submit {
  outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  background: #fff;
  border: 2px solid $primaryColor;
  color:$primaryColor;
  letter-spacing:2px;
  font-weight: bold;
  text-shadow:0;

  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    color:white;
    background: $primaryColor;
  }
  &:active {
    //letter-spacing: 2px;
    letter-spacing: 2px ;
  }
  &:after {
    content:"SUBMIT";
  }
}

.onclic {
  width: 40px;
  border-color:$gray;
  border-width:3px;
  font-size:0;
  border-left-color:$primaryColor;
  animation: rotating 2s 0.25s linear infinite;

  &:after {
    content:"";
  }
  &:hover {
    color:$primaryColor;
    background: white;
  }
}

.validate {
  font-size:13px;
  color: white;
  background: $primaryColor;
  &:after {
    font-family:'Roboto';
    content:"\f00c";
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>