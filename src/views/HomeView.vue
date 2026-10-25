<script setup>
import { useRouter } from 'vue-router'
import { usePostsStore } from '../stores/posts'
import { storeToRefs } from 'pinia'

const router = useRouter()
const store = usePostsStore()
// 获取总赞数
const { posts, totalLikes } = storeToRefs(store)

const goToList = () => {
  router.push('/posts')
}
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>欢迎来到我的 Vue 博客</h1>
      <p>在这里记录前端学习的心得与踩坑经验</p>
      <button class="cta-btn" @click="goToList">开始阅读文章 →</button>
    </div>

    <div class="stats">
      <div class="stat-card">
        <h3>{{ posts.length }}</h3>
        <p>原创文章</p>
      </div>
      <div class="stat-card">
        <h3>{{ totalLikes }}</h3>
        <p>累计收到赞</p>
      </div>
      <div class="stat-card">
        <h3>∞</h3>
        <p>学习热情</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%);
  border-radius: 12px;
  margin-bottom: 30px;
}
.hero h1 {
  font-size: 36px;
  color: #00695c;
  margin-bottom: 10px;
}
.hero p {
  color: #555;
  font-size: 18px;
  margin-bottom: 20px;
}
.cta-btn {
  padding: 10px 24px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}
.cta-btn:hover {
  background: #369d6f;
}
.stats {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
.stat-card {
  flex: 1;
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.stat-card h3 {
  font-size: 28px;
  color: #42b883;
  margin: 0 0 10px 0;
}
.stat-card p {
  color: #666;
  margin: 0;
}
</style>