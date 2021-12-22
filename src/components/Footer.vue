<template>
  <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Legal</h2>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of use</a>
          </div>
          <div class="footer__link--items">
            <h2>Project Members</h2>
            <a href="https://www.instagram.com/jaythekk/">Yannik Fischer</a>
            <a href="https://www.instagram.com/jaythekk/">Kristijan Mladenovic</a>
            <a href="https://www.instagram.com/jaythekk/">Kai Mayer</a>
            <a href="https://www.instagram.com/jaythekk/">Fabian Türtscher</a>
          </div>
        </div>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/bellapoarch/">Instagram</a>
            <a href="https://twitter.com/bunnydelphine">Twitter</a>
          </div>
        </div>
      </div>
      <div class="social__media">
        <div class="social__media--wrap"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {

  },
}
</script>

<style>
    .footer__container {
    background-color: #313131;
    /* padding: 5rem 0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: relative;
    width: 100%;
    }

    #footer__logo {
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    }

    .footer__links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    }

    .footer__link--wrapper {
    display: flex;
    }

    .footer__link--items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    margin-left: 60px;
    margin-bottom: 16px;
    text-align: left;
    width: 200px;
    box-sizing: border-box;
    }

    .footer__link--items h2 {
    margin-bottom: 16px;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    }

    .footer__link--items > h2 {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    }

    .footer__link--items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-family: 'Roboto', sans-serif;
    }

    .footer__link--items a:hover {
    color: rgba(255, 255, 255, 0.75);
    transition: 0.2s ease-out;
    }
</style>