import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import RouteNames from "./route-names";

Vue.config.productionTip = false
Vue.use(VueRouter);

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
  mode: 'history',
})
new Vue({
  render: h => h(App),
  router
    }
).$mount('#app')
