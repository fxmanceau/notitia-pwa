<template>
  <div id="app">
   <Navbar />
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Nav-Bar";

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
@import "@/components/App/Reset.scss";
@import "@/components/App/App.scss";
</style>
