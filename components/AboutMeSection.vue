<template>
  <div id='about' class='section'>
    <div class='about-me'>
      <div class='about-me-img'>
        <img src='about-me-pic.svg' alt='About Me Avatar'>
      </div>
      <div class='about-me-text'>
        <h2><span class='blue-gradient'>About</span> Me</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
        <a class='linkedin button' href='https://www.linkedin.com/in/nils-weichler-25427114a/' target='_blank'>Linkedin</a>
        <a class='github button' href='https://github.com/nilsweichler/' target='_blank'>GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMeSection'
}
</script>

<style scoped>
.section {
  background-color: #191D38;
}
.about-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  clear: both;
  margin: 0 auto;
  max-width: 1240px;
}
</style>
