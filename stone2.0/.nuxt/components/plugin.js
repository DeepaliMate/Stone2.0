import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  ConversationChatWindow: () => import('../..\\components\\conversation\\chatWindow.vue' /* webpackChunkName: "components/conversation-chat-window" */).then(c => wrapFunctional(c.default || c)),
  ConversationContacts: () => import('../..\\components\\conversation\\contacts.vue' /* webpackChunkName: "components/conversation-contacts" */).then(c => wrapFunctional(c.default || c)),
  DashboardBarchart: () => import('../..\\components\\dashboard\\barchart.vue' /* webpackChunkName: "components/dashboard-barchart" */).then(c => wrapFunctional(c.default || c)),
  DashboardProjects: () => import('../..\\components\\dashboard\\projects.vue' /* webpackChunkName: "components/dashboard-projects" */).then(c => wrapFunctional(c.default || c)),
  DashboardTasks: () => import('../..\\components\\dashboard\\tasks.vue' /* webpackChunkName: "components/dashboard-tasks" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
