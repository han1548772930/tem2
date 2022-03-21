import { isClient } from '@vueuse/core';
<template>
  <div
    ref="el"
    :style="style"
    shadow="~ hover:lg"
    border="~ gray-400 rounded"
    style="touch-action:none"
    class="fixed bg-$vt-c-bg select-none cursor-move z-10"
  >Drag me! I am at {{ x.toFixed(2) }}, {{ y.toFixed(2) }}</div>
  <UseDraggable
    v-slot="{ x, y }"
    p="x-4 y-2"
    border="~ gray-400 rounded"
    shadow="~ hover:lg"
    class="fixed bg-$vt-c-bg select-none cursor-move z-10"
    :initial-value="{ x: innerWidth / 3.9, y: 150 }"
    :prevent-default="true"
    storage-key="vueuse-draggable-pos"
    storage-type="session"
  >
    Renderless component
    <div class="text-xs opacity-50">Position persisted in sessionStorage</div>
    <div class="text-sm opacity-50">{{ Math.round(x) }}, {{ Math.round(y) }}</div>
  </UseDraggable>
</template>
<script lang='ts' setup>
const el = ref<HTMLElement | null>(null)
const innerWidth = isClient ? window.innerWidth : 200
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<style  scoped></style>
