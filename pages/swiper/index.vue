<template>
  <div>
    <div class="flex items-center justify-center h-screen relative">
      <div class="swiper mySwiper-fakhri">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
      </div>
      <!-- If pagination is needed -->
      <div class="swiper-pagination"></div>
      <!-- If navigation buttons are needed -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import  { Swiper, Navigation, Pagination, EffectCards, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'SwiperIndex',
  layout: 'DefaultBase',

  mounted(){
     // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // init Swiper:  eslint-disable used for deleting error of unsued const swiper
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.mySwiper-fakhri', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      loop: false,
      effect: "cards",
      grabCursor: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, EffectCards, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      // Autoplay if needed
      autoplay: {
        delay: 1500,
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    // you can use different options later
    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })
  }
}
</script>

<style lang="css" scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color:red;
}

.swiper-slide:nth-child(2n) {
  background-color: blue;
}

.swiper-slide:nth-child(3n) {
  background-color:red;
}

.swiper-slide:nth-child(4n) {
  background-color:red;
}

.swiper-slide:nth-child(5n) {
  background-color:red;
}

.swiper-slide:nth-child(6n) {
  background-color:red;
}

.swiper-slide:nth-child(7n) {
  background-color:red;
}

.swiper-slide:nth-child(8n) {
  background-color:red;
}

.swiper-slide:nth-child(9n) {
  background-color:red;
}

.swiper-slide:nth-child(10n) {
  background-color:blue;
}
</style>