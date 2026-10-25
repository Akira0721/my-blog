<script setup>
defineProps({
  count: Number,
  liked: Boolean
})
defineEmits(['toggle'])
</script>

<template>
  <button class="like-btn" @click="$emit('toggle')">
    <span :class="{ liked }">❤️</span> {{ count }}
  </button>
</template>

<style scoped>
.like-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}
.liked {
  color: red;
}
</style>