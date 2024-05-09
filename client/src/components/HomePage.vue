<template>
    <div class="auth-inner">
      <div class="slide">
        <swiper
                  :spaceBetween="30"
                  :centeredSlides="true"
                  :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                  }"
                  :pagination="{
                    clickable: true,
                  }"
                  :navigation="true"
                  :modules="modules"
                  class="mySwiper"
                  v-if="!user">

            <swiper-slide>

                  <img src="./assets/infermiere.jpg" style="width: 92.5%;"  alt="">
                  <div>
                    <h3>Infermier</h3>
                  </div>
                </swiper-slide>

                <swiper-slide>
                    <img src="./assets/doctor.jpg" style="width: 66%;" alt="">
                    <div>
                    <h3>Doctor</h3>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <img src="./assets/adjoint.jpg"  style="width: 85%;" alt="">
                  <div>
                    <h3>Adjoint</h3>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <img src="./assets/img-1.jpg" style="width: 93%;" alt="">
                  <div>
                    <h3>Course</h3>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <img src="./assets/img-2.jpg" alt="">
                  <div>
                    <h3>Exams</h3>
                  </div>
            </swiper-slide>

        </swiper>
      </div>

      <Service />

      <About />

      <Footer />


    </div>
</template>

  <script>
  import Service from './home/ServiceHomePage.vue'
  import Footer from'./home/FooterHomePage.vue'
  import About from './home/AboutHomePage.vue'
  // Import Swiper Vue.js component
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // Import required modules
  // import required modules
  import { Autoplay, Navigation } from 'swiper/modules';

  import { mapGetters } from 'vuex';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Service,
      Footer,
      About
    },
    setup() {
      return {
        modules: [Autoplay, Navigation],
      };
    },
    computed: {
      ...mapGetters(['user']),
    },
  };
  </script>

  <style>

.slide{
    width: 1000px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all .3s;
  }
 .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  position: relative;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
}

.swiper-slide div {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.swiper-slide h3 {
  margin: 0;
  padding: 10px;
  color: white;
}
  </style>