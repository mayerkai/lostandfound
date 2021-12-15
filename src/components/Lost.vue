<template>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">

    <div class="lost_wrapper">
        <div class="select_category">
            <select>
                <option>Phones</option>
                <option>Headphones</option>
                <option>Other Electronics</option>
                <option>Clothes</option>
                <option>Others</option>
            </select>
        </div>
        <div class="select_color">
            <select>
                <option>Black</option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Other Colors</option>
            </select>
        </div>
        <div class="select_location">
            <select>
                <option>Turnsaal</option>
                <option>Klassen Erdgeschoss</option>
                <option>Klassen 1. Stock</option>
                <option>Klassen 2. Stock</option>
                <option>Weiß ich nicht mehr...</option>
            </select>
        </div>
        <button class="select_search">Search</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
.lost_wrapper {
  margin-top: 150px;
  display: flex;
  margin-left: 30px;
  padding-bottom: 700px;
}

@mixin select_style {
    width: 220px;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
}

@mixin select_style_after {
    content: '<>';
    font: 20px "Consolas", monospace;
    color: #333;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;

    /*left line */
    top: 7px;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
    
    position: absolute;
    pointer-events: none;
}

.select_category {
    @include select_style;
}

.select_color {
    @include select_style;
}

.select_location {
    @include select_style;
}

select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    height: 40px;
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
}

option {
    cursor: pointer;
}

.select_category:after {
    @include select_style_after;
}

.select_color:after {
    @include select_style_after;
}

.select_location:after {
    @include select_style_after;
}

.select_search {
    margin-left: 20px;
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 6px;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    fill: #313131;
    font-family: "Inter",sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 41px;
    letter-spacing: 3px;
    line-height: 24px;
    min-width: 140px;
    outline: 0;
    padding: 0 17px;
    text-decoration: none;
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.3);
}

.select_search:hover {
    border-color: #616161;
    color: #616161;
    fill: #616161;
}
</style>