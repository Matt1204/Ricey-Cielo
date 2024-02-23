<template>
  <b-navbar toggleable="md" class="top-nav">
    <!-- Upper layer -->
    <b-container class="top-wrapper">
      <b-row
        align-v="center"
        align-h="between"
        class="upper-nav custom-row-height"
      >
        <b-col cols="auto">
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-collapse"
            aria-controls="nav-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </b-col>

        <b-col
          cols="6"
          align-self="stretch"
          class="custom-col d-flex justify-content-center align-items-center"
        >
          <b-link href="/">
            <img src="../assets/logo.png" alt="Logo" class="logo-img" />
          </b-link>
        </b-col>

        <b-col cols="auto">
          <a class="lang-switch" href="/">中</a>
        </b-col>
      </b-row>

      <b-row align-v="center" align-h="center" class="lower-nav">
        <b-col cols="auto" class="nav-links-row">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <a class="nav-item" href="/">Home</a>
              <a class="nav-item" href="/about">About</a>
              <p class="nav-item pdf-link" @click="openPdf">Menu</p>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </b-container>
  </b-navbar>
</template>

<script>

export default {
  
  name: "NavBar",
  data() {
    return {
      currentLanguage: "en",
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === "en" ? "zh" : "en";
      // Here you would implement the actual logic for switching languages
    },
    openPdf() {
      const pdfUrl = process.env.BASE_URL + "menu.pdf";

      // Open the PDF in a new tab
      window.open(pdfUrl, "_blank");
    },
  },
};
</script>

<style scoped>
.top-nav {
  background-color: rgba(122, 110, 110, 0.288); /* Semi-transparent white */
  backdrop-filter: blur(5px); /* Blur effect for the background */
}

.top-nav::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.22);
  z-index: -1;
}

.top-wrapper {
  color: #d3ae68;
}

.custom-toggler {
  border: 2px solid; /* Optional: adds a border */
  border-radius: 0.3rem; /* Rounded corners */
}

/* To style the navbar-toggler-icon specifically */
.navbar-toggler-icon {
  background-image: url("../assets/hamburger-icon.svg"); /* Change the icon */
}

.custom-row-height {
  min-height: 100px;
}

.logo-img {
  height: auto;
  width: 150px;
}

.lang-switch {
  opacity: 0;
  font-size: 18px;
  font-style: italic;
  color: inherit;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}

.nav-links-row {
  position: relative;
  right: 38px;
}

.nav-item {
  font-size: 24px;
  padding-left: 30px;
  padding-top: 5px;
  color: inherit;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}
.pdf-link {
  cursor: pointer;
  color: inherit;
  margin: 0;
}
.pdf-link:hover {
  text-decoration: underline;
  color: #d3ae68;
}

.nav-item:hover {
  text-decoration: underline;
  color: #d3ae68;
}

@media (max-width: 767px) {
  /* Adjust this value if needed based on BootstrapVue's breakpoints */
  #nav-collapse {
    padding: 20px 0;
  }
  .top-nav {
    backdrop-filter: blur(3px); /* Blur effect for the background */
  }
  .nav-item {
    padding-top: 14px;
    padding-left: 50px;
  }

  .logo-img {
    width: 110px; /* Smaller logo for smaller screens */
  }
  .custom-row-height {
    min-height: 70px; /* Adjusted height for smaller screens */
  }
  .custom-toggler {
    padding: 0.25rem 0.5rem; /* Smaller padding */
    font-size: 1rem; /* Smaller font size */
  }
  .lang-switch {
    font-size: 18px;
  }
}
</style>
