import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  // 模拟文章数据
  const posts = ref([
    { id: 1, title: 'Vue 3 组合式 API 实践笔记', summary: '本文记录了使用 setup 语法的踩坑与心得...', tags: ['Vue', '前端'], likes: 12, content: '这里是文章 1 的详细正文内容。我们在 Vue 3 中大量使用了 ref 和 computed。' },
    { id: 2, title: 'Vue Router 路由守卫详解', summary: '如何利用 beforeEach 处理登录拦截和页面标题...', tags: ['Router'], likes: 8, content: '路由守卫是非常强大的功能。在 router/index.js 中我们可以全局配置它。' },
    { id: 3, title: 'Pinia 状态管理从入门到实战', summary: '对比 Vuex，Pinia 的 setup 写法更加直观...', tags: ['Pinia'], likes: 15, content: '状态管理在大型项目中必不可少，Pinia 的 setup store 写法非常推荐。' }
  ])
  
  // 记录哪些文章被点过赞了
  const likedIds = ref(new Set())

  // 派生状态：计算所有文章的总赞数（展示 computed 知识点）
  const totalLikes = computed(() => posts.value.reduce((sum, p) => sum + p.likes, 0))

  // 点赞动作
  function toggleLike(id) {
    const post = posts.value.find(p => p.id === id)
    if (!post) return
    if (likedIds.value.has(id)) {
      likedIds.value.delete(id)
      post.likes--
    } else {
      likedIds.value.add(id)
      post.likes++
    }
  }

  return { posts, likedIds, totalLikes, toggleLike }
})