<script setup>
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '../stores/posts'
import { computed } from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { useDocumentTitle } from '../composables/useDocumentTitle'

const route = useRoute()
const router = useRouter()
const store = usePostsStore()

const post = computed(() => {
  return store.posts.find(p => p.id === Number(route.params.id))
})

// 动态监听文章标题并修改浏览器标签
useDocumentTitle(computed(() => post.value?.title || '文章不存在'))

const goBack = () => router.push('/posts')
</script>

<template>
  <div v-if="post">
    <button @click="goBack" class="back-btn">← 返回列表</button>
    <BaseCard>
      <h1>{{ post.title }}</h1>
      <div class="meta">标签: {{ post.tags.join(', ') }}</div>
      <hr />
      <p class="content">{{ post.content }}</p>
    </BaseCard>
  </div>
  <div v-else>
    <p>文章不存在！</p>
    <button @click="goBack">返回列表</button>
  </div>
</template>

<style scoped>
.back-btn { margin-bottom: 15px; padding: 6px 12px; background: white; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }
.meta { color: #999; font-size: 13px; margin-bottom: 15px; }
.content { line-height: 1.6; }
</style>