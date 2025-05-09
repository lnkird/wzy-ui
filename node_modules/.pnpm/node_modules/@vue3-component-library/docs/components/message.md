# Message

A message component for displaying feedback messages.

## Basic Usage

```vue
<template>
  <button @click="showMessage">Show Message</button>
</template>

<script setup>
import { Message } from '@vue3-component-library/components'

const showMessage = () => {
  Message('This is a message')
}
</script>
```

## Types

```vue
<template>
  <div class="demo-buttons">
    <button @click="showSuccess">Success</button>
    <button @click="showWarning">Warning</button>
    <button @click="showError">Error</button>
    <button @click="showInfo">Info</button>
  </div>
</template>

<script setup>
import { Message } from '@vue3-component-library/components'

const showSuccess = () => {
  Message({
    message: 'This is a success message',
    type: 'success'
  })
}

const showWarning = () => {
  Message({
    message: 'This is a warning message',
    type: 'warning'
  })
}

const showError = () => {
  Message({
    message: 'This is an error message',
    type: 'error'
  })
}

const showInfo = () => {
  Message({
    message: 'This is an info message',
    type: 'info'
  })
}
</script>
```

## API

### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | Message content |
| type | 'success' \| 'warning' \| 'error' \| 'info' | 'info' | Message type |
| duration | number | 3000 | Display duration in milliseconds |
| showClose | boolean | false | Whether to show close button |
| top | number | 20 | Distance from top | 