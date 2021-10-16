<template>
  <div class="input-card">
      <select name="" id="select" v-model="type">
      <option value="inc" type="inc" selected>inc</option>
      <option value="exp" type="exp">exp</option>
      </select>
      <input class="item-field" type="text"  placeholder="add an item" v-model="title" v-on:keyup.enter = "addItem">
      <input class="value-field" type="text" placeholder="add a value" v-model="value" v-on:keyup.enter = "addItem">
      <button class="submit-btn" @click="addItem">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: 'input',
data() {
    return {
        title: '',
        value: '',
        type: '',
    }
},
methods: {
    ...mapActions(['addNewItem']),
    addItem(){
        var newValue = parseFloat(this.value).toFixed(2);
        newValue = parseFloat(newValue);
        if(!this.title == '' &  !isNaN(newValue)  & !this.type == '') {
            let item = {
            title: this.title,
            value:newValue,
            type: this.type
            };
            this.addNewItem(item);
        }
        
        
        this.title = '';
        this.value = '';
        this.type = '';
    },
    
}
}
</script>

<style scoped>
.input-card{
    background-color: #C4C4C4;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center; 
    justify-content: space-around;
}
select{
    outline: none;
    padding: 5px 10px;
    font-size: 18px;
}
button{
    background-color: #55835F;
    color: #fff;
    outline: none;
    padding: 5px 15px;
    font-size: 18px;
    font-family: 'Poppins';
    font-weight: bold;
    border: 0px;
    cursor: pointer;
    transition: 0.5s all;
}
button:hover{
    color: #55835F;
    background-color: #fff;
    border: 1px solid #55835F;
}
input{
    font-family: 'Poppins';
    padding: 5px 10px;
    text-transform: capitalize;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.value-field{
    width: 250px;
}
</style>