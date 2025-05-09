# 组件库使用指南

## 安装

```bash
npm install @vue3-component-library/components
```

## 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Vue3ComponentLibrary from '@vue3-component-library/components'

const app = createApp(App)
app.use(Vue3ComponentLibrary)
app.mount('#app')
```

## 按需引入

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Button, Input, Message, Tree, Dialog, Select } from '@vue3-component-library/components'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.use(Message)
app.use(Tree)
app.use(Dialog)
app.use(Select)
app.mount('#app')
```

## 在组件中使用

```vue
<template>
  <div>
    <!-- Button 组件 -->
    <Button type="primary">Primary Button</Button>
    
    <!-- Input 组件 -->
    <Input v-model="inputValue" placeholder="Please input" />
    
    <!-- Message 组件 -->
    <Button @click="showMessage">Show Message</Button>
    
    <!-- Tree 组件 -->
    <Tree :data="treeData" />
    
    <!-- Dialog 组件 -->
    <Button @click="showDialog">Show Dialog</Button>
    <Dialog v-model="dialogVisible" title="Dialog Title">
      Dialog Content
    </Dialog>
    
    <!-- Select 组件 -->
    <Select v-model="selectedValue" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Message, Tree, Dialog, Select } from '@vue3-component-library/components'

// Input
const inputValue = ref('')

// Message
const showMessage = () => {
  Message.success('This is a success message')
}

// Tree
const treeData = ref([
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  }
])

// Dialog
const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}

// Select
const selectedValue = ref('')
const options = ref([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
])
</script>
```

## 组件列表

- Button - 按钮组件
- Input - 输入框组件
- Message - 消息提示组件
- Tree - 树形控件
- Dialog - 对话框组件
- Select - 选择器组件

每个组件的具体使用方法请参考对应的组件文档。 