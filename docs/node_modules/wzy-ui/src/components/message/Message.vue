<template>
  <Transition name="message-fade">
    <div
      v-if="visible"
      class="message"
      :class="[type ? `message--${type}` : '']"
      :style="{ top: `${top}px` }"
    >
      <div class="message__content">
        <span class="message__text">{{ message }}</span>
        <button v-if="showClose" class="message__close" @click="close">×</button>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: {
    type: Boolean,
    default: false
  },
  top: {
    type: Number,
    default: 20
  }
})

const visible = ref(false)
let timer: number | null = null

const close = () => {
  visible.value = false
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

onMounted(() => {
  visible.value = true
  if (props.duration > 0) {
    timer = window.setTimeout(() => {
      close()
    }, props.duration)
  }
})

defineExpose({
  close
})
</script>

<style scoped>
.message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  padding: 10px 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
}

.message--success {
  background-color: #f0f9eb;
  color: #67c23a;
}

.message--warning {
  background-color: #fdf6ec;
  color: #e6a23c;
}

.message--error {
  background-color: #fef0f0;
  color: #f56c6c;
}

.message--info {
  background-color: #f4f4f5;
  color: #909399;
}

.message__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.message__text {
  margin-right: 10px;
}

.message__close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
}

.message__close:hover {
  opacity: 1;
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style> 