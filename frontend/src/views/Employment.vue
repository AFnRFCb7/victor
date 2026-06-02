<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
})

const router = useRouter()

const count = ref(0)
const name = ref('')
const email = ref('')
const phone = ref('')
const teach = ref('')
const availability = ref('')
const resume = ref(null)
const message = ref('')
const age = ref('')

function handleFile(event) {
  resume.value = event.target.files[0]
}

async function submitForm() {
  if (!isValidPhone(phone.value)) {
    phoneError.value = 'Please enter a valid phone number'
    return
  } else {
    phoneError.value = ''
  }
  console.log('Phone is valid:', phone.value)
  console.log('Form data:', {
    name: name.value,
    email: email.value,
    phone: phone.value,
    teach: teach.value,
    availability: availability.value,
    resume: resume.value,
    message: message.value ,
    age : message.value
  })

    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('phone', phone.value)
    formData.append('teach', teach.value)
    formData.append('availability', availability.value)
    formData.append('message', message.value)
    formData.append('age', message.age)
    if (resume.value) formData.append('resume', resume.value)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/employment`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) throw new Error('Failed to submit form')
      router.push('/employment-received')
    } catch (err) {
      console.error(err)
      alert('Error submitting form. Please try again.')
    }
  router.push('/employment-received')
}

const phoneError = ref('')

function isValidPhone(number) {
  // Example: simple US format (123-456-7890 or 1234567890)
  const pattern = /^\d{3}-?\d{3}-?\d{4}$/
  return pattern.test(number)
}


</script>

<template>
<h1>Employment</h1>
<p> If you would like to work as a foreign language teacher at the International School of Languages please complete the form below and we will contact you shortly.</p>
<h2>Application Form</h2>
<form @submit.prevent="submitForm">
<h3>name</h3>
<input type="text" required v-model="name"></input>
<h3>email</h3>
<input type="email" required v-model="email"></input>
<h3>phone</h3>
<input type="tel" required v-model="phone"></input>
<span style="color:red">{{ phoneError }}</span>
<h3>Language you would like to teach</h3>
<input type="text" v-model="teach"></input>
<h3>Availability</h3>
<input type="text" v-model="availability"></input>
<h3>Resume</h3>
<input type="text" v-model="resume" @change="handleFile"></input>
<h3>message</h3>
<input type="text" v-model="message"></input>
<h3>age</h3>
<input type="text" v-model="age"></input>
<br></br>
<button type="submit">Submit</button>
</form>
</template>

<style scoped>
.language-card .bio {
    opacity: 0;
      transition: opacity 0.3s ease;
}
.language-card:hover .bio {
    opacity: 1;
}

.read-the-docs {
  color: #888;
}
.picture {
      width:5cm;
    border-radius: 50%;
    object-fit: cover;
    width: 5cm;
    width: 300px;
    height: 300px;
}
</style>
