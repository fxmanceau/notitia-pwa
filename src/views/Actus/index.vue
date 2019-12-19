<template>
  <div class="global-news">
    <div class="actus" v-for="actu in 10" :key="actu.id">
      <div class="actus__actu">
        <img src="/temp/actu.jpg" alt="actu" />
        <div class="actus__content">
          <div class="actus__tag">Intempéries</div>
          <h1>
            Inondations : quatre départements en vigilance orange, une troisième
            victime.
          </h1>
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
@import "style.scss";
</style>
