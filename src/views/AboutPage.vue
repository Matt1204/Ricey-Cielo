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
            In the vibrant heart of Orange County, Xishang Roodle emerges as a
            culinary beacon, introducing the authentic Yunnan Rice Noodle to a
            diverse audience. This establishment not only offers a unique taste
            experience but also embodies the rich traditions of Yunnan, China,
            inviting locals into a world of flavor and heritage.
          </p>
          <p class="intro-text font-p weight-400">
            The dream behind Xishang Roodle, envisioned by friends far from
            their homeland, was to recreate the communal and nostalgic essence
            of their childhood meals. Orange County, with its openness and
            cultural diversity, provided the perfect canvas for this vision,
            allowing them to weave the threads of their heritage into the local
            food scene.
          </p>
          <p class="intro-text font-p weight-400">
            Xishang Roodle stands as a cultural bridge, transcending mere dining
            to become a place of connection and tradition. Here, every bowl of
            rice noodle tells a story, offering patrons not just a meal, but an
            immersive journey into the heart of Yunnan's culinary legacy.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>

  <b-container fluid class="description-container">
    <b-row class="description-row" align-v="stretch" align-h="center">
      <b-col
        cols="12"
        sm="4"
        class="image-container"
        data-aos="fade-right"
      ></b-col>

      <b-col cols="12" sm="8" id="description-col-ur">
        <div class="title-container" data-aos="fade-right">
          <img src="../assets/flower2.png" alt="starter" class="title-icon" />
          <p class="description-title font-title">Noodles Across Borders</p>
        </div>
        <p class="description-text font-p weight-400" data-aos="fade-right">
          The journey to bring authentic Yunnan rice noodles to Orange County
          was fraught with challenges, from sourcing the right ingredients and
          mastering traditional techniques to adapting these flavors for new
          palates. Yet, the founders' unwavering passion and dedication turned
          these hurdles into opportunities, preserving their rich heritage while
          introducing it to a new audience.
        </p>
        <p class="description-text font-p weight-400" data-aos="fade-right">
          Opening day was filled with anticipation, the air rich with the aromas
          of simmering broth, fresh herbs, and spices. Serving the first bowl
          was more than a culinary act; it was a declaration of love for their
          roots and an invitation to the community to delve into Yunnan's
          culinary traditions. Each taste was a celebration of the founders'
          journey and a bridge between cultures.
        </p>
        <p class="description-text font-p weight-400" data-aos="fade-right">
          Xishang Roodle quickly became a gathering spot for food enthusiasts
          and families alike, a testament to the community's acceptance and
          curiosity. It stood as a beacon of cultural exchange and tradition,
          embodying the founders' dream and showcasing the diversity of global
          flavors through the humble yet profound bowl of Yunnan rice noodles.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AboutPage',
}
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
  width: 100%; 
  background-image: url('../assets/background1.jpg'); 
  background-size: cover;
  background-position: 50% -8%; 
}

.intro-container {
  position: relative;
}

.intro-container::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -20px;
  width: 100%; 
  height: 100%;
  background-size: 30%;
  background-image: url('../assets/water-print.png'); 
  background-repeat: no-repeat;
  opacity: 0.4; 
}

.intro-row {
  padding: 60px 0 20px 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  background-image: url('../assets/intro.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
}

.intro-col {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
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
  height: inherit; 
  background-image: url('../assets//description.jpg'); 
  background-size: cover;
  background-position: center; 
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
  padding-bottom: 20px;
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
