export { default as Logo } from '../..\\components\\Logo.vue'
export { default as ConversationChatWindow } from '../..\\components\\conversation\\chatWindow.vue'
export { default as ConversationContacts } from '../..\\components\\conversation\\contacts.vue'
export { default as DashboardBarchart } from '../..\\components\\dashboard\\barchart.vue'
export { default as DashboardProjects } from '../..\\components\\dashboard\\projects.vue'
export { default as DashboardTasks } from '../..\\components\\dashboard\\tasks.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyConversationChatWindow = import('../..\\components\\conversation\\chatWindow.vue' /* webpackChunkName: "components/conversation-chat-window" */).then(c => wrapFunctional(c.default || c))
export const LazyConversationContacts = import('../..\\components\\conversation\\contacts.vue' /* webpackChunkName: "components/conversation-contacts" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardBarchart = import('../..\\components\\dashboard\\barchart.vue' /* webpackChunkName: "components/dashboard-barchart" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardProjects = import('../..\\components\\dashboard\\projects.vue' /* webpackChunkName: "components/dashboard-projects" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboardTasks = import('../..\\components\\dashboard\\tasks.vue' /* webpackChunkName: "components/dashboard-tasks" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
