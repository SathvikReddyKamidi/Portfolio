import { createRouter, createWebHistory } from "vue-router";
import About from "@/Components/about.vue";
import App from "./App.vue";
import Projects from "./Components/Projects.vue";
import Contact from "./Components/Contact.vue";
import Skills from "./Components/skills.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: App, name: "Home", hash: '#home' },
        { path: "/about", component: About, name: "About", hash: '#about' },
        { path: "/projects",component: Projects, name: "Projects" },
        { path: "/contact", component: Contact, name: "Contact", hash: '#contact' },
        { path: "/skills", component: Skills , name: "Skills", hash: '#skills'}
    ],
    scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
    
})

  export default router;