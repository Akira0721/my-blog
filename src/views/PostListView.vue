<script setup>
import { ref, computed } from 'vue'
import PostList from '../components/business/PostList.vue'
import BaseTag from '../components/ui/BaseTag.vue'
import { usePostsStore } from '../stores/posts'
import { storeToRefs } from 'pinia'

const store = usePostsStore()
const { posts, totalLikes } = storeToRefs(store)

// 当前选中的标签，默认为空表示显示全部
const activeTag = ref('')

// 获取所有不重复的标签（使用 Set 去重）
const allTags = computed(() => {
  const tags = posts.value.flatMap(post => post.tags)
  return [...new Set(tags)]
})

// 根据选中标签过滤文章
const filteredPosts = computed(() => {
  if (!activeTag.value) return posts.value
  return posts.value.filter(post => post.tags.includes(activeTag.value))
})

const selectTag = (tag) => {
  // 如果点击的是已选中的标签，则取消筛选
  activeTag.value = activeTag.value === tag ? '' : tag
}
</script>

<template>
  <div>
    <div class="header">
      <h2>文章列表</h2>
      <p>共收到 {{ totalLikes }} 个赞</p>
    </div>

    <!-- 标签筛选区 -->
    <div class="filter-bar">
      <span class="filter-label">分类：</span>
      <span 
        class="tag-btn" 
        :class="{ active: activeTag === '' }" 
        @click="selectTag('')"
      >全部</span>
      <span 
        v-for="tag in allTags" 
        :key="tag"
        class="tag-btn"
        :class="{ active: activeTag === tag }"
        @click="selectTag(tag)"
      >{{ tag }}</span>
    </div>

    <!-- 渲染过滤后的文章 -->
    <PostList :posts="filteredPosts" />
    
    <div v-if="filteredPosts.length === 0" style="text-align:center; color:#999; padding: 40px 0;">
      该分类下暂无文章。
    </div>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.header h2 { margin: 0; }
.header p { color: #999; font-size: 14px; }
.filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.filter-label { color: #666; font-size: 14px; }
.tag-btn {
  padding: 4px 12px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #ddd;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}
.tag-btn:hover { border-color: #42b883; color: #42b883; }
.tag-btn.active {
  background: #42b883;
  border-color: #42b883;
  color: #fff;
}
</style>