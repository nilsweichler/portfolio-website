<template>
  <div id='services' class='service-section'>
    <h2 class='center-heading blue-gradient'>Services</h2>
    <div class='services'>
      <div class='services-container'>
        <div data-aos="fade-left" class='service-card'>
          <img class='service-icon' src='website-icon.svg' alt='Website Icon'>
          <h4>Website Creation</h4>
          <p>If you need a website, in that case I can help you with the design process and the creation/coding of the website.
            No matter if WordPress or Jamstack with a headless CMS on all areas I feel confident.</p>
        </div>
        <div data-aos="fade-left" class='service-card'>
          <img class='service-icon' src='responsive-icon.svg' alt='Responsive Icon'>
          <h4>Responsive Web Apps</h4>
          <p>Should the site be accessible on all devices? If yes, then I can help you optimize the site for mobile.</p>
        </div>
        <div data-aos="fade-left" class='service-card'>
          <img class='service-icon' src='seo-icon.svg' alt='SEO Icon'>
          <h4>Search Engine Optimization</h4>
          <p>Struggling with organic traffic? I can help you both technically and onpage. Developing a strategy will give you a long-term increase in traffic.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceSection'
}
</script>

<style scoped>
h4 {
  background: var(--font-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.service-section {
  background-color: var(--main-color);
}

.services {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 100px;
  clear: both;
  margin: 0 auto;
  max-width: 1240px;
}

.services-container {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

.service-card {
  flex: 0 1 calc(33% - 100px);
  width: 100%;
  margin: 20px;
  padding: 30px;
  background-color: var(--main-color2);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.12);
}

.center-heading {
  padding-top: 50px;
  text-align: center;
}

.service-icon {
  max-width: 124px;
  text-align: center;
}

@media screen and (max-width: 630px) {
  .services-container {
    justify-content: center;
    text-align: center;
  }
  .service-card {
    flex: 100%;
  }
}

</style>
