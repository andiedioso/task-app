import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import RouteNames from "./route-names";
import Vuex from 'vuex';
import {store} from '@/store/store';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path:'/',
    name: RouteNames.home,
    component: TaskList,
    props: true},
  {path:'/add',
    name: RouteNames.add,
    component: AddTask}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  store,
  mode: 'history',
})
new Vue({
  render: h => h(App),
  router,
  store,
    }
).$mount('#app')
