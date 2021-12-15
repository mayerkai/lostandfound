<template>
  <div class="footer__container">
      <div class="footer__links">
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Tools Used</h2>
            <a href="https://unity.com/de">Unity</a>
            <a href="https://visualstudio.microsoft.com/de/">Visual Studio</a>
            <a href="https://www.aseprite.org/">Aseprite</a>
          </div>
          <div class="footer__link--items">
            <h2>Project Manager</h2>
            <a href="https://www.instagram.com/jaythekk/">Yannik Fischer</a>
          </div>
        </div>
        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            <h2>Project Employee</h2>
            <a href="https://www.instagram.com/dontcallmekrisi/"
              >Kristijan Mladenovic</a
            >
          </div>
          <div class="footer__link--items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/bellapoarch/">Instagram</a>
            <a href="https://www.youtube.com/user/PewDiePie">Youtube</a>
            <a href="https://twitter.com/bunnydelphine">Twitter</a>
            <a href="https://github.com/AthenicAustria/athenic-ui">athenic</a>
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
    margin-left: 16px;
    margin-bottom: 16px;
    text-align: left;
    width: 160px;
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