<template>
  <header class="header-container">
    <div class="page-info-container">
      <h1 class="page-title">{{ $route.meta.title }}</h1>
      <span class="page-description">{{ $route.meta.description }}</span>
    </div>
    <div class="dropdown-container">
      <select
        :name="`${$route.name}-dropdown`"
        class="page-dropdown"
        v-if="$route.meta.dropdown"
        @change="updateCategory"
      >
        <option
          :value="option.value"
          v-for="option in $route.meta.dropdown.options"
          :key="option.id"
          >{{ option.text }}</option
        >
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {};
  },
  methods: {
    updateCategory(e) {
      this.$store.commit("updateCategory", e.target.value);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
