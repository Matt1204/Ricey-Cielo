<template>
  <!-- <b-container class="intro-container" fluid>
    <b-row class="intro-row" align-v="center" align-h="center">
      <b-col class="intro-col" cols="11" sm="8">
        <img
          src="../assets/flower3.png"
          alt="flower2"
          class="text-icon"
          srcset=""
          data-aos="fade-up"
        />
        <p class="text-title" data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div class="intro-p" data-aos="fade-up">
          <p class="text-p">
            Ut pharetra sit amet aliquam. Vitae nunc sed velit dignissim.
            Elementum integer enim neque volutpat ac tincidunt vitae semper.
          </p>
          <p class="text-p">
            . Id semper risus in hendrerit gravida rutrum quisque non. Amet
            justo donec enim diam vulputate ut pharetra sit. Ullamcorper sit
            amet risus nullam.
          </p>
          <p class="text-p">
            Quam id leo in vitae turpis massa sed. Odio morbi quis commodo odio
            aenean sed adipiscing diam donec. Vulputate enim nulla aliquet
            porttitor lacus luctus.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container> -->

  <b-container fluid class="description-container">
    <b-row class="description-row" align-v="center" align-h="start">
      <b-col
        cols="12"
        lg="8"
        class="description-text-col order-lg-1"
        order="2"
        data-aos="fade-up"
      >
        <div class="description-title-container">
          <img
            src="../assets/water-print.png"
            alt="starter"
            class="description-title-icon"
          />
          <p class="description-title text-title">Hot Soup, Warm Hearts</p>
        </div>
        <p class="description-text-p weight-400">
          The story of Crossing the Bridge Rice Noodles(过桥米线), one of Yunnan
          Province's most famous dishes, has a romantic and inventive origin.
        </p>
        <p class="description-text-p weight-400">
          Legend has it that in the Qing Dynasty, a scholar was preparing for
          the imperial exams on a small island. His devoted wife, seeking to
          bring him hot meals, found that by the time she crossed the bridge to
          the island, the food would turn cold. She discovered that a layer of
          oil on top of the soup could keep it hot for longer. Thus, she started
          preparing a hot soup with raw ingredients on the side. When she
          arrived, she mixed the ingredients into the soup right in front of her
          husband, ensuring a hot, fresh meal.
        </p>
        <p class="description-text-p weight-400">
          The dish, characterized by its hot, savory broth into which thin
          slices of meat, vegetables, and rice noodles are dipped, came to be
          known as Crossing the Bridge Rice Noodles, symbolizing care and
          ingenuity.
        </p>
      </b-col>

      <b-col
        cols="12"
        lg="4"
        class="description-img-container order-lg-2"
        order="1"
      >
        <img
          src="../assets/step6.jpg"
          alt="description2"
          class="description-img"
          data-aos="fade-up"
        />
      </b-col>
    </b-row>
  </b-container>

  <StepSlides />

  <b-container class="dish-intro-container" fluid>
    <b-row class="dish-intro-row">
      <b-col cols="12" md="4" class="dish-intro-col1 p-0" data-aos="fade-up">
        <div class="content-wrapper">
          <img
            src="../assets/dish2.jpg"
            alt="dish2"
            srcset=""
            class="dish-intro-pic zoom-in"
          />
          <div class="dish-text">
            <p class="dish-title">Small Pot Rice Noodle (小锅米线)</p>
            <p class="dish-p">
              In the heart of Yunnan, Small Pot Rice Noodle, holds a special
              place for its unique preparation method that intertwines tradition
              and flavor. The essence of this beloved dish lies in its brewing,
              served in individual earthen pots that not only retain warmth but
              also infuse each serving with a depth of flavor developed over
              years of use. These pots, seasoned by countless meals, contribute
              an unmistakable richness to the dish, making it more than just a
              meal but a cherished experience.
            </p>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="dish-intro-col2 p-0" data-aos="fade-up">
        <div class="content-wrapper">
          <img
            src="../assets/dish3.jpg"
            alt="dish3"
            srcset=""
            class="dish-intro-pic zoom-in"
          />
          <div class="dish-text">
            <p class="dish-title">Magic Sauce & Tofu Rice Noodle (豆花米线)</p>
            <p class="dish-p">
              it is a traditional dish from Kunming, Yunnan Province, belonging
              to the Yunnan cuisine category. The main ingredients of this dish
              include rice noodles and soft tofu, with side ingredients like
              local pickles, pork, and minced chives, offering a spicy and
              fragrant taste. It originated from the folk and gradually became a
              unique variety in snack shops. With its spicy, smooth, affordable,
              and delicious qualities, it's jokingly referred to as a
              craving-relief food. Once you've tried it, you'll want to have it
              again, creating a deep affection for this dish.
            </p>
          </div>
        </div>
      </b-col>
      <b-col cols="12" md="4" class="dish-intro-col3 p-0" data-aos="fade-up">
        <div class="content-wrapper">
          <img
            src="../assets/dish4.jpg"
            alt="dish4"
            srcset=""
            class="dish-intro-pic zoom-in"
          />
          <div class="dish-text">
            <p class="dish-title">Dish name 3..</p>
            <p class="dish-p">
              . Id semper risus in hendrerit gravida rutrum quisque non. Amet
              justo donec enim diam vulputate ut pharetra sit. Ullamcorper sit
              amet risus nullam.
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex justify-content-center">
        <button type="button" class="menu-btn btn">
          Menu
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script scoped>
import StepSlides from "@/components/StepSlides.vue";
export default {
  name: "HomePage",
  components: {
    StepSlides,
  },
};
</script>

