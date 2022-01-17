<template>
  <div id='about' class='section'>
    <div class='about-me'>
      <div class='about-me-img'>
        <img src='about-me-pic.svg' alt='About Me Avatar'>
      </div>
      <div class='about-me-text'>
        <h2><span class='blue-gradient'>About</span> Me</h2>
        <p>Hi my name is Nils Weichler, I am a frontend developer from Lübeck, Germany. I study Information Technology and Design at the
          <a style="text-decoration: none" target="_blank" href="https://www.th-luebeck.de/">Lübeck University of Applied Sciences</a>. I will graduate with a bachelor's degree at the beginning of 2023.</p>
        <p>I am constantly striving to know more, which is why I have set as my goal to learn Fullstack Development. In this portfolio you can find some of my projects.</p>
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
  background-color: var(--main-color);
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

.linkedin {
  margin-right: 10px;
}

.about-me-img {
  margin-right: 20px;
}

.about-me-img img {
  width: 100%;
}

@media screen and (max-width: 630px) {
  .about-me {
    flex-direction: column;
    text-align: center;
  }

  .about-me-text h2{
    text-align: center;
  }
}

</style>
