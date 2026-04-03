<script setup>
import { ref } from 'vue'

defineProps({
  bio: String,
  name: String,
  level:String,
  instructor:String,
  picture:String,
})

const count = ref(0)
</script>

<template>
	<tr class="language-card">
	<td class="bio">
	    I am awesome!
	</td>
	<td>{{ name }}</td>
	<td>{{ level }}</td>
        <td>{{ instructor }}<img class="picture" :src="picture"></img></td>
	</tr>
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
