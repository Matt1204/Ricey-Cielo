<template>
  <b-container fluid class="footer-container">
    <b-row class="footer-row">
      <b-col
        cols="12"
        class="map-col d-flex flex-column justify-content-start align-items-center"
      >
        <div
          class="map-title-container d-flex justify-content-start align-items-center"
        >
          <img src="@/assets/navigate.svg" alt="nav" class="map-title-icon" />
          <p class="map-title" @click="openMap">
            3396 S Bristol St Santa Ana, CA 92704
          </p>
        </div>
        <div class="map-container">
          <MapComponent @markerClicked="openMap" />
        </div>
      </b-col>
      <b-col cols="12">
        <div
          class="contact-container d-flex flex-column justify-content-start align-items-center"
        >
          <div
            class="title-container d-flex justify-content-start align-items-center"
          >
            <img
              src="../assets/flower3.png"
              alt="flower2"
              class="title-icon"
              srcset=""
            />
            <h1 class="contact-title">Contact Us</h1>
          </div>
          <div
            class="info-container d-flex flex-column justify-content-start align-items-start"
          >
            <div
              class="info-item-container d-flex justify-content-start align-items-center"
            >
              <img src="@/assets/phone.svg" alt="phone" class="contact-icon" />
              <a href="tel:(714) 760-4331" class="no-decoration contact-info">
                (714) 760-4331
              </a>
            </div>
            <div
              class="info-item-container d-flex justify-content-start align-items-center"
            >
              <img src="@/assets/email.svg" alt="email" class="contact-icon" />
              <a
                href="mailto:xsroodle@gmail.com"
                class="no-decoration contact-info"
              >
                xsroodle@gmail.com
              </a>
            </div>
          </div>
          <div
            class="social-media-container d-flex justify-content-start align-items-center"
          >
            <a
              href="https://www.instagram.com/xishangroodle?igsh=ZDE1MWVjZGVmZQ=="
            >
              <img src="@/assets/instagram.svg" alt="ins" class="media-icon" />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/653cae0c0000000030030161?xhsshare=CopyLink&appuid=5be7e715d7af4c0001cb7016&apptime=1708498105"
            >
              <img src="@/assets/xhs.svg" alt="xhs" class="media-icon" />
            </a>
            <!-- <div
              class="wechat-container d-flex justify-content-start align-items-center"
            >
              <img
                src="@/assets/wechat.svg"
                alt="wechat-icon"
                class="wechat-icon"
              />
              <img src="@/assets/code.jpg" alt="wechat-code" class="code-img" />
            </div> -->
          </div>
          <div
            class="copyright-container d-flex flex-column justify-content-start align-items-center"
          >
            <p class="copyright-upper">
              Copyright {{ currentYear }} Xishang Roodle.
            </p>
            <p class="copyright-lower">Developed by Mahabarison.</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MapComponent from './MapComponent.vue'
export default {
  components: {
    MapComponent,
  },
  name: 'AppFooter',
  methods: {
    // openMap() {
    //   // const placeId = 'ChIJOc51qTXf3IAR7vHiVCcx7tQ'
    //   const url = `https://www.google.com/maps/search/?api=1&query=33.70202%2C-117.88715&query_place_id=ChIJOc51qTXf3IAR7vHiVCcx7tQ`
    //   window.open(url)
    //   // window.location.href = url;
    // },
    openMap() {
      // const address = '1600 Amphitheatre Parkway, Mountain View, CA'; // Replace with the address
      const encodedQuery = encodeURIComponent('Xishang Roodle 喜上')
      // const encodedPlaceId = encodeURIComponent("Xishang Roodle 喜上");
      const WebURL =
        `https://www.google.com/maps/search/?api=1&query=${encodedQuery}&query_place_id=ChIJOc51qTXf3IAR7vHiVCcx7tQ`

      if (this.isIOS()) {
        // iOS devices: Try Google Maps app first, fall back to browser
        const iosURL = `comgooglemaps://?q=${encodedQuery}`
        window.location.href = iosURL;
        console.log("IOS");
        
        setTimeout(() => {
          window.location.href = WebURL // Fallback if Google Maps app not installed
          console.log("IOS Fallback");
        }, 500)
      } else if (this.isAndroid()) {
        // Android devices: Use geo: scheme or intent URL
        const googleMapsURL = `geo:0,0?q=${encodedQuery}`
        window.location.href = googleMapsURL
        setTimeout(() => {
          window.location.href = WebURL // Fallback to web if no app
        }, 500)
      } else {
        // For desktop/PC and other platforms, open Google Maps in the browser
        window.open(WebURL, '_blank')
        console.log("PC");
      }
    },
    isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    },
    isAndroid() {
      return /Android/.test(navigator.userAgent)
    },
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
.footer-container {
  background-color: rgba(211, 174, 104, 0.8);
  color: #6a6a6a;
}
.map-col {
  padding: 25px 0 10px 0;
}
.map-title-container {
  padding-top: 3px;
  padding-bottom: 8px;
}
.map-title-icon {
  width: 30px;
}
.map-title {
  display: inline;
  margin-bottom: 0 !important;
  margin-left: 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 22px;
  color: #2e2e2ed5;
}
.map-container {
  width: 100%;
  height: 380px;
}
.contact-container {
  /* padding-left: 10px; */
  padding: 35px 0 15px 0;
}

.title-container {
  padding: 0 0 26px 0;
}

.title-icon {
  display: inline;
  width: 40px;
}

.contact-title {
  display: inline;
  font-size: 28px;
  margin-left: 10px;
  margin-bottom: 0;
  color: #2e2e2ed5;
  font-weight: 600;
}
.info-container {
  padding-left: 65px;
}
.info-item-container {
  margin-bottom: 8px;
}
.contact-icon {
  display: inline;
  width: 22px;
}
.contact-info {
  margin: 0 0 0 10px !important;
}
.no-decoration {
  text-decoration: none;
  color: inherit;
}
.social-media-container {
  padding-left: 50px;
  margin-top: 25px;
}
.media-icon {
  width: 33px;
  margin-right: 10px;
}
.wechat-icon {
  width: 33px;
  margin-right: 8px;
}
.copyright-container {
  margin-top: 44px;
}
.copyright-upper {
  font-size: 18px;
  opacity: 0.95;
}
.copyright-lower {
  font-style: italic;
  font-size: 14px;
  opacity: 0.2;
}

.code-img {
  display: inline;
  width: 90px;
}
@media (max-width: 767px) {
  .map-container {
    height: 550px;
  }
  .map-title-container {
    padding-left: 5px;
  }
  .map-title-icon {
    width: 22px;
  }
  .map-title {
    margin-left: 5px;
    font-size: 16px;
  }
  .social-media-container {
    padding-left: 40px;
  }
}
</style>
