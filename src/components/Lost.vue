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
    <!-- <table>
        <tr>
            <th>Category</th>
            <th>Color</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>
                <div class="select_category">
                    <select>
                        <option>Phones</option>
                        <option>Headphones</option>
                        <option>Other Electronics</option>
                        <option>Clothes</option>
                        <option>Others</option>
                    </select>
                </div>
            </td>
            <td>
                <div class="select_color">
                    <select>
                        <option>Black</option>
                        <option>White</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Other Colors</option>
                    </select>
                </div>
            </td>
            <td>
                <div class="select_location">
                    <select>
                        <option>Turnsaal</option>
                        <option>Klassen Erdgeschoss</option>
                        <option>Klassen 1. Stock</option>
                        <option>Klassen 2. Stock</option>
                        <option>Weiß ich nicht mehr...</option>
                    </select>
                </div>
            </td>
            <button class="select_search">Search</button>
        </tr>
    </table> -->
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@mixin label {
    font-size: 30px;
    font-weight: 500;
    margin: 5px 0;
}

.selection {
    padding-top: 200px;
}

.select {
    position: relative;
    margin-left: 30px;
    margin-bottom: 40px;
}

.select_title {
    display: block;
    width: 300px;
    height: 50px;
    padding: 3px 12px;
    font-size: 20px;
    line-height: 1.5;
    color: #282828;
    background-color: #f0eeee;
    background-image: none;
    border: 1px solid #b0afaf;
    border-radius: 0;
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

@mixin select_style {
    width: 300px;
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
    right: 12px;

    /*left line */
    top: 14px;
    padding: 0px 10px 10px;
    border-bottom: 1px solid #999;
    
    position: absolute;
    pointer-events: none;
}

h1 {
    margin-top: 100px;
    margin-left: 30px;
    font-family: 'Roboto', sans-serif;
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