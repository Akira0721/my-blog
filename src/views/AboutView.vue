<script setup>
import BaseCard from '../components/ui/BaseCard.vue'
</script>

<template>
  <div class="about">
    <h2>关于我</h2>
    <BaseCard>
      <div class="profile">
        <div class="avatar">👨‍💻</div>
        <div class="info">
          <h3>学生</h3>
          
        </div>
      </div>
    </BaseCard>

    <BaseCard>
      <h3>🛠 技能栈</h3>
      <ul class="skills">
        <li>Vue 3 (Composition API)</li>
        <li>Vue Router 4</li>
        <li>Pinia 状态管理</li>
        <li>Vite 构建工具</li>
        <li>HTML / CSS / JavaScript</li>
      </ul>
    </BaseCard>
  </div>
</template>

<style scoped>
.about h2 { margin-bottom: 20px; }
.profile { display: flex; gap: 20px; align-items: center; }
.avatar { font-size: 50px; }
.info h3 { margin: 0 0 10px 0; color: #333; }
.info p { margin: 0; color: #666; line-height: 1.6; }
.skills { line-height: 2; color: #444; padding-left: 20px; }
</style>