import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const store = new vuex.Store({
    state:{
        incArr: [],
        expArr: [],

        incSum: [],
        expSum: [],
    },
    mutations: {
        newItem (state,item) {
            if(item.type == 'inc') {
                state.incArr.push(item);
                state.incSum.push(item.value)
            }else{
                state.expArr.push(item);
                state.expSum.push(item.value);
            }
        },

        removeIncEl(state,id){
            // get the value of the obj chosen
            let rm = state.incArr[id].value; 
            // remove it from the UI
            state.incArr.splice(id,1);
            // remove it from the inc sum
            let idArr = state.incSum.indexOf(rm);
            state.incSum.splice(idArr,1)
        },
        removeExpEl (state,id) {
            let rm = state.expArr[id].value; 
            state.expArr.splice(id,1);
            let idArr = state.expSum.indexOf(rm);
            state.expSum.splice(idArr,1)
        },
        
    },
    getters: {
        calcIncSum (state){
            let sumInc = 0;
            state.incSum.forEach(el => sumInc += el )
        return sumInc ;
        },
        calcExpSum (state){
            let sumExp = 0;
            state.expSum.forEach(el => sumExp += el )
        return sumExp ;
        },        
    },
    actions:{
        addNewItem({commit},item) {
                commit('newItem',item)
        },
        removeIncElement({commit},id) {
            commit('removeIncEl',id);
        },
        removeExpElement({commit},id) {
            commit('removeExpEl',id);
        }
    }

});

export default store;