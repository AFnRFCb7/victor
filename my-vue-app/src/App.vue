<script setup>
import LanguageCard from './components/LanguageCard.vue'
</script>

<template>
    <router-view />
    <!--
  <div class="app">
    <a href="https://vite.dev" target="_blank">
      <img src="./images/chinese.png" class="logo,chatgptimage" alt="Vite logo" />
    </a>
  </div>
	<table>
		<tr>
			<th>Name</th>
			<th>Level</th>
			<th>Instructor</th>
		</tr>
  <LanguageCard name="Chinese" level="Beginner" instructor="Liu Xiao Yan" picture="images/victor.jpg" />
	<LanguageCard name="Chess" level="Beginner" instructor="Victor Merryman" picture="src/images/victor.jpg"/>
	</table>
	-->
</template>

<style scoped>
.chatgptimage {
  width:10cm
}
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
