<template>
  <button ref="myHoverableElement">{{ isHovered }}</button>
</template>

<script lang="ts" setup>

import { useElementHover } from '@vueuse/core'

// eslint-disable-next-line no-undef
const myHoverableElement = ref()
const isHovered = useElementHover(myHoverableElement)
</script>
