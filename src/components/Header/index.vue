<template>
  <header class="header-container">
    <div class="page-info-container">
      <h1 class="page-title">{{ $route.meta.title }}</h1>
      <span class="page-description">{{ $route.meta.description }}</span>
    </div>
    <select
      :name="`${route.name}-dropdown`"
      class="page-dropdown"
      v-if="$route.meta.dropdown"
    >
      <option
        :value="option.value"
        v-for="option in dropdown.options"
        :key="option.id"
        >{{ option.text }}</option
      >
    </select>
    <div class="location-button" v-if="$route.meta.locationButton">
      <img src="/img/location.svg" alt="location button" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
