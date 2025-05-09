<template>
  <button
    class="button"
    :class="[
      `button--${type}`,
      `button--${size}`,
      { 'is-disabled': disabled },
      { 'is-loading': loading },
      { 'is-round': round },
      { 'is-plain': plain }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="button__loading">
      <span class="button__loading-spinner"></span>
    </span>
    <span v-if="$slots.icon" class="button__icon">
      <slot name="icon"></slot>
    </span>
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'default' | 'small'
  disabled?: boolean
  loading?: boolean
  round?: boolean
  plain?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 14px;
  color: #606266;
  background-color: #fff;
  transition: all 0.2s;
}

.button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

.button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.button--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.button--warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.button--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
  color: #fff;
}

.button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.button--info:hover {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.button.is-plain {
  background-color: #fff;
}

.button.is-plain:hover {
  color: #fff;
}

.button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
}

.button--primary.is-plain:hover {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.button--success.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
}

.button--success.is-plain:hover {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
}

.button--warning.is-plain:hover {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}

.button--danger.is-plain:hover {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
}

.button--info.is-plain:hover {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.button--large {
  padding: 14px 24px;
  font-size: 16px;
}

.button--small {
  padding: 8px 16px;
  font-size: 12px;
}

.button.is-round {
  border-radius: 20px;
}

.button.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.button.is-loading {
  position: relative;
  pointer-events: none;
}

.button__loading {
  margin-right: 8px;
}

.button__loading-spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: button-loading-spinner 0.8s linear infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.button__icon {
  margin-right: 4px;
}
</style> 