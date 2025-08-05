<!-- <template>
            <label class="switch">
              <input type="checkbox" :checked="isDark" @change="toggleDark()" />
              <span class="slider round"></span>
            </label>
</template>
<script setup>
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';

// // Create store and make reactivity work
const darkStore = useDarkStore();
const { isDark } = storeToRefs(darkStore); // makes isDark reactive
const { toggleDark } = darkStore;

</script>
<style >
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 10px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 20px;
  background-color: #e9e4e4;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 0px;
  top: 0px;
  bottom: 4px;
  background-color: rgb(216, 214, 214);
  -webkit-transition: .5s;
  transition: .5s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
[color-scheme="dark"] {
  background-color:  #212529;
  
}
[color-scheme="light"] {
  background-color: white;
  
}
</style> -->
<template>
  <label class="switch">
    <input type="checkbox" :checked="isDark" @change="toggleDark()" />
    <span class="slider round"></span>
  </label>
</template>

<script setup>
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';

const darkStore = useDarkStore();
const { isDark } = storeToRefs(darkStore);
const { toggleDark } = darkStore;
</script>

<style scoped>
/* Container */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

/* Hide default checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Track */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: background-color 0.4s;
  border-radius: 999px;
}

/* Thumb */
.slider::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  top: 3px;
  background-color: white;
  transition: transform 0.4s ease;
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

/* When checked */
input:checked + .slider {
  background-color: #0d6efd;
}

input:checked + .slider::before {
  transform: translateX(24px);
}

/* Optional dark and light scheme styling */
[color-scheme="dark"] {
  background-color: #212529;
}
[color-scheme="light"] {
  background-color: white;
}
</style>
