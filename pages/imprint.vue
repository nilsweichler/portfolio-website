<template>
  <div class='wrapper'>
      <NavBar></NavBar>
      <div class="container">
        <h1>Impressum</h1>
        <h2>Angaben gemmäß §5 TMG</h2>
            <p>Nils Weichler</p>
                <p>Beidendorfer Hauptstraße 17</p>
                <p>23560 Lübeck</p>

            <h2>Kontakt</h2>
            <p>E-Mail: weichlermedia@gmail.com</p>
            <h2>Redaktionell verantwortlich</h2>
            <p>Nils Weichler</p>
            <p>Quelle: e-recht24.de</p>
      </div>
      <FooterSection></FooterSection>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
html{scroll-behavior:smooth}

.container {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
  clear: both;
  margin: 0 auto;
  max-width: 1240px;
}

body {
  margin: 0;
  background-color: var(--main-bg-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
}

h1 {
  font-weight: 700;
  font-size: 64px;
  background: var(--font-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

h2 {
  font-weight: 600;
  font-size: 36px;
  color: var(--font-color);
  margin: 20px 0;
}

.h3 {
  font-size: 36px;
  font-weight: 500;
  color: var(--font-color);
  margin: 0;
}

h4 {
  font-weight: 500;
  font-size: 20px;
  color: var(--font-color);
}

p {
  font-family: Roboto;
  max-width: 600px;
  color: var(--p-color);
  line-height: 1.5;
  margin-bottom: 0;
}

.button {
  background: var(--font-gradient);
  text-decoration: none;
  color: #FFF;
  padding: 10px 50px;
  border-radius: 30px;
  margin-top: 30px;
  line-height: 60px;
  box-shadow: -4px -4px 9px rgba(129, 102, 242, 0.27), 8px 8px 16px rgba(0, 0, 0, 0.12);
}

.blue-gradient {
  background: var(--font-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 1300px) {
  .navbar {
    padding-left: 25px;
    padding-right: 25px;
  }

  .hero-section {
    padding-left: 25px;
    padding-right: 25px;
  }

  #skills {
    padding-left: 25px;
    padding-right: 25px;
  }

  #about {
    padding-right: 25px;
    padding-left: 25px;
  }
  /* Tablet */
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
    .h3 {
      font-size: 22px;
    }
  }
}
</style>