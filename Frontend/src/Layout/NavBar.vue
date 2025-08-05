<!-- <template>
    <div >
    <nav :class="isDark ? 'navbar sticky-top navbar-expand-lg navbar-dark bg-dark' : 'navbar sticky-top navbar-expand-lg navbar-light'">
        <div class="container-fluid" >
            <a class="navbar-brand" href="#" >Sathvik Reddy Kamidi</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto me-5" >
                <router-link class="nav-link active" aria-current="page" :to="{ path: '/', hash: '#about'}">About</router-link>
                <router-link class="nav-link" :to="{ path: '/', hash: '#projects'}">Projects</router-link>
                <router-link class="nav-link" :to="{ path: '/', hash: '#contact'}">Contact</router-link>
                <router-link class="nav-link" :to="{ path: '/', hash: '#skills'}">Skills</router-link>
                &nbsp; &nbsp;<ToggleSwitch></ToggleSwitch>
            </div>
            </div>
        </div>
    </nav>
    </div>
</template>
<script setup>
import ToggleSwitch from '../Components/ToggleSwitch.vue';
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';    

const darkStore = useDarkStore();     
const { isDark } = storeToRefs(darkStore); 
</script>
 -->
<template>
  <nav
    :class="[
      'navbar navbar-expand-lg sticky-top shadow-sm px-3 py-2',
      isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand fw-semibold fs-5" href="#">Sathvik Reddy Kamidi</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto align-items-center">
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ path: '/', hash: '#about' }"
            >About</router-link
          >
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ path: '/', hash: '#projects' }"
            >Projects</router-link
          >
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ path: '/', hash: '#contact' }"
            >Contact</router-link
          >
          <router-link
            class="nav-link"
            active-class="active"
            :to="{ path: '/', hash: '#skills' }"
            >Skills</router-link
          >
          <div class="ms-3">
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import ToggleSwitch from '../Components/ToggleSwitch.vue'
import { useDarkStore } from '@/stores/darkData'
import { storeToRefs } from 'pinia'

const darkStore = useDarkStore()
const { isDark } = storeToRefs(darkStore)
</script>
<style scoped>
.navbar-nav .nav-link {
  font-weight: 500;
  transition: color 0.2s ease;
}

.navbar-nav .nav-link:hover {
  color: #0d6efd !important; /* Bootstrap primary blue */
}
</style>

