# Components

Our component library provides a set of high-quality Vue 3 components that you can use to build your applications.

## Basic Components

- [Button](/components/button) - Button component with various types and sizes
- [Input](/components/input) - Input component with validation and formatting

## Feedback Components

- [Message](/components/message) - Message component for displaying feedback
- [Dialog](/components/dialog) - Dialog component for modal content

## Data Display Components

- [Tree](/components/tree) - Tree component for hierarchical data
- [Select](/components/select) - Select component with search and multiple selection

## Other Components

- [Preview](/components/preview) - Preview component for code display

## Usage

All components can be imported individually:

```vue
<template>
  <Button type="primary">Click me</Button>
</template>

<script setup>
import { Button } from '@vue3-component-library/components'
</script>
```

Or you can import the entire library:

```vue
<template>
  <Button type="primary">Click me</Button>
  <Input v-model="value" placeholder="Enter text" />
</template>

<script setup>
import Vue3ComponentLibrary from '@vue3-component-library/components'
</script>
```

## TypeScript Support

All components are written in TypeScript and provide full type definitions. You can get full type checking and IDE support when using our components. 