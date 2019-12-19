<template>
  <div class="map-card-container">
    <div class="map-card-image" v-if="content.image">
      <img :src="content.image" alt="card image" class="card-image" />
    </div>
    <div class="map-card-description">
      <h3 class="card-title">{{ content.name }}</h3>
      <span class="card-adress">{{ content.adress }}</span>
      <a
        :href="
          `https://www.google.com/maps/place/${content.latitude},${content.longitude}`
        "
        target="_blank"
        class="itinary-button"
        >Itinéraire</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MapCard",
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
