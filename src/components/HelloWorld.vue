<template>
  <div class="card">
      <div class="total-inc-card">
          <h3 class="inc-txt">total income :</h3>
          <h3 class="total-inc"> {{ formatValue(calcIncSum) }} </h3>
        <div class="total-percentage" style="opacity:0;">40%</div>
      </div>
      <div class="total-exp-card">
        <h3 class="exp-txt">total expense :</h3>
        <h3 class="total-exp"> {{ formatValue(calcExpSum) }} </h3>
        <div class="total-percentage"> {{ totalPercentage }} </div>
      </div>
      <div class="balence-card">
        <h3 class="bal-txt">the balence :</h3>
        <h3 class="bal-value"> {{ formatValue(calcBalence) }} </h3>
        <div class="total-percentage" style="opacity:0;">  </div>
      </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import mixinsPrice from '../mixins/formatValue'
export default {
  name: 'HelloWorld',
  methods:{
    // ...mapMutations(['formatValue']),
    
  },
  computed: {
    calcIncSum(){
      return this.$store.getters.calcIncSum
    },
    
    ...mapGetters(['calcExpSum']),
    calcBalence() {
      return this.calcIncSum - this.calcExpSum
    },
    totalPercentage() {
      if( this.calcIncSum == 0 || this.calcIncSum < this.calcExpSum){
        perce = '--';
      }else{
        var perce = ( this.calcExpSum / this.calcIncSum ) * 100;
        perce = parseInt(perce) + '%';
      }
      return perce ;
    },
  },
  mixins:[mixinsPrice]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
.card{
  background-color: #4D4D4D;
  max-width: 750px;
  padding: 20px 0;
  margin: 10px auto;
  border-radius: 25px;
}
.bal-txt,
.exp-txt,
.inc-txt{
  color: #fff;
  font-family: 'Poppins';
  font-weight: normal;
  text-transform: capitalize;
}
.total-inc,
.total-exp,
.bal-value,
.total-percentage{
  font-family: 'Poppins';
  font-weight: normal;
  letter-spacing: 2px;
}
.total-percentage{
  background: #fff;
  border-radius: 3px;
  font-size: 15px;
  padding: 3px;
  font-weight: 500;
}
.total-inc{
  color: #55835F;
}
.bal-value{
  color: #fff;
}
.total-exp{
  color: #BF3131;
}
.total-inc-card
,.total-exp-card
,.balence-card{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
}
</style>
