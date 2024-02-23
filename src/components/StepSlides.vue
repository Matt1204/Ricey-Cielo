<template>
  <b-container fluid class="step-container font-white" data-aos="fade-up">
    <div class="step-upper-wrapper">
      <img
        src="../assets/flower2.png"
        alt="flower3"
        srcset=""
        class="step-icon"
      />
      <h1 class="step-title">The Process</h1>
    </div>

    <b-container fluid class="step-lower-wrapper">
      <b-row
        class="step-row"
        align-v="stretch"
        align-h="center"
        data-aos="fade-right"
      >
        <b-col
          cols="12"
          sm="5"
          class="image-container"
          :style="{ backgroundImage: getBackgroundImg }"
        >
        </b-col>

        <!-- Second Column -->
        <b-col cols="12" sm="7" class="timeline-container">
          <ul class="timeline">
            <li
              v-for="(item, index) in timelineData"
              :key="index"
              class="timeline-item rounded"
              :class="{ shadow: index === this.index }"
              :style="{
                backgroundColor:
                  index === this.index
                    ? 'rgba(100, 100, 100, 0.3)'
                    : 'rgba(255, 255, 255, 0.12)',
              }"
              @click="handleIndexChange(index)"
            >
              <div class="timeline-arrow" v-if="index === this.index"></div>
              <div class="zoom-in">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-p">{{ item.text }}</p>
              </div>
            </li>
          </ul>
          <!-- End -->
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "StepSlides",
  data() {
    return {
      imgData: [
        require("@/assets/step1.jpg"),
        require("@/assets/step2.jpg"),
        require("@/assets/step3.jpg"),
        require("@/assets/step4.jpg"),
        require("@/assets/step5.jpg"),
        require("@/assets/step6.jpg"),
      ],
      timelineData: [
        {
          title: "Step 1",
          text: "Begin by delicately separating the quail egg yolk from the egg white and gently placing the yolk into the bubbling soup.",
        },
        {
          title: "Step 2",
          text: "Prepare your meats by lightly coating slices of chicken, fish, and beef in beaten egg whites to ensure their tenderness.",
        },
        {
          title: "Step 3",
          text: "Enhance the flavor profile of the meats by swiftly dipping them a few times into the simmering broth.",
        },
        {
          title: "Step 4",
          text: "Once adequately infused, carefully add all the prepared ingredients into the broth, and customize the spice level to your liking by incorporating chili oil.",
        },
        {
          title: "Step 5",
          text: "Use your chopsticks to gracefully retrieve the rice noodles and submerge them into the flavorful broth.",
        },
        {
          title: "Enjoy",
          text: "Savor the exquisite flavors as they tantalize your taste buds, and don't forget to appreciate the depth and nourishing richness of the broth.",
        },
      ],
      index: 0,
      imageInterval: null,
    };
  },
  methods: {
    handleIndexChange(newIndex) {
      this.index = newIndex;
      if (this.imageInterval) {
        clearInterval(this.imageInterval);
      }
    },
    incrementIndex() {
      this.index = (this.index + 1) % this.imgData.length;
    },
  },
  computed: {
    getBackgroundImg() {
      let currentImg = this.imgData[this.index];
      return `url(${currentImg})`;
    },
  },
  mounted() {
    this.imageInterval = setInterval(this.incrementIndex, 4000);
  },
  beforeUnmount() {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  },
};
</script>

<style scoped>
.font-18 {
  font-size: 18px;
}
.font-22 {
  font-size: 22;
}
.font-italic {
  font-style: italic;
}
.font-white {
  color: #fff;
}
.step-container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: #d3ae68;
  /* color: #fff; */
}

.step-upper-wrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 45px 0;
}

.step-title {
  display: inline;
  margin: 0;
  font-weight: 800;
  padding-left: 20px;
}
.step-icon {
  display: inline;
  width: 50px;
}

.step-lower-wrapper {
  position: relative;
  padding: 0;
}

.image-container {
  height: inherit; /* Make sure the div takes the full height of its parent */
  background-size: cover; /* Cover the entire area of the div without stretching the image */
  background-position: center; /* Center the background image */
}

.step-row {
  height: inherit;
}

.timeline-container {
  position: relative;
  padding: 10px 70px 0 110px;
}

ul.timeline {
  list-style-type: none;
  position: relative;
}

/* Timeline vertical line */
ul.timeline:before {
  content: " ";
  background: #fff;
  display: inline-block;
  position: absolute;
  left: 5px;
  width: 4px;
  height: 100%;
  z-index: 400;
  border-radius: 1rem;
}

li.timeline-item {
  margin-bottom: 15px;
  margin-left: 5px;
  padding: 5px 8px 5px 8px;
  background-color: rgba(255, 255, 255, 0.041); /* Semi-transparent white */
  border: #ddd;
}

/* Timeline item arrow */
.timeline-arrow {
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid #fff;
  border-bottom: 0.5rem solid transparent;
  display: block;
  position: absolute;
  left: 25px;
}

/* Timeline item circle marker */
li.timeline-item::before {
  content: " ";
  background: #ddd;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #fff;
  left: 0px;
  width: 14px;
  height: 14px;
  z-index: 400;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
li.timeline-item:hover {
  cursor: pointer; /* Changes the cursor to a link pointer when hovering */
}

.item-title {
  font-size: 22px;
  line-height: 1.4;
  margin: 0 0 8px 0;
}

.item-p {
  font-size: 18px;
  line-height: 1.7;
  margin: 0 0 5px 0;
  font-weight: 500;
  font-style: italic;
}
.zoom-in {
  transition: transform 0.2s ease;
}

.zoom-in:hover {
  transform: scale(1.015);
}
@media (max-width: 576px) {
  .image-container {
    height: 400px;
  }
}

@media (max-width: 1024px) {
  .timeline-container {
    position: relative;
    padding: 15px 30px 0 30px;
  }
  li.timeline-item {
    margin-bottom: 7px;
  }
  .item-title {
    font-size: 20px;
    line-height: 1.4;
  }

  .item-p {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
