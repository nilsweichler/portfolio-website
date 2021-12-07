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
  .footer-wrapper {
    text-align: center;
    padding-top: 90px;
    padding-bottom: 40px;
  }
  .footer-icons .skill-icon {
    background-color: white;
    color: #4E2BC7;
    border-radius: 4px;
    padding: 2px;
    width: 40px;
    height: 40px;
  }
  .footer-text {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .footer-text a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }



</style>
