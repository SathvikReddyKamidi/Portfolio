import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useContactStore = defineStore('contact', () => {
  const name = ref('')
  const email = ref('')
  const message = ref('')

  const submitForm = async () => {
    try {
      await axios.post('http://localhost:8080/api/contact/send', {
        name: name.value,
        email: email.value,
        message: message.value,
      })
      alert('✅ Message sent! You and the owner will receive a confirmation email.')

      // Reset form
      name.value = ''
      email.value = ''
      message.value = ''
    } catch (err) {
      alert('❌ Failed to send message. Please try again later.')
      console.error(err)
    }
  }

  return {
    name,
    email,
    message,
    submitForm,
  }
})
