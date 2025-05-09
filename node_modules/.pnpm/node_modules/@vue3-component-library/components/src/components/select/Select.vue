<template>
  <div class="select" :class="{ 'is-open': isOpen }">
    <div class="select__trigger" @click="toggleDropdown">
      <div class="select__value">
        <span v-if="selectedOption">{{ selectedOption.label }}</span>
        <span v-else class="select__placeholder">{{ placeholder }}</span>
      </div>
      <span class="select__arrow">▼</span>
    </div>
    <Teleport to="body">
      <Transition name="select-dropdown">
        <div
          v-if="isOpen"
          class="select__dropdown"
          :style="dropdownStyle"
          @click.stop
        >
          <div
            v-for="option in options"
            :key="option.value"
            class="select__option"
            :class="{ 'is-selected': option.value === modelValue }"
            @click="handleSelect(option)"
          >
            {{ option.label }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

interface Option {
  label: string
  value: string | number
}

const props = defineProps<{
  modelValue: string | number
  options: Option[]
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}>()

const isOpen = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const dropdownStyle = ref({
  top: '0px',
  left: '0px',
  width: '0px'
})

const selectedOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(updateDropdownPosition)
  }
}

const updateDropdownPosition = () => {
  if (!triggerRef.value) return

  const rect = triggerRef.value.getBoundingClientRect()
  const scrollTop = document.documentElement.scrollTop
  const scrollLeft = document.documentElement.scrollLeft
  const windowHeight = document.documentElement.clientHeight

  let top = rect.bottom + scrollTop
  const left = rect.left + scrollLeft
  const width = rect.width

  // Check if dropdown would go below viewport
  if (top + 200 > windowHeight + scrollTop) {
    top = rect.top + scrollTop - 200
  }

  dropdownStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`
  }
}

const handleSelect = (option: Option) => {
  emit('update:modelValue', option.value)
  emit('change', option.value)
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (isOpen.value && !(event.target as HTMLElement).closest('.select')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', updateDropdownPosition)
  window.addEventListener('scroll', updateDropdownPosition)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', updateDropdownPosition)
  window.removeEventListener('scroll', updateDropdownPosition)
})
</script>

<style scoped>
.select {
  position: relative;
  display: inline-block;
  width: 100%;
}

.select__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.select__trigger:hover {
  border-color: #c0c4cc;
}

.select.is-open .select__trigger {
  border-color: #409eff;
}

.select__value {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select__placeholder {
  color: #c0c4cc;
}

.select__arrow {
  margin-left: 8px;
  font-size: 12px;
  color: #c0c4cc;
  transition: transform 0.2s;
}

.select.is-open .select__arrow {
  transform: rotate(180deg);
}

.select__dropdown {
  position: absolute;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
}

.select__option {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.select__option:hover {
  background-color: #f5f7fa;
}

.select__option.is-selected {
  color: #409eff;
  background-color: #f5f7fa;
}

.select-dropdown-enter-active,
.select-dropdown-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.select-dropdown-enter-from,
.select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 