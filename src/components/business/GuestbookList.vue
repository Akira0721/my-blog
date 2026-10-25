<script setup>
import CommentItem from './CommentItem.vue'

defineProps({
  comments: Array
})
</script>

<template>
  <div>
    <div v-if="comments.length === 0" class="empty">还没有留言，快来抢沙发吧！</div>
    <CommentItem v-for="c in comments" :key="c.id" :comment="c" />
  </div>
</template>

<style scoped>
.empty { text-align: center; color: #999; padding: 20px 0; }
</style>