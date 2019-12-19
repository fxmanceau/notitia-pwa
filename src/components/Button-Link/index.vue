<template>
  <div class="button-link" :class="content.class">
    <router-link :to="content.link" title="Étape suivante" class="button">{{
      content.text
    }}</router-link>
  </div>
</template>

<script>
export default {
  name: "ButtonLink",
  props: ["content"]
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
