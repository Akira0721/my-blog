<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* 全局基础样式 */
body { margin: 0; background: #f9f9f9; font-family: sans-serif; }
.main-content { min-height: 70vh; max-width: 800px; margin: 20px auto; padding: 0 20px; }
</style>