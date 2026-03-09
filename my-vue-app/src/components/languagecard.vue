<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  level:String,
  instructor:String,
})

const count = ref(0)
</script>

<template>
	<h1>{ name }</h1>
	<p>{ level }</p>
        <p>{ instructor }</p>		
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
