import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Page1 = r => require.ensure([], () => r(require('@/views/page1/page1.vue')),'test1');
const Page2 = r => require.ensure([], () => r(require('@/views/page2/page2.vue')),'test2');
const Pinggu = r => require.ensure([], () => r(require('@/views/pinggu/pinggu.vue')),'test2');
const Vee = r => require.ensure([], () => r(require('@/components/diya/Vee.vue')),'test2');
const damage = r => require.ensure([], () => r(require('@/components/diya/Xdamage.vue')),'test2');
const dform = r => require.ensure([], () => r(require('@/views/pinggu/Dform.vue')),'test2');
const base2 = r => require.ensure([], () => r(require('@/components/diya/baseInfo2.vue')),'test2');
const base = r => require.ensure([], () => r(require('@/components/diya/baseInfo.vue')),'test2');





export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pinggu',
      component: Pinggu
    },
    {
      path: '/d',
      name: 'dform',
      component: dform
    },
    {
      path:'/base2',
      name:'base2',
      component:base2
    },
    {
      path:'/base',
      name:'base',
      component:base
    },
    {
      path:'/vee',
      name:'base',
      component:Vee
    },
    {
      path:'/damage',
      name:'damage',
      component:damage
    },

  ]
})
