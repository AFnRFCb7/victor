# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## To Create A Page
1. Open my-vue-app/src/router/index.js
2. Add to the routes object ```{path : $PATH, name : $NAME , component : $COMPONENT }```
   1. PATH is how the user accesses the route.  What they see when they look at their browser bar.
   2. NAME this is probably the least important.  it  helps you not the user.
   3. COMPONENT is the most important thing.  this dictates what shows to the user.
      1. Component names are not QUOTED
      2. Components 
3. Create the COMPONENT that you specified in 2.3

http://localhost:5173/#/employment

```
npm install
npm run dev
```
