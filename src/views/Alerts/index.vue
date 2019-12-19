<template>
  <div class="global-alerts">
    <div class="alerts">
      <div class="alerts__alert alerts__alert--map">
        <div class="alerts__alert-icon alerts__alert-icon--attack">
          <img src="/img/shield.svg" alt="Pluie" />
        </div>
        <div class="alerts__content">
          <h3>
            <strong>Manifestation</strong>, lorem ipsum dolor sit amet.
          </h3>
          <p>12h09</p>
        </div>
        <div class="alerts__alert-map">
          <img src="/img/fakemap.jpg" alt="Map position" />
        </div>
      </div>
      <div class="alerts__alert">
        <div class="alerts__alert-icon alerts__alert-icon--meteo">
          <img src="/img/rain.svg" alt="Pluie" />
        </div>
        <div class="alerts__content">
          <h3>
            <strong>Forte pluie</strong>, lorem ipsum dolor sit amet.
          </h3>
          <p>12h09</p>
        </div>
      </div>
      <div class="alerts__alert">
        <div class="alerts__alert-icon alerts__alert-icon--meteo">
          <img src="/img/snow.svg" alt="Neige" />
        </div>
        <div class="alerts__content">
          <h3>
            <strong>-5°C demain matin</strong>, lorem ipsum dolor
            sit amet.
          </h3>
          <p>12h09</p>
        </div>
      </div>
      <div class="alerts__alert">
        <div class="alerts__alert-icon alerts__alert-icon--attack">
          <img src="/img/shield.svg" alt="Attaque" />
        </div>
        <div class="alerts__content">
          <h3>
            <strong>Attaque</strong> lorem ipsum dolor sit amet.
            sit amet.
          </h3>
          <p>12h09</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<style lang="scss">
@import 'style.scss';
</style>
