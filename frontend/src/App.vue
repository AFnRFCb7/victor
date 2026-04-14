
<template>
    <div>
  <nav class="nav">
    <ul class="menu">
      <li v-for="item in menu" :key="item.label" class="menu-item">
        
        <!-- If NO submenu -->
        <router-link v-if="!item.children" :to="item.to">
          {{ item.label }}
        </router-link>

        <!-- If HAS submenu -->
        <div v-else class="dropdown" @click="toggle(item)">
          {{ item.label }}

          <ul v-if="item.open" class="dropdown-menu">
            <li v-for="child in item.children" :key="child.label">
              <router-link :to="child.to">
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
    </div>
    <router-view />
    <h1>footer</h1>
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

<script setup>
import LanguageCard from './components/LanguageCard.vue'

import { reactive } from 'vue'

const menu = reactive([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    open: false,
    children: [
      { label: 'Web Dev', to: '/services/web' },
      { label: 'Design', to: '/services/design' }
    ]
  },
  {
    label: 'Account',
    open: false,
    children: [
      { label: 'Profile', to: '/profile' },
      { label: 'Settings', to: '/settings' }
    ]
  }
])

function toggle(item) {
  item.open = !item.open
}
</script>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  list-style: none;
}

.dropdown {
  cursor: pointer;
  position: relative;
}

.dropdown-menu {
  position: absolute;
  background: #333;
  color: white;
  list-style: none;
  padding: 10px;
  top: 100%;
  left: 0;
}
</style>