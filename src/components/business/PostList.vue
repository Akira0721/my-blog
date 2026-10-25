<script setup>
import PostCard from './PostCard.vue'

defineProps({
  posts: Array
})
</script>

<template>
  <div class="post-list">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>