<template>
  <C1 />
  <el-button />
  <div
    v-motion
    :initial="{
      scale: 1,
      opacity: 1,
      y: 100,
      x: 800,
    }"
    :hovered="{ scale: 1.2 }"
    class="w100 h100 bg-red-500"
  />
</template>
<script lang='ts' setup>

</script>

<style  scoped></style>
