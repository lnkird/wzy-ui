# Dialog

A dialog component for displaying modal content.

## Basic Usage

```vue
<template>
  <Button @click="showDialog">Show Dialog</Button>
  <Dialog v-model="dialogVisible" title="Dialog Title">
    <p>This is dialog content</p>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Dialog } from '@vue3-component-library/components'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>
```

## Custom Footer

```vue
<template>
  <Button @click="showDialog">Show Dialog</Button>
  <Dialog v-model="dialogVisible" title="Dialog Title">
    <p>This is dialog content</p>
    <template #footer>
      <Button @click="dialogVisible = false">Cancel</Button>
      <Button type="primary" @click="handleConfirm">Confirm</Button>
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

const handleConfirm = () => {
  console.log('Confirmed')
  dialogVisible.value = false
}
</script>
```

## Close on Click Overlay

```vue
<template>
  <Button @click="showDialog">Show Dialog</Button>
  <Dialog v-model="dialogVisible" title="Dialog Title" :closeOnClickOverlay="true">
    <p>This dialog will close when clicking the overlay</p>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Button, Dialog } from '@vue3-component-library/components'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>
```

## Events

```vue
<template>
  <Button @click="showDialog">Show Dialog</Button>
  <Dialog
    v-model="dialogVisible"
    title="Dialog Title"
    @close="handleClose"
    @confirm="handleConfirm"
  >
    <p>This is dialog content</p>
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
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | boolean | - | Whether the dialog is visible |
| title | string | - | Title of the dialog |
| closeOnClickOverlay | boolean | false | Whether to close the dialog when clicking the overlay |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| update:modelValue | (value: boolean) | Triggered when dialog visibility changes |
| close | - | Triggered when dialog is closed |
| confirm | - | Triggered when confirm button is clicked |

### Slots

| Name | Description |
|------|-------------|
| default | Content of the dialog |
| footer | Footer of the dialog | 