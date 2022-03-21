<template>
  <div>{{ age }}</div>
  <el-button @click="click">点击</el-button>
  <Drag />
</template>
<route>
    {
    meta:{
      age:17
      }
    }
  </route>
<script lang='ts' setup>
const age = ref(useRoute().meta.age)
function click() {
  age.value = 15
}
console.log(age)

</script>

<style  scoped></style>
