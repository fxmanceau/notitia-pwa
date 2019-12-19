<template>
  <div class="map-container" id="map">
    <div
      class="location-button"
      v-if="$route.meta.locationButton"
      @click="resetView"
    >
      <img src="/img/location.svg" alt="location button" />
      <transition name="slide">
        <MapCard :content="card" v-if="card" v-hammer:swipe.down="clearCard" />
      </transition>
    </div>
  </div>
</template>

<script>
import { map, tileLayer, marker, icon } from "leaflet";
import { TweenLite } from "gsap";
import axios from "axios";
import MapCard from "@/components/Map-Card";

export default {
  name: "Map",
  components: {
    MapCard
  },
  data() {
    return {
      map: undefined,
      currentPosition: {
        lat: 48.855543018774455,
        lng: 2.3482778482139115
      },
      catLayer: [],
      zoom: 0.6,
      categories: "1%2C2%2C6%2C3",
      card: false
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocation);
      this.locationInterval = setInterval(() => {
        if (this.userMarker) {
          this.userMarker.setLatLng(this.currentPosition);
          // navigator.geolocation.getCurrentPosition(this.getLocation);
        }
      }, 10000);
    } else {
      throw new console.warn("This device does not support geolocation");
    }
  },
  mounted() {
    this.map = map("map").setView(
      { lat: 48.855543018774455, lng: 2.3482778482139115 },
      13
    );
    this.zoom = 0.6;

    tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 25
      }
    ).addTo(this.map);

    this.map.on("click", e => {
      console.log("LatLng: ", e.latlng);
    });

    this.map.on("moveend", e => {
      const position = this.map.getCenter();
      this.callApi(position.lat, position.lng, this.zoom);
    });

    this.map.on("zoomend", e => {
      this.zoom = (1 / this.map.getZoom()) * 25;
    });

    // data.dashboard.map.incidentLatLngs.forEach(incident => {
    //   this.addMarker(incident.type, ...incident.latLng);
    //   const [lang, _] = this.parseRoute();
    // });

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.rotateUserMarker);
    }

    // this.callApi();
  },
  methods: {
    clearCard() {
      this.card = false;
    },
    getLocation(position) {
      this.currentPosition.lat = position.coords.latitude;
      this.currentPosition.lng = position.coords.longitude;

      this.map.setView(
        { lat: this.currentPosition.lat, lng: this.currentPosition.lng },
        16
      );
      this.zoom = 0.4;
      this.addMarker(
        "user",
        this.currentPosition.lat,
        this.currentPosition.lng
      );
      this.callApi(
        this.currentPosition.lat,
        this.currentPosition.lng,
        this.zoom
      );
    },
    rotateUserMarker(e) {
      if (this.userMarker) {
        TweenLite.to(this.userMarker._icon, 0.2, {
          rotation: -e.alpha,
          transformOrigin: "center"
        });
      }
    },
    resetView() {
      this.map.setView(
        { lat: this.currentPosition.lat, lng: this.currentPosition.lng },
        16
      );
    },
    addMarker(type, lat, lng, properties) {
      const iconEl = this.makeIcon(type);

      const markerEl = marker([lat, lng], { icon: iconEl });
      if (type != "user") {
        markerEl.properties = properties;
      }

      markerEl.addTo(this.map);
      markerEl.on("click", e => {
        this.map.setView({ lat: e.latlng.lat, lng: e.latlng.lng }, 16);
        this.card = e.target.properties;
        console.log(this.card);
      });
      if (type === "user") {
        this.userMarker = markerEl;
      } else {
        this.catLayer.push(markerEl);
      }
    },
    makeIcon(type) {
      let iconName = "";
      switch (type) {
        case "user":
          iconName = "user";
          break;
        case 1:
          iconName = "food";
          break;
        case 2:
          iconName = "host";
          break;
        case 3:
          iconName = "health";
          break;
        case 6:
          iconName = "wear";
          break;
        default:
          throw new Error(
            "Le `type` pour un marker sur la carte n'est pas valide"
          );
          break;
      }

      return icon({
        iconUrl: `/img/${iconName}-marker.svg`,
        iconSize: [34, 34],
        iconAnchor: [17, 34]
      });
    },
    getCategory() {
      switch (this.$store.state.category) {
        case "all":
          this.categories = "1%2C2%2C6%2C3";
          break;
        case "food":
          this.categories = 1;
          break;
        case "host":
          this.categories = 2;
          break;
        case "health":
          this.categories = 3;
          break;
        case "wear":
          this.categories = 6;
          break;
        default:
          this.categories = "1%2C2%2C6%2C3";
          break;
      }
    },
    callApi(lat, lng, zoom) {
      this.getCategory();
      axios
        .get(
          `${this.$store.state.baseUrl}/api/entourage?lat=${lat}&lng=${lng}&zoom=${zoom}&categories=${this.categories}`
        )
        .then(response => {
          this.apiResult = response.data;
          localStorage.setItem("apiResult", JSON.stringify(this.apiResult));

          this.catLayer.forEach((item, index) => {
            this.map.removeLayer(item);
            if (index >= this.catLayer.length - 1) {
              this.catLayer = [];
            }
          });

          if (typeof this.apiResult === "array") {
            this.apiResult.forEach(array => {
              array.pois.forEach(item => {
                this.addMarker(
                  item.category_id,
                  item.latitude,
                  item.longitude,
                  item
                );
              });
            });
          } else {
            this.apiResult.pois.forEach(item => {
              this.addMarker(
                item.category_id,
                item.latitude,
                item.longitude,
                item
              );
            });
          }

          // data.dashboard.map.incidentLatLngs.forEach(incident => {
          //   this.addMarker(incident.type, ...incident.latLng);
          //   const [lang, _] = this.parseRoute();
          // });
        })
        .catch(e => {
          this.errors = e;
          if (localStorage.getItem("apiResult")) {
            this.apiResult = JSON.parse(localStorage.getItem("apiResult"));
          } else {
            console.log(
              "Cannot load api, please refresh or connect to internet"
            );
          }
        });
    }
  },
  computed: {
    dropdownValue() {
      return this.$store.state.category;
    }
  },
  watch: {
    dropdownValue() {
      const position = this.map.getCenter();
      this.callApi(position.lat, position.lng, this.zoom);
    }
  },
  beforeDestroy() {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.rotateUserMarker);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
