<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import BackToTop from './components/ui/BackToTop.vue' // <-- 新增这一行
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <AppFooter />
    <BackToTop /> <!-- <-- 挂载组件 -->
  </div>
</template>

<style>
/* 保持原有的全局样式不变 */
body { margin: 0; background: #f9f9f9; font-family: sans-serif; }
.main-content { min-height: 70vh; max-width: 800px; margin: 20px auto; padding: 0 20px; }
</style>
<style>
/* 全局基础样式 */
body { margin: 0; background: #f9f9f9; font-family: sans-serif; }
.main-content { min-height: 70vh; max-width: 800px; margin: 20px auto; padding: 0 20px; }
</style>