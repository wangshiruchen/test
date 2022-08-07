/*
 * @description: 
 * @Author: Wanghf
 * @Date: 2022-08-07 14:44:57
 * @LastEditor: Wanghf
 * @LastEditTime: 2022-08-07 15:01:13
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
