<template>
   <div class="exp-block">
      <h2>EXPENSE</h2>
      <div class="item" v-for="(exp,index) in expArr" :key="index">
          <p class="item-name"> {{ exp.title }} </p>
          <p class="item-percentage"> {{ perceItem(exp.value) }} </p>
          <p class="item-value"> {{ formatValue(exp.value) }} </p>
          <i class="fas fa-minus-circle" @click="removeElements(index)"></i>
      </div> 
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixinsPrice from '../mixins/formatValue'
// import { mapState } from 'vuex'
export default {
    name: 'expense',
    computed: {
        expArr() {
            return this.$store.state.expArr
        },
        ...mapGetters(['calcIncSum']),
        

    },
    methods: {
        ...mapActions(['removeExpElement']),
        removeElements(index) {
            this.removeExpElement(index);
        },
        perceItem(value) {
            if(this.calcIncSum == 0){
                perceItem = '--'
            }else if(this.calcIncSum < value){
                perceItem = '+/+'
            }else{
                var perceItem = (value / this.calcIncSum) * 100 
                perceItem = parseInt(perceItem) + '%';
                    
            }
            return perceItem;   
        },
    },
    mixins:[mixinsPrice]
}
</script>

<style scoped>
.exp-block{
    background-color: #BF3131;
    font-family: 'Poppins';
    text-align: center;
    width: 500px;
    height: 300px;
    border-radius: 20px;
    overflow-y: auto;
}
.exp-block h2{
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
.item-percentage{
    font-size: 15px;
    border-radius: 3px;
    text-align: center;
    padding: 5px;
    font-weight: 500;
    color: #FFF;
    background: #BF3131;
}
.item i{
    transform: translateX(100px);
    transition: 0.5s all;
    opacity: 0;
    color: #BF3131;
    cursor: pointer;
    font-size: 20px;
}
.item:hover i{
    transform: translateX(10px);
    opacity: 1;
}
</style>