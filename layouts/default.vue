<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-between">
    <Header />
      <main class="flex-1 py-16 px-6 flex items-center justify-center">
        <slot />
      </main>
    <Footer />
  </div>
</template>
