<template>
  <div class='navbar'>
    <div class='navbar-wrapper'>
      <div class='logo'><a href='#'><img src='portfolio-logo.svg' alt='Portfolio Website Logo'></a></div>
      <div class='menu'>
        <a href='#about'>About Me</a>
        <a href='#projects'>Projects</a>
        <a href='#services'>Services</a>
        <a href='#skills'>Skills</a>
        <div class='dark-light-switch'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  .logo {
    max-width: 146px;
  }

  .navbar {
    position: absolute;
    top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    left: 0;
    right: 0;
    z-index: 99;
  }

  .navbar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    clear: both;
    margin: 0 auto;
    max-width: 1240px;
  }

  .menu a {
    color: #FFF;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 40px;
  }

  @media screen and (max-width: 730px) {
    .menu {
      display: none;
    }
  }
</style>
