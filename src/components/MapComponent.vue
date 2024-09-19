<template>
  <GoogleMap
    class="map-container"
    :api-key="apiKey"
    :center="center"
    :zoom="12"
  >
    <Marker :options="markerOptions" @click="markerClicked"/>
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import pngMarker from "@/assets/map-marker.png";
export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      center: { lat: 33.70200410476615, lng: -117.88719976237503 },
      markerOptions: {
        position: { lat: 33.70200410476615, lng: -117.88719976237503 }, // Marker position
        icon: {
          url: pngMarker, // URL to your custom marker icon
          scaledSize: { width: 60, height: 70 } // Adjust the size of the marker icon
        }
      }
    };
  },
  methods: {
    markerClicked() {
      this.$emit('markerClicked');
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}

</style>
