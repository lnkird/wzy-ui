# Preview

一个用于预览组件源码的组件，支持代码高亮显示。

## 基本用法

```vue
<template>
  <Preview :code="code">
    <Button type="primary">Primary Button</Button>
  </Preview>
</template>

<script setup>
import { Button, Preview } from '@vue3-component-library/components'

const code = `<template>
  <Button type="primary">Primary Button</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>`
</script>
```

## 复制代码

Preview 组件提供了复制代码的功能，点击"复制代码"按钮即可将代码复制到剪贴板。

```vue
<template>
  <Preview :code="code">
    <Input v-model="inputValue" placeholder="Please input" />
  </Preview>
</template>

<script setup>
import { Input, Preview } from '@vue3-component-library/components'

const inputValue = ref('')

const code = `<template>
  <Input v-model="inputValue" placeholder="Please input" />
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@vue3-component-library/components'

const inputValue = ref('')
</script>`
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | 要显示的代码内容 |

### Slots

| Name | Description |
|------|-------------|
| default | 预览的组件内容 |
``` 