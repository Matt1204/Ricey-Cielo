<template>
  <b-container class="intro-container" fluid>
    <b-row class="intro-row" align-v="center" align-h="center">
      <b-col class="intro-col" cols="11" sm="8">
        <img
          src="../assets/flower2.png"
          alt="flower2"
          class="text-icon"
          data-aos="fade-up"
        />
        <p class="font-title" data-aos="fade-up">
          A Taste of Home: Xishang Roodle's Heartfelt Welcome to Orange County
        </p>
        <div class="intro-p-container" data-aos="fade-up">
          <p class="intro-text font-p weight-400">
            Nestled in Orange County, Xishang Roodle is a culinary treasure,
            introducing the rare delight of Yunnan Rice Noodle to local
            enthusiasts. Inspired by the lush landscapes of Yunnan, China, the
            restaurant's journey began as a shared dream among friends yearning
            for the flavors of home and a sense of belonging in a vibrant
            community like Orange County.
          </p>
          <p class="intro-text font-p weight-400">
            Beyond merely serving food, Xishang Roodle serves as a cultural
            bridge, blending Yunnan's rich culinary heritage with OC's diverse
            food scene. Despite challenges in sourcing authentic ingredients and
            adapting to new palates, the founders' passion transformed hurdles
            into triumphs.
          </p>
          <p class="intro-text font-p weight-400">
            With the aroma of simmering broth filling the air on opening day,
            Xishang Roodle welcomed patrons to explore the depths of Yunnan's
            cuisine. Word quickly spread, turning the restaurant into a
            gathering place for food lovers and families alike.
          </p>
          <p class="intro-text font-p weight-400">
            More than just a dining spot, Xishang Roodle embodies cultural
            exchange and tradition, offering a taste of home away from home. In
            Orange County, it stands as a symbol of community and celebration of
            global flavors, starting with a humble bowl of Yunnan rice noodle.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <b-container fluid class="description-container">
    <b-row class="description-row" align-v="stretch" align-h="center">
      <b-col cols="12" sm="4" class="image-container" data-aos="fade-right">
      </b-col>

      <b-col cols="12" sm="8" id="description-col-ur">
        <div class="title-container" data-aos="fade-right">
          <img src="../assets/flower2.png" alt="starter" class="title-icon" />
          <p class="description-title font-title">Lorem ipsum dolor sit amet</p>
        </div>
        <p class="description-text font-p weight-400" data-aos="fade-right">
          consectetur adipiscing elit. Suspendisse consectetur sit amet enim in
          ullamcorper. Maecenas lectus diam, sollicitudin nec gravida non,
          lobortis eget ligula. Mauris vitae tortor vestibulum, tincidunt elit
          quis, pellentesque mi. Mauris velit dolor, elementum nec sem quis,
          sollicitudin convallis justo. In faucibus, nisl eu dapibus imperdiet,
          quam dolor egestas sem, nec fringilla purus orci sed orci. Aenean
          faucibus pharetra nibh sit amet lobortis. Donec tempor aliquam nunc
          non auctor.
        </p>
        <p class="description-text font-p weight-400" data-aos="fade-right">
          Sed ac viverra purus. Proin egestas sem a mollis porta. Praesent
          blandit sit amet enim et accumsan. In commodo ornare nisi. Aliquam
          vehicula sapien et semper posuere. Donec eget augue id risus porttitor
          lacinia. Sed id ex a orci tempus sagittis non nec lorem. In faucibus,
          nisl eu dapibus imperdiet, quam dolor egestas sem, nec fringilla purus
          orci sed orci. Aenean faucibus pharetra nibh sit amet lobortis. Donec
          tempor aliquam nunc non auctor.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.font-title {
  font-size: 24px;
  line-height: 2;
}

.font-p {
  font-size: 19px;
  line-height: 1.6;
}

.weight-400 {
  font-weight: 400;
}
.weight-500 {
  font-weight: 500;
}

.top-background {
  height: 100vh;
  width: 100%; /* Ensure full width */
  background-image: url("../assets/background1.jpg"); /* Set background image */
  background-size: cover; /* Cover the entire div */
  background-position: 50% -8%; /* Center the background image */
}

.intro-container {
  position: relative;
}

.intro-container::after {
  content: "";
  position: absolute;
  top: -10px;
  left: -20px;
  width: 100%; /* Cover the entire container */
  height: 100%; /* Cover the entire container */
  background-size: 30%;
  background-image: url("../assets/water-print.png"); /* Path to your watermark image */
  background-repeat: no-repeat; /* Do not repeat the image */
  opacity: 0.4; /* Adjust opacity to make it look like a watermark */
}

.intro-row {
  padding: 60px 0 20px 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  background-image: url("../assets/intro.jpg"); /* Set background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
}

.intro-col {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 0; */
}
.text-icon {
  display: inline;
  width: 45px;
  margin-bottom: 10px;
}

.intro-p-container {
  width: 90%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.intro-text {
  padding-bottom: 20px;
}

.description-container {
  position: relative;
  background-color: #d3ae68;
}

.image-container {
  height: inherit; /* Make sure the div takes the full height of its parent */
  background-image: url("../assets//description.jpg"); /* Adjust the path as necessary */
  background-size: cover; /* Cover the entire area of the div without stretching the image */
  background-position: center; /* Center the background image */
}

.description-container,
.description-row {
  height: inherit;
}

#description-col-ur {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 30px 100px;
}

.description-text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.description-text {
  padding-bottom: 30px;
  color: #fff;
}
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
}
.title-icon {
  display: inline;
  width: 50px;
  height: auto;
  /* filter: grayscale(1); */
}
.description-title {
  padding: 0 0 0 10px;
  margin: 0;
  color: #fff;
}

@media (max-width: 576px) {
  .intro-row {
    padding: 40px 0 10px 0;
  }

  .intro-p-container {
    padding-top: 10px;
    width: 100%;
  }
  .intro-text {
    padding-bottom: 15px;
  }
  .image-container {
    height: 500px;
  }
  #description-col-ur {
    padding: 15px 35px 0px 35px;
    text-align: center;
  }
  .font-title {
    font-size: 18px;
    line-height: 1.4;
  }

  .font-p {
    font-size: 14px;
    line-height: 1.4;
  }
}

@media (max-width: 992px) {
  .img-container2 {
    justify-content: center;
  }

  .description-img2 {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 70%;
  }
}
</style>
