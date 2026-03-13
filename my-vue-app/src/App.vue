<script setup>
import LanguageCard from './components/LanguageCard.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <a href="https://vite.dev" target="_blank">
      <img src="./images/chinese.png" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Learn a Language Online Worldwide or In-Person in Washington DC" />
	<table>
		<tr>
			<th>Name</th>
			<th>Level</th>
			<th>Instructor</th>
		</tr>
  <LanguageCard name="Chinese" level="Beginner" instructor="Liu Xiao Yan" />
	<LanguageCard name="Chess" level="Beginner" instructor="Victor Merryman"/>
	</table>
</template>

<style scoped>
.app {
	background-image: url(./images/chinese.png);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
