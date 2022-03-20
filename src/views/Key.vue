<template>
  <div class="flex">
    <div class="box" :class="q ? 'active' : ''">q</div>
    <div class="box" :class="w ? 'active' : ''">w</div>
    <div class="box" :class="e ? 'active' : ''">e</div>
    <div class="box" :class="a ? 'active' : ''">a</div>
    <div class="box" :class="s ? 'active' : ''">s</div>
    <div class="box" :class="d ? 'active' : ''">d</div>
  </div>
</template>
<script lang='ts' setup>
import { useMagicKeys } from '@vueuse/core'
const keys = ['w', 'a', 's', 'd', 'q', 'e']
const { shift, space, w, a, s, d, q, e, current } = useMagicKeys()
const arr = computed(() => [...current])
watch(space, (v) => {
  if (v)
    console.log('space has been pressed')
})

watchEffect(() => {
  if (shift.value && a.value)
    console.log('Shift + A have been pressed')
})
</script>

<style  scoped>
.box {
  width: 100px;
  height: 100px;
  line-height: 100px;
  margin: 10px 20px;
  background-color: #ccc;
  text-align: center;
  overflow: hidden;
}
.active {
  background-color: red;
}
</style>
