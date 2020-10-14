import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        taskList: [],
    },
    getters:{
        getList: state => {
            return state.taskList;
        }
    },
    mutations:{
        addToList: (state, payload) => {
            state.taskList.push(payload)
        },
        markAsComplete: (state, payload_id) => {
            const taskPicked = state.taskList.find(
                (el) => el.id === payload_id
            ).status = "Complete";
            //console.log(taskPicked.status);
            taskPicked.status = "Complete";
        },
        removeTask: (state, payload_id) => {
            state.taskList = state.taskList.filter(
                (el) => el.id !== payload_id
            );
        }
    },
    actions:{
        addToList: ({commit}, payload) => {
            commit('addToList', payload)
        },
        markAsComplete: ({commit}, payload_id) => {
            commit('markAsComplete', payload_id)
        },
        removeTask: ({commit}, payload_id) =>{
            commit('removeTask', payload_id)
        }
    }
});