<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  level:String,
  instructor:String,
  picture:String,
})

const count = ref(0)
</script>

<template>.
	<tr>
	<td>{{ name }}</td>
	<td>{{ level }}</td>
        <td>{{ instructor }}<img class="picture" :src="picture"><img></td>		
	</tr>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.picture {
      width:5cm;
    border-radius: 50%;
    object-fit: cover;
    width: 5cm;
    width: 200px;
    height: 200px;      
}
</style>
