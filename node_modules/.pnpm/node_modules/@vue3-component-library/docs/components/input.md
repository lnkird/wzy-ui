# Input

A basic input component for text input.

## Basic Usage

```vue
<template>
  <Input v-model="input" placeholder="Please input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const input = ref('')
</script>
```

## Different Types

```vue
<template>
  <Input v-model="text" placeholder="Text input" />
  <Input v-model="password" type="password" placeholder="Password input" />
  <Input v-model="number" type="number" placeholder="Number input" />
  <Input v-model="email" type="email" placeholder="Email input" />
  <Input v-model="tel" type="tel" placeholder="Telephone input" />
  <Input v-model="url" type="url" placeholder="URL input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const text = ref('')
const password = ref('')
const number = ref('')
const email = ref('')
const tel = ref('')
const url = ref('')
</script>
```

## Different Sizes

```vue
<template>
  <Input v-model="large" size="large" placeholder="Large input" />
  <Input v-model="default" placeholder="Default input" />
  <Input v-model="small" size="small" placeholder="Small input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const large = ref('')
const default = ref('')
const small = ref('')
</script>
```

## Disabled State

```vue
<template>
  <Input v-model="input" disabled placeholder="Disabled input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const input = ref('')
</script>
```

## Readonly State

```vue
<template>
  <Input v-model="input" readonly placeholder="Readonly input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const input = ref('Readonly content')
</script>
```

## Error State

```vue
<template>
  <Input v-model="input" error="This is an error message" placeholder="Error input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const input = ref('')
</script>
```

## Events

```vue
<template>
  <Input
    v-model="input"
    placeholder="Input with events"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const input = ref('')

const handleChange = (value) => {
  console.log('Input changed:', value)
}

const handleFocus = (event) => {
  console.log('Input focused:', event)
}

const handleBlur = (event) => {
  console.log('Input blurred:', event)
}
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | string \| number | - | Binding value |
| type | 'text' \| 'password' \| 'number' \| 'email' \| 'tel' \| 'url' | 'text' | Type of input |
| size | 'large' \| 'default' \| 'small' | 'default' | Size of input |
| placeholder | string | - | Placeholder of input |
| disabled | boolean | false | Whether input is disabled |
| readonly | boolean | false | Whether input is readonly |
| error | string | - | Error message |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| update:modelValue | (value: string \| number) | Triggered when input value changes |
| change | (value: string \| number) | Triggered when input value changes and input loses focus |
| focus | (event: FocusEvent) | Triggered when input gets focus |
| blur | (event: FocusEvent) | Triggered when input loses focus |

### Methods

| Name | Description |
|------|-------------|
| focus | Focus the input element |
| blur | Blur the input element |