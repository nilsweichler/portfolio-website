<template>
  <div id="hero-section" class='hero-section'>
    <img class='image-second' src='hero-fancy.svg'>
    <div class='section-wrapper'>
      <div class='heading-section'>
        <div class='h3'>Hello, I'm</div>
        <h1>Nils Weichler</h1>
        <h2>Front-End Developer</h2>
        <a class='hire-me-button' href='mailto:weichlermedia@gmail.com'>Hire Me</a>
      </div>
      <div class='hero-image'>
        <img src='hero-image.svg' alt='Hero Section Image'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style>
  .hero-section {
    background-image: url(static/hero-background.svg);
    background-position: 0% 0%;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
  }

  .image-second {
    height: inherit;
    width: inherit;
    position: absolute;
    left: 0;
    bottom: -25%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 100px;
    clear: both;
    margin: 0 auto;
    max-width: 1240px;
  }

  .hero-image img{
    width: 100%;
  }

  .hire-me-button {
    background: var(--orange-gradient);
    text-decoration: none;
    color: #FFF;
    padding: 10px 50px;
    border-radius: 30px;
    margin-top: 30px;
    filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.12)) drop-shadow(-8px -8px 16px rgba(255, 183, 98, 0.08));
  }
  .hire-me-button:hover {
    background: var(--orange-gradient-hover);
  }

  @media screen and (max-width: 630px) {
    .section-wrapper {
      flex-direction: column-reverse;
      text-align: center;
    }
    .heading-section {
      margin-top: 20px;
    }

  }

</style>
