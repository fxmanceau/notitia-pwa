<template>
  <nav class="nav-bar-container">
    <div class="nav-bar-list">
      <router-link
        :to="item.link"
        class="nav-bar-item"
        v-for="item in nav"
        :key="item.id"
      >
        <img
          class="item-image"
          :src="
            `/img/${
              $route.path == item.link ? `${item.image}-white` : item.image
            }.svg`
          "
          alt="Accueil"
        />
        <span>{{ item.name }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      nav: [
        {
          link: "/",
          name: "Accueil",
          image: "home"
        },
        {
          link: "/alerts",
          name: "Alertes",
          image: "alerts"
        },
        {
          link: "/news",
          name: "Actualités",
          image: "news"
        },
        {
          link: "/profil",
          name: "Profile",
          image: "profil"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
