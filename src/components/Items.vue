<template>
<div class="items_Wrapper">
    <div class="item_list">
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 1</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 2</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 3</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
    </div>
    <div class="item_list">
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 4</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 5</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 6</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 7</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
    </div>
    <div class="item_list">
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 8</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 9</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 10</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
    </div>
    <div class="item_list">
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 11</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 12</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 13</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
      <div class="item">
        <div class="item_img">
          <img src="../assets/Anton.jpg" alt="item_picture" class="img_responsive">
        </div>
        <h1>Item 14</h1>
        <div class="description">
          <p>this is a description to this item</p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Items',
  components: {
    
  }
}
</script>

<style>
.items_Wrapper {
  margin-top: 100px;
  height: auto;
  z-index: 1;
}

.item_list {
  display: flex;
}

.item {
  width: 25%;
  text-align: center;
  margin: 30px;
  cursor: pointer;
  border-radius: 16px;

  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;

  background-color: grey;
}

.item h1 {
  font-size: 45px;
  margin: auto;
}

.item_img {
  width: 100%;
  transition: all 0.2s ease-in-out;
  margin-top: 10px;
}

.item_img img {
  transition: all 0.2s ease-in-out;
  border-radius:16px;
  width: 75%;
}

.item:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.item:hover .item_img img {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.25);
}
 
</style>