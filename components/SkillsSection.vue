<template>
  <div id='skills' class='section'>
    <div class='skills'>
      <div class='skills-text'>
        <h2><span class='blue-gradient'>Skills</span></h2>
        <p>Here you can find some of my favorite techniques. My tech stack is formed by these cutting edge technologies.</p>
      </div>
      <div data-aos="fade-left" class='skill-container'>
        <div v-tooltip="'HTML5'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'html5']"/>
        </div>
        <div v-tooltip="'CSS3'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'css3']"/>
        </div>
        <div v-tooltip="'JavaScript'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'js-square']"/>
        </div>
        <div v-tooltip="'Vuejs'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'vuejs']"/>
        </div>
        <div v-tooltip="'Java'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'java']"/>
        </div>
        <div v-tooltip="'SEO'" class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'searchengin']"/>
        </div>
        <div v-tooltip="'Flutter'" class='skill-card'>
          <img src="flutter-icon.svg" alt="flutter icon" class="skill-icon">
        </div>
        <div v-tooltip="'Dart'" class='skill-card'>
          <img src="dart-icon.svg" alt="dart icon" class="skill-icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTooltip from 'v-tooltip'
import 'v-tooltip/dist/v-tooltip.css'
VTooltip.options.disposeTimeout = 999999;

export default {
  name: 'SkillsSection'
}
</script>

<style lang='scss'>
#skills {
  background-image: url(static/hero-fancy.svg);
  background-position: 0% 300%;
  background-repeat: no-repeat;
}

.v-popper--theme-tooltip .v-popper__inner {
  background: var(--font-gradient);
}

.v-popper--theme-tooltip .v-popper__arrow {
  border-color: #5B41CA;
}

.skills {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  clear: both;
  margin: 0 auto;
  max-width: 1240px;
}
.skill-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  flex: 40%;
}

.skill-card {
  background-color: var(--main-color2);
  border-radius: 20px;
  margin-bottom: 20px;
  flex: 0 1 calc(25%);
  max-width: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
  box-shadow: var(--drop-shadow);
}

.skill-card:hover {
  -webkit-box-shadow:inset 0px 0px 0px 2px var(--light-color);
  -moz-box-shadow:inset 0px 0px 0px 2px var(--light-color);
  box-shadow:inset 0px 0px 0px 2px var(--light-color);
}

.skills-text {
  flex: 60%;
}

.skill-card img {
  width: 32px;
  height: 48px;
}

.skill-card svg {
  width: 32px;
  height: 48px;
 color: var(--light-color);
}

.svg-inline--fa {
  width: 2em !important;
}

.tooltip .tooltip-inner {
  background: orange;
}

@media screen and (max-width: 1050px) {
  .skill-card {
    margin-right: 5px;
    padding-bottom: 0;
    padding-top: 0;
  }

  .skills {
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .skill-container {
    flex: 100%;
  }

  #skills {
    background-image: url(static/hero-fancy.svg);
    background-position: 0% 180%;
    background-repeat: no-repeat;
  }
}

</style>
