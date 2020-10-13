import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        taskList: [{}],
    },
    // getters:{
    //     getList: state => {
    //         return state.
    //     }
    // }
});