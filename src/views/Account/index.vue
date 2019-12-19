<template>
  <div class="global-account">
    <div class="categories">
      <div class="categories__category">
        <div class="categories__category-icon categories__category-icon--orange">
          <img src="/img/profil-white.svg" alt="Profile" />
        </div>
        <div class="categories__content">
          <h3>Gestion du compte</h3>
          <p>Pseudo, Numéro et déconnexion.</p>
        </div>
      </div>
      <div class="categories__category">
        <div class="categories__category-icon categories__category-icon--blue">
          <img src="/img/settings.svg" alt="Paraùètres" />
        </div>
        <div class="categories__content">
          <h3>Paramètres</h3>
        </div>
      </div>
      <div class="categories__category">
        <div class="categories__category-icon categories__category-icon--blue">
          <img src="/img/lock.svg" alt="Confidentialité" />
        </div>
        <div class="categories__content">
          <h3>Politique de confidentialité</h3>
        </div>
      </div>
      <div class="categories__category">
        <div class="categories__category-icon categories__category-icon--blue">
          <img src="/img/paper.svg" alt="Termes" />
        </div>
        <div class="categories__content">
          <h3>Termes et conditions</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account"
};
</script>

<style lang="scss">
@import 'style.scss';
</style>
