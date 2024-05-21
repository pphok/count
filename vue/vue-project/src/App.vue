<script setup>
import { ref } from 'vue'
const count=ref(0);

</script>
<template>
  <main>
    <div>
    <h4>Counter</h4>
    <h1 >{{ count }}</h1>
     <button @clikc="count--">-</button>
     <button @click="count++">+</button>
  </div>
  </main>
</template>
<style scope>

main{
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>