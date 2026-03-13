<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  level:String,
  instructor:String,
})

const count = ref(0)
</script>

<template>.
	<tr>
	<td>{{ name }}</td>
	<td>{{ level }}</td>
        <td>{{ instructor }}</td>		
	</tr>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
