<template>
    <Teleport to="body">
        <Transition name="dialog-fade">
            <div v-if="modelValue" class="dialog-overlay" @click="handleOverlayClick">
                <div class="dialog" :style="dialogStyle" @click.stop>
                    <div class="dialog__header">
                        <h3 class="dialog__title">{{ title }}</h3>
                        <button v-if="showClose" class="dialog__close" @click="handleClose">×</button>
                    </div>
                    <div class="dialog__body">
                        <slot></slot>
                    </div>
                    <div v-if="$slots.footer" class="dialog__footer">
                        <slot name="footer">
                            <Button @click="handleClose">取消</Button>
                            <Button type="primary" @click="handleConfirm">确定</Button>
                        </slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Button } from '../button'

const props = defineProps<{
    modelValue: boolean
    title?: string
    width?: string | number
    showClose?: boolean
    closeOnClickOverlay?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'close'): void
    (e: 'confirm'): void
}>()

const dialogStyle = computed(() => {
    if (props.width) {
        return {
            width: typeof props.width === 'number' ? `${props.width}px` : props.width
        }
    }
    return {}
})

const handleClose = () => {
    emit('update:modelValue', false)
    emit('close')
}

const handleConfirm = () => {
    emit('confirm')
    handleClose()
}

const handleOverlayClick = () => {
    if (props.closeOnClickOverlay) {
        handleClose()
    }
}
</script>

<style scoped>
.dialog-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.dialog {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 50%;
    max-width: 500px;
}

.dialog__header {
    padding: 20px;
    border-bottom: 1px solid #e4e7ed;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dialog__title {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #303133;
}

.dialog__close {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #909399;
}

.dialog__close:hover {
    color: #409eff;
}

.dialog__body {
    padding: 20px;
    color: #606266;
    font-size: 14px;
    line-height: 1.5;
}

.dialog__footer {
    padding: 20px;
    border-top: 1px solid #e4e7ed;
    text-align: right;
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
    transition: opacity 0.3s;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
    opacity: 0;
}
</style>