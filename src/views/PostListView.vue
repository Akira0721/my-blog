<script setup>
import PostList from '../components/business/PostList.vue'
import { usePostsStore } from '../stores/posts'
import { storeToRefs } from 'pinia'

const store = usePostsStore()
const { posts, totalLikes } = storeToRefs(store)
</script>

<template>
  <div>
    <div class="header">
      <h2>文章列表</h2>
      <p>共收到 {{ totalLikes }} 个赞</p>
    </div>
    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header h2 {
  margin: 0;
}
.header p {
  color: #999;
  font-size: 14px;
}
</style>