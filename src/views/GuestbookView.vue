<script setup>
import { ref } from 'vue'
import CommentForm from '../components/business/CommentForm.vue'
import GuestbookList from '../components/business/GuestbookList.vue'
import BaseModal from '../components/ui/BaseModal.vue'
import { useDocumentTitle } from '../composables/useDocumentTitle'

// 使用组合式函数修改标题
useDocumentTitle(ref('留言板'))

// 留言数据
const comments = ref([
  { id: 1, text: '这个博客做得真不错！', createdAt: Date.now() - 100000 }
])

const showModal = ref(false)

const handleSubmit = (text) => {
  comments.value.unshift({
    id: Date.now(),
    text,
    createdAt: Date.now()
  })
  showModal.value = true // 提交后显示弹窗
}
</script>

<template>
  <div>
    <h2>留言板</h2>
    <CommentForm @submit="handleSubmit" />
    <GuestbookList :comments="comments" />
    
    <!-- 测试 Teleport 和插槽 -->
    <BaseModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3 style="color: #42b883;">提示</h3>
      </template>
      <p>留言发送成功！</p>
    </BaseModal>
  </div>
</template>