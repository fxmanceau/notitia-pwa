<template>
  <div class="input-bloc">
    <input
      :type="input.type"
      class="input"
      :placeholder="input.placeholder"
      v-for="input in content.inputs"
      :key="input.id"
    />
    <button-link :content="content.button" />
  </div>
</template>

<script>
import ButtonLink from "@/components/Button-Link";

export default {
  name: "InputBloc",
  props: ["content"],
  components: {
    "button-link": ButtonLink
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
