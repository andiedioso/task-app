import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import RouteNames from "./route-names";
import Vuex from 'vuex';
import {store} from '@/store/store';
import EditTask from "@/components/EditTask";

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
    component: AddTask},
  {path: '/edit',
    name: RouteNames.edit,
    component: EditTask,
    props: true,
  }
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
