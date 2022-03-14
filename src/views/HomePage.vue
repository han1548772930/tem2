<template>
  <div>{{ x }}</div>
  <div>{{ y }}</div>
  <div>{{ isDark }}</div>
  <div>{{ store }}</div>
</template>
<script setup lang="ts">

import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

const { x, y } = useMouse()
const c1 = $ref()

const isDark = usePreferredDark()

const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red',
})
</script>

<style scoped></style>
