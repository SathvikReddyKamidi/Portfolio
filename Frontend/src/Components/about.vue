
<template>
  <section :class="isDark ? 'bg-dark text-white' : 'bg-white text-black'" class="min-vh-100 d-flex align-items-center justify-content-center py-5">
    <div class="container text-center px-3 px-md-5">
      <h2 class="fw-bold mb-4 display-5 animate__animated animate__fadeInDown">About Me</h2>
      <p class="fs-5 lh-lg animate__animated animate__fadeInUp animate__delay-1s">
        Hey! I'm <strong>Sathvik K</strong>, a passionate <strong>Java Full Stack Developer</strong> specializing in backend development with <strong>Java</strong> and <strong>Spring Boot</strong>. I have experience building scalable microservices, securing REST APIs, and creating responsive frontends with Angular.
        <br /><br />
        At <strong>Wipro</strong>, I contributed to multiple full stack projects, managing both backend systems using Spring Boot and databases with <strong>MySQL</strong>. My journey continues as I pursue my <strong>Master’s in Computer Science</strong> at the <strong>University of Central Missouri</strong>, constantly seeking to solve real-world problems through clean, efficient code.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';
const darkStore = useDarkStore();
const { isDark } = storeToRefs(darkStore);
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

section {
  font-family: 'Poppins', sans-serif;
}

p {
  max-width: 900px;
  margin: 0 auto;
}
</style>
