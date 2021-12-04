<template>
  <div class='footer-section'>
    <div class='footer-wrapper'>
      <div class='footer-icons'>
        <font-awesome-icon class='skill-icon' :icon="['fab', 'github']"/>
        <font-awesome-icon class='skill-icon' :icon="['fab', 'linkedin']"/>
      </div>
      <div class='footer-text'>
        <a href='#'>Imprint</a>
        <a href='#'>Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
  .footer-section {
    background-color: #4E2BC7;
  }


</style>
