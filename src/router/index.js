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
const msg = reslove => require(['@/container/msg'], reslove);
const msgAll = reslove => require(['@/container/msg-all'], reslove);
const msgRead = reslove => require(['@/container/msg-read'], reslove);
const msgUnread = reslove => require(['@/container/msg-unread'], reslove);
const msgManage = reslove => require(['@/container/msg-manage'], reslove);
const msgReceive = reslove => require(['@/container/msg-receive'], reslove);
const user = reslove => require(['@/container/user'], reslove);
const userAccountOverview = reslove => require(['@/container/user-account-overview'], reslove);
const userBaseInfo = reslove => require(['@/container/user-base-info'], reslove);
const userSecuritySetting = reslove => require(['@/container/user-security-setting'], reslove);
const userCostCenter = reslove => require(['@/container/user-cost-center'], reslove);
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: index,
      children : [
      	{
      		path : '',
      		name: '',
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
    },
    {
      path : '/msg',
      name : '',
      component : msg,
      children : [
        {
          path : '',
          redirect: 'msg-unread',//此处重定向为demo演示需要，真实环境应去掉
          name : '',
          component : msgUnread//此处组件也为demo演示需要，真实环境为msgAll
        },
        {
          path : 'msg-all',
          name : 'msg-all',
          component : msgAll
        },
        {
          path : 'msg-read',
          name : 'msg-read',
          component : msgRead
        },
        {
          path : 'msg-unread',
          name : 'msg-unread',
          component : msgUnread
        },
        {
          path : 'msg-manage',
          name : 'msg-manage',
          component : msgManage
        },
        {
          path : 'msg-receive',
          name : 'msg-receive',
          component : msgReceive
        },
      ]
    },
    {
      path : '/user',
      name : '',
      component : user,
      children : [
        {
          path : '',
          name : '',
          component : userAccountOverview
        },
        {
          path : 'user-account-overview',
          name : '/user/user-account-overview',
          component : userAccountOverview
        },
        {
          path : 'user-base-info',
          name : '/user/user-base-info',
          component : userBaseInfo
        },
        {
          path : 'user-security-setting',
          name : '/user/user-security-setting',
          component : userSecuritySetting
        },
        {
          path : 'user-cost-center',
          name : '/user/user-cost-center',
          component : userCostCenter
        },
      ]
    }

  ],
   mode : 'history'
})
