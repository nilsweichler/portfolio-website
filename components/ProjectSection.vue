<template>
  <div id='projects' class='project-section'>
    <h2 class='center-heading blue-gradient'>Projects</h2>
    <div class='projects'>
      <div class='projects-container'>
        <div data-aos="fade-left" class='project-card'>
          <h4>Job Board</h4>
          <img src="https://res.cloudinary.com/casinowitch/image/upload/v1656333402/jobremote-logo_wwzghn.svg" width="50%">
          <p>The project was implemented using NextJS and Firebase and focused primarily on learning the techniques.</p>
          <a class='linkedin button small' href='https://jobremote.io' target='_blank'>Website</a>
          <a class='github button small' href='https://github.com/nilsweichler/jobremote' target='_blank'>GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSection'
}
</script>

<style scoped>
.project-section {
  background-image: url(static/hero-fancy.svg);
  background-position: bottom left;
  background-repeat: no-repeat;
}

.projects {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 100px;
  clear: both;
  margin: 0 auto;
  max-width: 1240px;
}

.projects-container {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.project-card {
  flex: 0 1 calc(33% - 100px);
  width: 100%;
  margin: 20px;
  padding: 30px;
  background-color: var(--main-color2);
  border-radius: 24px;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.12);
}

.center-heading {
  margin-top: 50px;
  text-align: center;
}

.small {
  padding: 5px 30px;
}

.project-card .small:last-child {
  margin-left: 10px;
}
@media screen and (max-width: 1087px) {
  .project-card .small:last-child {
    margin-left: 0;
  }
}
@media screen and (max-width: 630px) {
  .projects-container {
    justify-content: center;
    text-align: center;
  }
  .project-card {
    flex: 100%;
  }
  .project-card .small:last-child {
    margin-left: 0;
  }
}

</style>
