<template>
  <div id='skills' class='section'>
    <div class='skills'>
      <div class='skills-text'>
        <h2><span class='blue-gradient'>Skills</span></h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c</p>
      </div>
      <div class='skill-container'>
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
        <div class='skill-card'>
          <font-awesome-icon class='skill-icon' :icon="['fab', 'searchengin']"/>
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

<style lang='scss'>
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
  background-color: #292E51;
  border-radius: 20px;
  margin-bottom: 20px;
  flex: 0 1 calc(25%);
  max-width: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  justify-content: center;
}

.skill-card:hover {
  -webkit-box-shadow:inset 0px 0px 0px 2px #7658F5;
  -moz-box-shadow:inset 0px 0px 0px 2px #7658F5;
  box-shadow:inset 0px 0px 0px 2px #7658F5;
}

.skills-text {
  flex: 60%;
}

.skill-card svg {
  width: 48px;
  height: 48px;
 color: #7658F5;
}

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}

@media screen and (max-width: 1050px) {
  .skills {
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .skill-container {
    flex: 100%;
  }
}

</style>
