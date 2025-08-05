<!-- <template>
    <div :class=" isDark ? ' bg-dark text-white ' : 'bg-white text-black'">

  <section class="d-flex justify-content-center align-items-center vh-100">
    <div class="text-center w-100">
      <h2 class="mb-4">My Projects</h2>
    <Swiper
       :modules="[Navigation, Autoplay]"
      navigation
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      class="w-full max-w-2xl mx-auto px-4"
    >
      <SwiperSlide v-for="(project, index) in projects" :key="index">
        
        <div class="p-6 rounded-lg shadow-lg h-[300px] flex flex-col justify-center items-center text-center">
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-300 mb-4">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            View Project
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
     </div>
  </section>
  </div>
   
</template>
<script setup>
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';  
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Navigation, Autoplay } from 'swiper/modules'

// Create store and make reactivity work
const darkStore = useDarkStore();     
const { isDark } = storeToRefs(darkStore); // makes isDark reactive
const projects = [
  {
    title: 'Cloud-Based Web App using AWS',
    description: 'A scalable web app built with EC2, S3, and Lambda.',
    link: 'https://your-cloud-app-link.com',
  },
  {
    title: 'E-Commerce Website',
    description: 'Developed with HTML, CSS, JS, PHP, MySQL during internship.',
    link: 'https://your-ecommerce-link.com',
  },
  {
    title: 'Java Full Stack App',
    description: 'CRUD operations with Spring Boot and Vue.js.',
    link: 'https://your-java-app-link.com',
  },
]
</script> -->
<template>
  <div :class="isDark ? 'bg-dark ' : 'bg-white'" class="min-vh-100 d-flex align-items-center justify-content-center py-5">
    <div class="container text-center">
      <h2 class="fw-bold mb-5 display-5">My Projects</h2>

      <Swiper
        :modules="[Navigation, Autoplay]"
        navigation
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        class="w-100 mx-auto"
      >
        <SwiperSlide v-for="(project, index) in projects" :key="index">
              <div class="p-4 rounded-4 shadow-lg mx-auto bg-body text-start" style="max-width: 800px;">
                <h3 class="h5 fw-bold mb-2">{{ project.title }}</h3>
                <p class="mb-1 text-muted"><strong>Role:</strong> {{ project.role }}</p>
                <p class="mb-1 text-muted"><strong>Duration:</strong> {{ project.duration }}</p>
                <p class="mb-3">{{ project.description }}</p>

                <ul class="mb-3 ps-3 list-unstyled">
                  <li v-for="(feature, idx) in project.features" :key="idx">✔️ {{ feature }}</li>
                </ul>

                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="(tech, i) in project.tech"
                    :key="i"
                    class="badge bg-primary-subtle text-primary border border-primary"
                  >
                    {{ tech }}
                  </span>
                </div>

                <a
                  :href="project.link"
                  target="_blank"
                  class="btn btn-sm btn-outline-primary"
                >
                  🔗 View Project on GitHub
                </a>
              </div>
         </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { useDarkStore } from '@/stores/darkData'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Navigation, Autoplay } from 'swiper/modules'
import { usePortfolioStore } from '@/stores/skills'
// Reactive dark mode
const darkStore = useDarkStore()
const { isDark } = storeToRefs(darkStore)
const projects = usePortfolioStore().projects;
// const projects = [
//   {
//     title: 'Cloud-Based Web App using AWS',
//     description: 'A scalable web app built with EC2, S3, and Lambda.',
//     link: 'https://your-cloud-app-link.com',
//   },
//   {
//     title: 'E-Commerce Website',
//     description: 'Developed with HTML, CSS, JS, PHP, MySQL during internship.',
//     link: 'https://your-ecommerce-link.com',
//   },
//   {
//     title: 'Java Full Stack App',
//     description: 'CRUD operations with Spring Boot and Vue.js.',
//     link: 'https://your-java-app-link.com',
//   },
// ]
</script>
<style scoped>
.project-card {
  /* background-color: rgba(255, 255, 255, 0.05); */
  backdrop-filter: blur(5px);
}

.project-card:hover {
  transform: scale(1.03);
  /* box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); */
}

.swiper {
  padding-bottom: 30px;
}
</style>
