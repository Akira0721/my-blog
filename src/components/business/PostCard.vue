<script setup>
import BaseCard from '../ui/BaseCard.vue'
import BaseTag from '../ui/BaseTag.vue'
import LikeButton from './LikeButton.vue'
import { usePostsStore } from '../../stores/posts'

// 接收父组件传来的单篇文章数据
const props = defineProps({
  post: Object
})

const store = usePostsStore()

const handleLike = () => {
  store.toggleLike(props.post.id)
}
</script>

<template>
  <BaseCard>
    <h3>{{ post.title }}</h3>
    <p class="summary">{{ post.summary }}</p>
    <div class="tags">
      <BaseTag v-for="tag in post.tags" :key="tag" :label="tag" />
    </div>
    <div class="footer">
      <LikeButton 
        :count="post.likes" 
        :liked="store.likedIds.has(post.id)"
        @toggle="handleLike" 
      />
      <RouterLink :to="`/posts/${post.id}`" class="read-more">阅读全文 →</RouterLink>
    </div>
  </BaseCard>
</template>

<style scoped>
.summary {
  color: #666;
  font-size: 14px;
  margin: 10px 0;
}
.tags {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
}
.read-more {
  color: #42b883;
  text-decoration: none;
  font-size: 14px;
}
</style>