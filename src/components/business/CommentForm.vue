<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const inputRef = ref(null) // 模板引用
const content = ref('')

const submit = () => {
  if (!content.value.trim()) return
  emit('submit', content.value)
  content.value = ''
  // 提交后让输入框重新聚焦
  inputRef.value?.focus()
}
</script>

<template>
  <div class="form">
    <input 
      ref="inputRef" 
      v-model="content" 
      type="text" 
      placeholder="留下你的足迹..." 
      @keyup.enter="submit"
    />
    <button @click="submit">发送</button>
  </div>
</template>

<style scoped>
.form { display: flex; gap: 10px; margin-bottom: 20px; }
.form input { flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
.form button { padding: 8px 16px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer; }
</style>