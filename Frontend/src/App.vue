<template>
  <div class="page-container">
    <header class="header">
      <!-- Your fixed header content -->
      <NavBar />
    </header>

    <main >
      <!-- Scrollable main content -->
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
<!-- 
    <footer class="footer">
      
      <button
      @click="showChat = !showChat"
      class="fixed bottom-4 right-4 bg-blue-500 text-white p-1 rounded-full shadow-lg hover:bg-blue-600 transition"
      aria-label="Toggle AI chat popup"
    >
      
    </button>

    <ChatAi v-if="showChat" @close="showChat = false" />
    </footer> -->
    <button
      @click="showChat = !showChat"
      class="chat-button"
      aria-label="Toggle AI chat popup"
    >
      💬
    </button>

    <!-- Chat Popup -->
    <ChatAi v-if="showChat" @close="showChat = false" />
  
  </div>
  
</template>

<script setup>
import NavBar from './Layout/NavBar.vue';
import About from './Components/about.vue';
import Projects from './Components/Projects.vue';
import Contact from './Components/Contact.vue';
import Skills from './Components/skills.vue';
import ChatAi from './Components/chatAi.vue';
import { ref } from 'vue';  
const showChat = ref(false); // State to control chat popup visibility
</script>


<style scoped>
html {
  scroll-behavior: smooth;
}

.page-container {
  position: relative;
  overflow-x: hidden;
}

/* Main content scrolls naturally */
main {
  flex: 1;
}

/* Chat Button - Always Fixed */
.chat-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
  background-color: #888496; /* Tailwind blue-600 */
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}

.chat-button:hover {
  background-color: #1d4ed8; /* Tailwind blue-700 */
}
</style>

