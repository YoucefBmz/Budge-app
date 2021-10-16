<template>
  <div id="app">
   <HelloWorld></HelloWorld>
    <Input-fields/>
    <div class="block">
      <inc-block />
      <expBlock />    
    </div> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputFields from './components/input.vue' 
import IncBlock from './components/income.vue'
import expBlock from './components/expense.vue' 
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputFields,
    IncBlock,
    expBlock
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
   overflow-x: hidden;
   background: #000555;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
.block{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 360px;
}
</style>
