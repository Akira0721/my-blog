<script setup>
defineProps({ show: Boolean })
defineEmits(['close'])
</script>

<template>
  <!-- Teleport 将弹窗传送到 body 标签下，避免被父级样式限制 -->
  <Teleport to="body">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <header class="modal-header">
          <slot name="header">默认标题</slot>
        </header>
        <div class="modal-body">
          <slot>默认内容</slot>
        </div>
        <footer class="modal-footer">
          <button @click="$emit('close')">关闭</button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 999; }
.modal-content { background: white; padding: 20px; border-radius: 8px; width: 300px; }
.modal-header { font-weight: bold; margin-bottom: 10px; }
.modal-footer { text-align: right; margin-top: 15px; }
</style>