<style scoped>
.text-title {
  font-size: 28px;
  line-height: 2;
  opacity: 0.9;
}

.text-p {
  font-size: 20px;
  line-height: 1.7;
  opacity: 0.8;
}

.weight-400 {
  font-weight: 400;
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

.intro-col {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}

.intro-row {
  padding: 5px 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  background-image: url("../assets/intro.jpg"); /* Set background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
}

.text-icon {
  display: inline;
  width: 50px;
  margin-bottom: 20px;
}

.intro-waterprint {
  display: inline;
  position: relative;
  left: 20px;
  top: -350px;
  width: 250px;
  height: auto;
  filter: grayscale(1);
  opacity: 0.5;
}

.intro-p {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.description-container {
  background-image: url("../assets/intro.jpg"); /* Set background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
  color: #d3ae68;
}
.description-row {
  height: inherit;
  padding: 30px 0;
}
.description-text-col {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 30px 150px;
}
.description-title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
}
.description-title-icon {
  display: inline;
  width: 50px;
  height: auto;
}
.description-title {
  padding: 0 0 0 10px;
  margin: 0;
}
.description-text-p {
  line-height: 1.7;
  font-size: 18px;
}
.description-img-container {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  padding: 0;
}
.description-img {
  height: auto;
  width: 60%;
}
.dish-intro-container {
  padding: 100px 0 50px 0;

  background-image: url("../assets/intro.jpg"); /* Set background image */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Do not repeat the image */
}

.dish-intro-col1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.dish-intro-col2 {
  display: flex;
  justify-content: center;
}
.dish-intro-col3 {
  display: flex;
  justify-content: start;
}
.content-wrapper {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.dish-intro-pic {
  width: 100%;
}
.dish-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-top: 50px;
  color: #6a6a6a;
}
.dish-title {
  font-size: 22px;
  margin-bottom: 15px;
}
.dish-p {
  font-size: 18px;
  line-height: 1.7;
  font-weight: 500;
  opacity: 0.9;
}
.menu-btn {
  margin-top: 40px;
  width: 90px;
  border: #d3ae68 1px;
  border-radius: 10px;
  color: #d3ae68;

}
.menu-btn:hover {
  background-color: #d3ae68;
  color: #ffffff;
}
.zoom-in {
  transition: transform 0.2s ease;
}

.zoom-in:hover {
  transform: scale(1.07);
}
@media (max-width: 767px) {
  .intro-row {
    padding: 40px 0;
  }
  .intro-p {
    padding-top: 25px;
  }
  .text-title {
    font-size: 20px;
    line-height: 1.4;
  }
  .text-p {
    font-size: 14px;
    line-height: 1.4;
  }

  .dish-intro-row {
    padding-top: 20px;
  }

  .dish-intro-col1 {
    justify-content: center;
    margin-bottom: 50px;
  }
  .dish-intro-col2 {
    justify-content: center;
    margin-bottom: 50px;
  }
  .dish-intro-col3 {
    justify-content: center;
    margin-bottom: 50px;
  }
  .content-wrapper {
    width: 90%;
  }
  .dish-text {
    margin-top: 15px;
  }
  .dish-title {
    margin-bottom: 5px;
  }
  .description-text-col {
    padding: 15px 35px 0px 35px;
    text-align: center;
  }
  .description-text-p {
    font-size: 14px;
    line-height: 1.4;
  }
}

@media (max-width: 992px) {
  .description-img-container {
    justify-content: center;
  }

  .description-img {
    margin-top: 50px;
    margin-bottom: 20px;
    width: 70%;
  }
}
</style>
