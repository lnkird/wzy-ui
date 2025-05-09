<template>
    <div class="input-wrapper">
        <input class="input" :class="[
            `input--${size}`,
            {
                'is-disabled': disabled,
                'is-round': round
            }
        ]" :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled" @input="handleInput"
            @change="handleChange" @focus="handleFocus" @blur="handleBlur" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
    modelValue: string | number
    type?: string
    size?: 'large' | 'default' | 'small'
    placeholder?: string
    disabled?: boolean
    round?: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'change', value: string): void
    (e: 'focus', event: FocusEvent): void
    (e: 'blur', event: FocusEvent): void
}>()

const inputRef = ref<HTMLInputElement>()

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}

const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('change', target.value)
}

const handleFocus = (event: FocusEvent) => {
    emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
    emit('blur', event)
}

defineExpose({
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur()
})
</script>

<style scoped>
.input-wrapper {
    display: inline-block;
    position: relative;
    width: 100%;
}

.input {
    width: 100%;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: all 0.3s;
    outline: none;
}

.input:hover {
    border-color: #c0c4cc;
}

.input:focus {
    border-color: #409eff;
}

.input--large {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
}

.input--small {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
}

.input.is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}

.input.is-round {
    border-radius: 20px;
}
</style>