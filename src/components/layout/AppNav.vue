<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/posts">文章列表</RouterLink>
    <RouterLink to="/about">关于我</RouterLink>
    <RouterLink to="/guestbook">留言板</RouterLink>
  </nav>
</template>

<style scoped>
.nav { display: flex; gap: 20px; }
.nav a { text-decoration: none; color: #333; font-weight: bold; }
.nav a.router-link-active { color: #42b883; }
</style>