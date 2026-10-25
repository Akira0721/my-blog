<template>
  <div class="card">
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
  margin-bottom: 16px;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>