# Button

A button component for triggering actions.

## Basic Usage

```vue
<template>
  <Button>Default Button</Button>
  <Button type="primary">Primary Button</Button>
  <Button type="success">Success Button</Button>
  <Button type="warning">Warning Button</Button>
  <Button type="danger">Danger Button</Button>
  <Button type="info">Info Button</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## Different Sizes

```vue
<template>
  <Button size="large">Large Button</Button>
  <Button>Default Button</Button>
  <Button size="small">Small Button</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## Plain Buttons

```vue
<template>
  <Button plain>Plain Button</Button>
  <Button type="primary" plain>Primary Plain</Button>
  <Button type="success" plain>Success Plain</Button>
  <Button type="warning" plain>Warning Plain</Button>
  <Button type="danger" plain>Danger Plain</Button>
  <Button type="info" plain>Info Plain</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## Round Buttons

```vue
<template>
  <Button round>Round Button</Button>
  <Button type="primary" round>Primary Round</Button>
  <Button type="success" round>Success Round</Button>
  <Button type="warning" round>Warning Round</Button>
  <Button type="danger" round>Danger Round</Button>
  <Button type="info" round>Info Round</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## Disabled State

```vue
<template>
  <Button disabled>Disabled Button</Button>
  <Button type="primary" disabled>Disabled Primary</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## Loading State

```vue
<template>
  <Button loading>Loading</Button>
  <Button type="primary" loading>Loading</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## With Icon

```vue
<template>
  <Button>
    <template #icon>
      <span>🔍</span>
    </template>
    Search
  </Button>
  <Button type="primary">
    <template #icon>
      <span>➕</span>
    </template>
    Add
  </Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

## API

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | - | Button type |
| size | 'large' \| 'default' \| 'small' | 'default' | Button size |
| disabled | boolean | false | Whether button is disabled |
| loading | boolean | false | Whether button is loading |
| round | boolean | false | Whether button is round |
| plain | boolean | false | Whether button is plain |

### Events

| Name | Parameters | Description |
|------|------------|-------------|
| click | (event: MouseEvent) | Triggered when button is clicked |

### Slots

| Name | Description |
|------|-------------|
| default | Button content |
| icon | Button icon | 