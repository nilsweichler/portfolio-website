<template>
  <div class='section'>
    <div class='skills'>
      <div class='skills-text'>
        <h2><span class='blue-gradient'>Skills</span></h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
      </div>
      <div class='skill-container'>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'html5']"/>
        </div>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'css3']"/>
        </div>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'js-square']"/>
        </div>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'vuejs']"/>
        </div>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'java']"/>
        </div>
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'searchengin']"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSection'
}
</script>

<style scoped>
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
}

.skill-card {
  background-color: #292E51;
  flex: 0 1 calc(33% - 20px);
  border-radius: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-card svg {
  width: 48px;
  height: 48px;
 color: #7658F5;
}

</style>
