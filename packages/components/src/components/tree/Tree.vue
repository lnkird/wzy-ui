<template>
    <div class="tree">
        <div v-for="node in data" :key="node.label" class="tree-node">
            <div class="tree-node__content" :style="{ paddingLeft: '20px' }">
                <span v-if="node.children && node.children.length" class="tree-node__expand-icon"
                    :class="{ 'is-expanded': node.expanded }" @click="toggleNode(node)">
                    <i class="arrow"></i>
                </span>
                <span class="tree-node__label" @click="handleNodeClick(node)">{{ node.label }}</span>
            </div>
            <div v-if="node.children && node.children.length && node.expanded" class="tree-node__children">
                <Tree :data="node.children" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface TreeNodeData {
    id: string | number
    label: string
    children?: TreeNodeData[]
    disabled?: boolean
    checked?: boolean
    expanded?: boolean
}

defineProps<{
    data: TreeNodeData[]
}>()

const emit = defineEmits<{
    (e: 'node-click', node: TreeNodeData): void
    (e: 'node-check', node: TreeNodeData, checked: boolean): void
}>()

const handleNodeClick = (node: TreeNodeData) => {
    if (!node.disabled) {
        emit('node-click', node)
    }
}

const toggleNode = (node: TreeNodeData) => {
    if (!node.disabled) {
        node.expanded = !node.expanded
    }
}
</script>

<style scoped>
.tree {
    font-size: 14px;
    color: #333;
}

.tree-node {
    position: relative;
}

.tree-node__content {
    display: flex;
    align-items: center;
    height: 32px;
    cursor: pointer;
}

.tree-node__content:hover {
    background-color: #f5f7fa;
}

.tree-node__expand-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 4px;
    cursor: pointer;
}

.tree-node__expand-icon .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left-color: #909399;
    transition: transform 0.3s;
}

.tree-node__expand-icon.is-expanded .arrow {
    transform: rotate(90deg);
}

.tree-node__label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tree-node__children {
    position: relative;
}
</style>