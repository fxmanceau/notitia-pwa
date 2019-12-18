<template>
  <div class="global-map">
    <MapComponent />
  </div>
</template>

<script>
import MapComponent from "@/components/Map";
export default {
  name: "Map",
  components: {
    MapComponent
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
@import "Map.scss";
</style>
