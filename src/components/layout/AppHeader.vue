<script setup>
import AppNav from './AppNav.vue'
</script>

<template>
  <header class="header">
    <div class="logo">我的 Vue 博客</div>
    <AppNav />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.logo { font-size: 20px; font-weight: bold; color: #42b883; }
</style>