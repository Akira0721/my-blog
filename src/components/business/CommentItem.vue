<script setup>
import { computed } from 'vue'

const props = defineProps({
  comment: Object
})

// 计算属性：格式化时间
const timeAgo = computed(() => {
  const diff = Date.now() - props.comment.createdAt
  const mins = Math.floor(diff / 60000)
  return mins < 1 ? '刚刚' : `${mins} 分钟前`
})
</script>

<template>
  <div class="comment-item">
    <p class="content">{{ comment.text }}</p>
    <span class="time">{{ timeAgo }}</span>
  </div>
</template>

<style scoped>
.comment-item { padding: 10px 0; border-bottom: 1px dashed #eee; }
.content { margin: 0 0 5px 0; }
.time { font-size: 12px; color: #999; }
</style>