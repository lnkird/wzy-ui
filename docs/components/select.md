# Select

A select component for selecting values from a dropdown list.

## Basic Usage

```vue
<template>
  <Select
    v-model="value"
    :options="options"
    placeholder="Please select"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '@vue3-component-library/components'

const value = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>
```

## With Change Event

```vue
<template>
  <Select
    v-model="value"
    :options="options"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Select } from '@vue3-component-library/components'

const value = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]

const handleChange = (value) => {
  console.log('Selected value:', value)
}
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string \| number | - | Selected value |
| options | array | - | Options array |
| placeholder | string | 'Please select' | Placeholder text |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| update:modelValue | (value: string \| number) | Triggered when selected value changes |
| change | (value: string \| number) | Triggered when selection changes |

### Option Data Structure

```ts
interface Option {
  label: string
  value: string | number
}
``` 