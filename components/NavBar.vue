<template>
  <div class='navbar'>
    <div class='navbar-wrapper'>
      <div class='logo'><a href='/' onclick="window.location.reload();"><img src="portfolio-logo.svg" id="logo" alt='Portfolio Website Logo'></a></div>
      <div class='menu'>
        <a href='/#about'>About Me</a>
        <a href='/#projects'>Projects</a>
        <a href='/#services'>Services</a>
        <a href='/h#skills'>Skills</a>
        
        <div class='dark-light-switch'><DarkModeSwitch @switched="onSwitched" :initialState="isDarkModeEnabled" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitch from 'vue-dark-mode-switch'
import 'vue-dark-mode-switch/dist/vue-dark-mode-switch.css'

export default {
  name: 'NavBar',
  data () {
    return {
      isDarkModeEnabled: true
    }
  },
  components: {
    DarkModeSwitch
  },
  methods: {
    onSwitched: function (isSwitched) {
      console.log('dark mode is enabled :', isSwitched);
      const root = document.documentElement;
      if(isSwitched) {
        root.style.setProperty("--font-color", "#fff");
        root.style.setProperty("--p-color", "#747AA0");
        root.style.setProperty("--font-gradient", "-webkit-linear-gradient(#7658F5, #583EC7)");
        root.style.setProperty("--orange-gradient", "linear-gradient(#FFB966, #FF961B)");
        root.style.setProperty("--orange-gradient-hover", "linear-gradient(rgba(255, 185, 102, 0.77), rgba(255, 150, 27, 0.84))");
        root.style.setProperty("--main-color", "#191D38");
        root.style.setProperty("--main-color2", "#292E51");
        root.style.setProperty("--main-bg-color", "#1F2340");
        root.style.setProperty("--light-color", "#7658F5");
        root.style.setProperty("--footer-color", "#4E2BC7");
        root.style.setProperty("--footer-font-color", "#fff");
        root.style.setProperty("--drop-shadow", "20px 20px 40px rgba(0, 0, 0, 0.12)");
        root.style.setProperty("--background-image", "url(static/hero-background.svg)");
        if(document.getElementById("hero-section")) {
          document.getElementById("hero-section").style.backgroundImage = "url(hero-background.svg)";
        }
        if(document.getElementById("logo")) {
          document.getElementById("logo").src = 'portfolio-logo.svg';
        }
      } else {
        root.style.setProperty("--font-color", "#292E35");
        root.style.setProperty("--p-color", "#777777");
        root.style.setProperty("--font-gradient", "-webkit-linear-gradient(#7658F5, #583EC7)");
        root.style.setProperty("--orange-gradient", "linear-gradient(#FF8EA1, #FF5170)");
        root.style.setProperty("--orange-gradient-hover", "linear-gradient(rgba(255, 142, 161, 0.77), rgba(255, 81, 112, 0.84))");
        root.style.setProperty("--main-color", "#F6FAFF");
        root.style.setProperty("--main-color2", "#FFFFFF");
        root.style.setProperty("--main-bg-color", "#FEFEFF");
        root.style.setProperty("--light-color", "#7658F5");
        root.style.setProperty("--footer-color", "#F7FAFF");
        root.style.setProperty("--footer-font-color", "#4E2BC7");
        root.style.setProperty("--drop-shadow", "20px 20px 40px rgba(0, 0, 0, 0.12)");
        if(document.getElementById("hero-section")) {
          document.getElementById("hero-section").style.backgroundImage = "url(hero-background-light.svg)";
        }
        if(document.getElementById("logo")) {
          document.getElementById("logo").src = 'portfolio-logo-dark.svg';
        }
      }
    }
  }
}
</script>

<style>
  :root {
    --font-color: #fff;
    --p-color: #747AA0;
    --font-gradient: -webkit-linear-gradient(#7658F5, #583EC7);
    --orange-gradient: linear-gradient(#FFB966, #FF961B);
    --orange-gradient-hover: linear-gradient(rgba(255, 185, 102, 0.77), rgba(255, 150, 27, 0.84));
    --main-color: #191D38;
    --main-color2: #292E51;
    --main-bg-color: #1F2340;
    --light-color: #7658F5;
    --footer-color: #4E2BC7;
    --footer-font-color: #fff;
    --drop-shadow: 20px 20px 40px rgba(0, 0, 0, 0.12);
    --background-image: url(/static/hero-background.svg);
  }

  :root.light-theme {
    --font-color: #292E35;
    --p-color: #777777;
    --font-gradient: -webkit-linear-gradient(#7658F5, #583EC7);
    --orange-gradient: linear-gradient(#FF8EA1, #FF5170);
    --orange-gradient-hover: linear-gradient(rgba(255, 142, 161, 0.77), rgba(255, 81, 112, 0.84));
    --main-color: #F6FAFF;
    --main-color2: #FFFFFF;
    --main-bg-color: #FEFEFF;
    --light-color: linear-gradient(#7658F5, #583EC7);
    --footer-color: #F7FAFF;
    --footer-font-color: #4E2BC7;
    --background-image: url(/static/hero-background-light.svg);
  }


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

  .menu {
    display: flex;
    align-items: center;
  }

  .menu a {
    color: var(--font-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 40px;
  }

  .dark-light-switch {
    padding: 20px 40px;
  }

  @media screen and (max-width: 730px) {
    .menu {
    }

    .menu a {
      display: none;
    }

    .dark-light-switch {
      padding: 0;
    }
  }
</style>
