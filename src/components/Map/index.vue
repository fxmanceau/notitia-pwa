<template>
  <div id="map"></div>
</template>

<script>
import { map, tileLayer, marker, icon } from "leaflet";
import { TweenLite } from "gsap";
import axios from "axios";

export default {
  name: "Map",
  data() {
    return {
      map: undefined,
      currentPosition: {
        lat: 48.855543018774455,
        lng: 2.3482778482139115
      },
      catLayer: [],
      zoom: 0.6
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
      TweenLite.to(this.userMarker._icon, 0.2, {
        rotation: -e.alpha,
        transformOrigin: "center"
      });
    },
    addMarker(type, lat, lng) {
      const iconEl = this.makeIcon(type);

      const markerEl = marker([lat, lng], { icon: iconEl });
      markerEl.addTo(this.map);
      markerEl.on("click", e => {
        console.log(e);
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
    callApi(lat, lng, zoom) {
      axios
        .get(
          `${this.$store.state.baseUrl}/api/entourage?lat=${lat}&lng=${lng}&zoom=${zoom}`
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
              array.pois.forEach(item => {});
            });
          } else {
            this.apiResult.pois.forEach(item => {
              this.addMarker(item.category_id, item.latitude, item.longitude);
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
  beforeDestroy() {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", this.rotateUserMarker);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
