<template>
  <div class="chat-popup">
    <header class="chat-header">
      <h3>Ask Me Anything!</h3>
      <button @click="$emit('close')" class="close-button">&times;</button>
    </header>

    <div class="chat-messages">
      <div v-for="(msg, index) in messages" :key="index">
        <div :class="msg.role === 'user' ? 'user-msg' : 'ai-msg'">
          {{ msg.content }}
        </div>
      </div>
    </div>

    <form @submit.prevent="sendMessage" class="chat-input">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Ask a question..."
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { usePortfolioStore } from '@/stores/skills.js';

const portfolioStore = usePortfolioStore();
const messages = ref([]);
const newMessage = ref('');

function buildContext() {
  let context = `Portfolio summary:\n${portfolioStore.summary}\n\nSkills:\n`;
  portfolioStore.skills.forEach(s => {
    context += `- ${s.name} (${s.level})\n`;
  });

  context += `\nProjects:\n`;
  portfolioStore.projects.forEach(p => {
    context += `- ${p.title}: ${p.description}\n`;
  });

  context += `\nEducation:\n`;
  portfolioStore.education.forEach(e => {
    context += `- ${e.degree}, ${e.university}, ${e.year}\n`;
  });

  context += `\nExperience:\n`;
  portfolioStore.experience.forEach(exp => {
    context += `- ${exp.role} at ${exp.company} (${exp.duration})\n`;
  });

  return context;
}

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  messages.value.push({ role: 'user', content: newMessage.value });
  const prompt = `${buildContext()}\nUser question: ${newMessage.value}`;

  try {
    const response = await axios.post('http://localhost:8080/api/chat/gemini', {
      message: prompt,
    });

    messages.value.push({ role: 'assistant', content: response.data.reply });
  } catch (error) {
    messages.value.push({ role: 'assistant', content: '⚠️ Gemini API error.' });
  }

  newMessage.value = '';
};
</script>

<style scoped>
.chat-popup {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 350px;
  max-height: 500px;
  background: #1f2937; /* Tailwind gray-800 */
  color: white;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827; /* darker gray */
  padding: 0.75rem 1rem;
  font-weight: bold;
  border-bottom: 1px solid #374151;
}

.close-button {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: #1f2937;
}

.user-msg {
  text-align: right;
  background-color: #3b82f6; /* blue-500 */
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.ai-msg {
  text-align: left;
  background-color: #374151; /* gray-700 */
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.chat-input {
  display: flex;
  border-top: 1px solid #374151;
  padding: 0.75rem;
  background-color: #111827;
}

.chat-input input {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: none;
  outline: none;
  color: black;
}

.chat-input button {
  background-color: #10b981; /* green-500 */
  color: white;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
}
</style>
    