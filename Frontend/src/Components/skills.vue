<template>
  <section
    :class="isDark ? 'bg-dark text-white' : 'bg-white text-black'"
    class="d-flex align-items-center justify-content-center min-vh-100 px-3 py-5"
  >
    <div class="container">
      <h2 class="text-center fw-bold mb-5">My Skills</h2>
      <div class="row g-4">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col-6 col-sm-4 col-md-3 d-flex justify-content-center"
        >
          <div class="card text-center border-0 shadow-sm w-100 skill-card">
            <div class="card-body">
              <h5 class="card-title mb-2">{{ skill.name }}</h5>
              <small class="text-muted">{{ skill.level }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/skills'
import { useDarkStore } from '@/stores/darkData'
import { storeToRefs } from 'pinia'

const { skills } = storeToRefs(usePortfolioStore())
const { isDark } = storeToRefs(useDarkStore())
</script>

<style scoped>
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0.75rem;
}
.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}
</style>
