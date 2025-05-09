# Tree

A tree component for displaying hierarchical data.

## Basic Usage

```vue
<template>
  <Tree :data="data" @node-click="handleNodeClick" />
</template>

<script setup>
import { Tree } from '@vue3-component-library/components'

const data = [
  {
    id: 1,
    label: 'Level 1',
    children: [
      {
        id: 2,
        label: 'Level 2',
        children: [
          {
            id: 3,
            label: 'Level 3'
          }
        ]
      }
    ]
  }
]

const handleNodeClick = (node) => {
  console.log('Clicked node:', node)
}
</script>
```

## With Checkbox

```vue
<template>
  <Tree
    :data="data"
    show-checkbox
    @node-check="handleNodeCheck"
  />
</template>

<script setup>
import { Tree } from '@vue3-component-library/components'

const data = [
  {
    id: 1,
    label: 'Parent',
    children: [
      {
        id: 2,
        label: 'Child 1'
      },
      {
        id: 3,
        label: 'Child 2'
      }
    ]
  }
]

const handleNodeCheck = (node, checked) => {
  console.log('Node checked:', node, checked)
}
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data | array | - | Tree data |
| showCheckbox | boolean | false | Whether to show checkbox |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| node-click | (node: object) | Triggered when a node is clicked |
| node-check | (node: object, checked: boolean) | Triggered when a node's checkbox is checked/unchecked |

### Node Data Structure

```ts
interface TreeNode {
  id: string | number
  label: string
  children?: TreeNode[]
  disabled?: boolean
  checked?: boolean
  expanded?: boolean
}
``` 