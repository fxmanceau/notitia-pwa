<template>
  <div id="app">
    <HeaderTop v-if="$route.name != 'Connection' && $route.name != 'Article'" />
    <Navbar v-if="$route.name != 'Connection' && $route.name != 'Article'" />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Nav-Bar";
import HeaderTop from "@/components/Header";

export default {
  components: {
    HeaderTop,
    Navbar
  },
  beforeCreate() {
    this.$router.push({ path: "/connection/0" }, () => {});
  },
  watch: {
    $route() {
      this.$store.commit("updateCategory", "all");
    }
  }
};
</script>

<style lang="scss">
@import "@/components/App/Reset.scss";
@import "@/components/App/App.scss";
</style>
