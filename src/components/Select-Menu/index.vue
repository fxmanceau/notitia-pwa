<template>
  <div class="select-menu">
    <h3 class="select-title">{{ content.title }}</h3>
    <div class="options-container">
      <span
        class="select-option"
        :class="{ 'is-active': activeChoice == index }"
        v-for="(option, index) in content.options"
        :key="option.id"
        @click="activeChoice = index"
        >{{ option.name }}</span
      >
    </div>
    <button-link :content="content.button" />
  </div>
</template>

<script>
import ButtonLink from "@/components/Button-Link";

export default {
  name: "ButtonLink",
  props: ["content"],
  components: {
    "button-link": ButtonLink
  },
  data() {
    return {
      activeChoice: 1
    };
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
