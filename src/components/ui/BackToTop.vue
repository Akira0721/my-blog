<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

// 滚动事件处理函数
const handleScroll = () => {
  // 当滚动高度大于 300px 时显示按钮
  isVisible.value = window.scrollY > 300
}

// 页面挂载时添加监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 页面卸载时移除监听（防止内存泄漏）
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 回到顶部方法
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动
  })
}
</script>

<template>
  <Transition name="fade">
    <button v-if="isVisible" class="back-to-top" @click="scrollToTop">
      ↑
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 100;
}

/* Vue Transition 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>