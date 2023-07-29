<script setup lang="ts">
import Before from './components/before/App.vue'
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <Before />
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

::v-deep(label):has(input[type='checkbox']) {
  user-select: none;
}
</style>
