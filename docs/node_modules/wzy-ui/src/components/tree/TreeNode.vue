<template>
  <div class="tree-node" :style="{ paddingLeft: `${level * 20}px` }">
    <div class="tree-node__content" :class="{ 'is-disabled': node.disabled }">
      <span
        class="tree-node__expand-icon"
        :class="{ 'is-expanded': node.expanded }"
        @click="handleExpand"
      >
        <span v-if="hasChildren">▶</span>
      </span>
      <label class="tree-node__checkbox" v-if="showCheckbox">
        <input
          type="checkbox"
          :checked="node.checked"
          :disabled="node.disabled"
          @change="handleCheck"
        />
      </label>
      <span class="tree-node__label" @click="handleClick">{{ node.label }}</span>
    </div>
    <div v-if="hasChildren && node.expanded" class="tree-node__children">
      <tree-node
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :level="level + 1"
        :show-checkbox="showCheckbox"
        @node-click="$emit('node-click', $event)"
        @node-check="$emit('node-check', $event, $event.checked)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  node: {
    id: string | number
    label: string
    children?: any[]
    disabled?: boolean
    checked?: boolean
    expanded?: boolean
  }
  level: number
  showCheckbox?: boolean
}>()

const emit = defineEmits<{
  (e: 'node-click', node: any): void
  (e: 'node-check', node: any, checked: boolean): void
}>()

const hasChildren = computed(() => {
  return props.node.children && props.node.children.length > 0
})

const handleExpand = () => {
  if (hasChildren.value) {
    props.node.expanded = !props.node.expanded
  }
}

const handleClick = () => {
  if (!props.node.disabled) {
    emit('node-click', props.node)
  }
}

const handleCheck = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('node-check', props.node, target.checked)
}
</script>

<style scoped>
.tree-node {
  font-size: 14px;
  line-height: 1.5;
}

.tree-node__content {
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
}

.tree-node__content.is-disabled {
  cursor: not-allowed;
  color: #c0c4cc;
}

.tree-node__expand-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  transition: transform 0.3s;
}

.tree-node__expand-icon.is-expanded {
  transform: rotate(90deg);
}

.tree-node__checkbox {
  margin-right: 4px;
}

.tree-node__label {
  flex: 1;
}

.tree-node__children {
  margin-left: 16px;
}
</style> 