import './utils.js'
import { objectExtend } from './utils.js'
import VueAuthorize from './authorize.js'
import IsAuthorizedDirective from './directive.js'
import IsAuthorizedComponent from './component.js'

/**
 * VueAuthorize plugin
 * @param {Object} Vue
 */
function plugin(Vue, options) {
  if (plugin.installed) {
    return
  }

  Vue.directive('ifAuthorized', IsAuthorizedDirective)
  Vue.component('isAuthorized', IsAuthorizedComponent)

  let vueAuthorizeInstance = null
  Object.defineProperties(Vue.prototype, {
    $authorize: {
      get() {
        if (!vueAuthorizeInstance) {
          vueAuthorizeInstance = new VueAuthorize(Vue, options)
        }
        return vueAuthorizeInstance
      }
    }
  })
}

export default plugin
export { VueAuthorize }
