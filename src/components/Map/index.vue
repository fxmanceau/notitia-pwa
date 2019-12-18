<template>
  <div id="map"></div>
</template>

<script>
import { map, tileLayer, marker, icon } from "leaflet";

export default {
  name: "Map",
  data() {
    return {
      map: undefined
    };
  },
  mounted() {
    this.map = map("map").setView(
      { lat: 48.855543018774455, lng: 2.3482778482139115 },
      13
    );

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

    // data.dashboard.map.incidentLatLngs.forEach(incident => {
    //   this.addMarker(incident.type, ...incident.latLng);
    //   const [lang, _] = this.parseRoute();
    // });
  },
  methods: {
    addMarker(type, lat, lng) {
      const iconEl = this.makeIcon(type);

      const markerEl = marker([lat, lng], { icon: iconEl });
      markerEl.addTo(this.map);
      markerEl.on("click", e => {
        console.log(e);
      });
    },
    makeIcon(type) {
      let iconName = "";
      switch (type) {
        case "flooding":
          iconName = "flooding";
          break;
        case "shelter":
          iconName = "home";
          break;
        case "industry":
          iconName = "industry";
          break;
        case "electricity":
          iconName = "electricity";
          break;
        case "worksite":
          iconName = "worksite";
          break;
        default:
          throw new Error(
            "Le `type` pour un marker sur la carte n'est pas valide"
          );
          break;
      }

      return icon({
        iconUrl: require(`../../assets/${iconName}-marker.png`),
        iconSize: [38.25, 46.125],
        iconAnchor: [19.125, 46.125]
      });
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
