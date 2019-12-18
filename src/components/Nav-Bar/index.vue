<template>
  <nav class="nav-bar-container">
    <div class="nav-bar-list">
      <router-link to="/" class="nav-bar-item nav-bar-item--active">
        <img class="item-image" src="/img/home-white.svg" alt="Accueil" />
        <span>Accueil</span>
      </router-link>
      <router-link to="/notifications" class="nav-bar-item">
        <img class="item-image" src="/img/notifications.svg" alt="Notifications" />
        <span>Notifications</span>
      </router-link>
      <router-link to="/account" class="nav-bar-item">
        <img class="item-image" src="/img/account.svg" alt="Compte" />
        <span>Compte</span>
      </router-link>

      <!-- <router-link :to="`/${lang}/dashboard`" class="nav-bar-item">
        <img
          class="item-image"
          :src="`/img/navbar/alert${route == 'dashboard' ? '-active' : ''}.svg`"
          alt="Urgence"
        />
        <span class="item-title">Urgence</span>
      </router-link>-->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["route", "lang"]
};
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
