<template>
  <div class="button-link" :class="content.class">
    <a :href="content.link" class="button">{{ content.text }}</a>
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
