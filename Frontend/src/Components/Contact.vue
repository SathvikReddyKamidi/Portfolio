<template>
  <div :class="isDark ? 'bg-dark text-white' : 'bg-white text-black'">
  <div class="container-fluid px-3 px-md-5 d-flex justify-content-center text-center align-items-center min-vh-100" >      
     <div
        class="mx-auto rounded-4 p-4 p-md-5 shadow-lg w-100"
        style="max-width: 750px;"
        :class="isDark ? 'bg-white text-black' : 'bg-dark text-white'"
    >
        <h4 class="">Contact Me</h4>
        <hr />
        <div class="row gy-4">
          <!-- Left side -->
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h5>Sathvik Reddy Kamidi</h5>
            <p class="mb-3">Java Full Stack Developer</p>
            <a href="mailto:kamidisathvikreddy@gmail.com" class="btn btn-primary mb-4">Email Me</a>
            <p>
              Connect with me on
              <a href="https://www.linkedin.com/in/sathvik-reddy-kamidi/" target="_blank" rel="noopener noreferrer"
                >LinkedIn</a
              >
            </p>
          </div>
          <!-- Right side -->
          <div class="col-md-6">
            <h5 class="mb-3 text-center">Get in Touch</h5>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control mb-3"
              placeholder="Your Name"
              v-model="name"
            />
            <input
              type="email"
              name="email"
              id="email"
              class="form-control mb-3"
              placeholder="Your Email"
              v-model="email"
            />
            <textarea
              name="message"
              id="message"
              class="form-control mb-3"
              rows="4"
              placeholder="Your Message"
              v-model="message"
            ></textarea>
            <button class="btn btn-primary w-100" @click="contactStore.submitForm()">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDarkStore } from '@/stores/darkData';
import { storeToRefs } from 'pinia';   
import { useContactStore } from '@/stores/contact'; 

const contactStore = useContactStore();
const { name, email, message } = storeToRefs(contactStore); // makes name reactive

// Create store and make reactivity work
const darkStore = useDarkStore();     
const { isDark } = storeToRefs(darkStore); // makes isDark reactive
</script>