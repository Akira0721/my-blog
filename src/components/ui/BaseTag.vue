<script setup>
defineProps({
  label: String,
  active: Boolean
})
</script>

<template>
  <span class="tag" :class="{ active }">{{ label }}</span>
</template>

<style scoped>
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  background: #eee;
  font-size: 12px;
  color: #666;
}
.tag.active {
  background: #42b883;
  color: white;
}
</style>