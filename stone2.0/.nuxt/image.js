import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$3eb2 from 'C:/Users/mated/Desktop/Stone2.0final/trunk/stone2.0/node_modules/@nuxt/image/dist/runtime/providers/static.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "intersectOptions": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$3eb2, defaults: {"domains":[]} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)
  inject('img', $img)
}
