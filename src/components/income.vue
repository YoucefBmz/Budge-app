<template>
   <div class="inc-block">
      <h2>INCOME</h2>
      <div class="item" v-for="(inc,index) in incArr" :key="index">
          <p class="item-name"> {{ inc.title }} </p>
          <p class="item-value"> {{ formatValue(inc.value) }} </p>
          <i class="fas fa-minus-circle" @click="removeElements(index)"></i>
      </div>
       <!--
       <div class="item">
          <p class="item-name">item one</p>
          <p class="item-value">11,500.00</p>
          <i class="fas fa-minus-circle"></i>
      </div>
      -->
       
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinsPrice from '../mixins/formatValue'
export default {
    name:'income',
    computed: {
        ...mapState(['incArr']),
    },
    methods: {
        ...mapActions(['removeIncElement']),
        removeElements(index) {
            this.removeIncElement(index)
        }
    },
    mixins:[mixinsPrice]

}
</script>

<style>
.inc-block{
    background-color: #55835F;
    font-family: 'Poppins';
    text-align: center;
    width: 500px;
    height: 300px;
    border-radius: 20px;
    overflow-y: auto;
}
.inc-block h2{
    color: #fff;
}
.item{
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 30px;
    display: flex;
    align-items:center;
    padding: 10px 0;
    font-size: 18px;
    text-transform: capitalize;
    letter-spacing: 0.3px;
    justify-content: space-around;
    transition: 0.5s all;
    margin: 5px auto;
    overflow-x: hidden;
    width: 450px;
}
.item-value{
    transform: translateX(40px);
}
.item i{
    transform: translateX(100px);
    transition: 0.5s all;
    opacity: 0;
    color: #55835F;
    cursor: pointer;
    font-size: 20px;
}
.item:hover i{
    transform: translateX(10px);
    opacity: 1;
}
</style>