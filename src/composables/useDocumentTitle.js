import { watchEffect } from 'vue'

export function useDocumentTitle(titleRef) {
  watchEffect(() => {
    document.title = titleRef.value ? `${titleRef.value} · 我的博客` : '我的博客'
  })
}