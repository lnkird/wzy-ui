export const buttonCode = String.raw`<template>
  <Button type="primary">Primary Button</Button>
  <Button type="success">Success Button</Button>
  <Button type="warning">Warning Button</Button>
  <Button type="danger">Danger Button</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>`

export const inputCode = String.raw`<template>
  <Input v-model="inputValue" placeholder="Please input" />
  <div>输入值: {{ inputValue }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const inputValue = ref('')
</script>`

export const messageCode = String.raw`<template>
  <Button @click="showMessage">Show Message</Button>
</template>

<script setup>
import { Button, Message } from '@vue3-component-library/components'

const showMessage = () => {
  Message.success('This is a success message')
}
</script>`

export const treeCode = String.raw`<template>
  <Tree :data="treeData" />
</template>

<script setup>
import { ref } from 'vue'
import { Tree } from '@vue3-component-library/components'

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
</script>`

export const dialogCode = String.raw`<template>
  <Button @click="showDialog">Show Dialog</Button>
  <Dialog 
    v-model="dialogVisible" 
    title="Dialog Title" 
    :closeOnClickOverlay="true"
    @close="handleClose" 
    @confirm="handleConfirm"
  >
    <p>This is dialog content</p>
    <template #footer>
      <Button @click="dialogVisible = false">取消</Button>
      <Button type="primary" @click="handleConfirm">确定</Button>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Dialog } from '@vue3-component-library/components'

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
</script>`

export const selectCode = String.raw`<template>
  <Select v-model="selectedValue" :options="options" />
  <div>选中值: {{ selectedValue }}</div>
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '@vue3-component-library/components'

const selectedValue = ref('')
const options = ref([
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
])
</script>` 