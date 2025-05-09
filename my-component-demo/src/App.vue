npm install ../packages/components

<template>
  <div class="container">
    <h1>Vue3 Component Library Demo</h1>

    <section>
      <h2>Button 组件</h2>
      <Preview :code="buttonCode">
        <Button type="primary">Primary Button</Button>
        <Button type="success">Success Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="danger">Danger Button</Button>
      </Preview>
    </section>

    <section>
      <h2>Input 组件</h2>
      <Preview :code="inputCode">
        <Input v-model="inputValue" placeholder="Please input" />
        <div>输入值: {{ inputValue }}</div>
      </Preview>
    </section>

    <section>
      <h2>Message 组件</h2>
      <Preview :code="messageCode">
        <Button @click="showMessage">Show Message</Button>
      </Preview>
    </section>

    <section>
      <h2>Tree 组件</h2>
      <Preview :code="treeCode">
        <Tree :data="treeData" />
      </Preview>
    </section>

    <section>
      <h2>Dialog 组件</h2>
      <Preview :code="dialogCode">
        <Button @click="showDialog">Show Dialog</Button>
        <Dialog v-model="dialogVisible" title="Dialog Title" :closeOnClickOverlay="true" @close="handleClose"
          @confirm="handleConfirm">
          <p>This is dialog content</p>
          <template #footer>
            <Button @click="dialogVisible = false">取消</Button>
            <Button type="primary" @click="handleConfirm">确定</Button>
          </template>
        </Dialog>
      </Preview>
    </section>

    <section>
      <h2>Select 组件</h2>
      <Preview :code="selectCode">
        <Select v-model="selectedValue" :options="options" />
        <div>选中值: {{ selectedValue }}</div>
      </Preview>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Message, Tree, Dialog, Select, Preview } from '@vue3-component-library/components'
import { buttonCode, inputCode, messageCode, treeCode, dialogCode, selectCode } from './code-examples'

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

const handleClose = () => {
  console.log('Dialog closed')
}

const handleConfirm = () => {
  console.log('Dialog confirmed')
}

// Select
const selectedValue = ref('')
const options = ref([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
])
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
}

button {
  margin-right: 10px;
}
</style>