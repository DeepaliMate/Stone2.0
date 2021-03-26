import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f268d952 = () => interopDefault(import('..\\pages\\activity.vue' /* webpackChunkName: "pages/activity" */))
const _695ccbfc = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _315c119c = () => interopDefault(import('..\\pages\\temp.vue' /* webpackChunkName: "pages/temp" */))
const _5734a33a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activity",
    component: _f268d952,
    name: "activity"
  }, {
    path: "/dashboard",
    component: _695ccbfc,
    name: "dashboard"
  }, {
    path: "/temp",
    component: _315c119c,
    name: "temp"
  }, {
    path: "/",
    component: _5734a33a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
