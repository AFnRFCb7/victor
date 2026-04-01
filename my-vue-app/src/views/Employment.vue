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
const availability = ref('')
const resume = ref(null)
const message = ref('')

function handleFile(event) {
  resume.value = event.target.files[0]
}

function submitForm() {
  console.log('Form data:', {
    name: name.value,
    email: email.value,
    phone: phone.value,
    availability: availability.value,
    resume: resume.value,
    message: message.value
  })
  router.push('/employment-received')
}

</script>

<template>
<h1>Employment</h1>
<p> If you would like to work as a foreign language teacher at the International School of Languages please complete the form below and we will contact you shortly.</p>
<h2>Application Form</h2>
<form>
<h3>name</h3>
<input type="text" v-model="name"></input>
<h3>email</h3>
<input type="text" v-model="email"></input>
<h3>phone</h3>
<input type="text" v-model="phone"></input>
<h3>Language you would like to teach</h3>
<input type="text" v-model="phone"></input>
<h3>Availability</h3>
<input type="text" v-model="availability"></input>
<h3>Resume</h3>
<input type="text" v-model="resume"></input>
<h3>message</h3>
<input type="text" v-model="message"></input>
<br></br>
<button type="button" @click="submitForm">Submit</button>
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
