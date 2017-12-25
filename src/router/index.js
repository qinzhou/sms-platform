import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Router);
const index = reslove => require(['@/container'], reslove);
const overview = reslove => require(['@/container/overview'], reslove);
const task = reslove => require(['@/container/task'], reslove);
const module = reslove => require(['@/container/module'], reslove);
const port = reslove => require(['@/container/port'], reslove);
const business = reslove => require(['@/container/business'], reslove);
const authorize = reslove => require(['@/container/authorize'], reslove);
const population = reslove => require(['@/container/population'], reslove);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children : [
      	{
      		path : '',
      		name: 'overview',
      		component: overview,
      	},
      	{
      		path : 'overview',
      		name: 'overview',
      		component: overview,
      	},
      	{
      		path : 'task',
      		name: 'task',
      		component: task,
      	},
      	{
      		path : 'module',
      		name: 'module',
      		component: module,
      	},
      	{
      		path : 'port',
      		name: 'port',
      		component: port,
      	},
      	{
      		path : 'business',
      		name: 'business',
      		component: business,
      	},
      	{
      		path : 'authorize',
      		name: 'authorize',
      		component: authorize,
      	},
      ]
    },
    {
      path : '/population',
      name : 'population',
      component : population

    }
  ],
   mode : 'history'
})
