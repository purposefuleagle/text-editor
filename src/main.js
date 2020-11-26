import Vue from 'vue'
import App from './App.vue'

import VCard from '@/components/ui/v-card/VCard'
import VTextEditor from '@/components/ui/v-text-editor/VTextEditor'
import VToolbar from '@/components/ui/v-toolbar/VToolbar'
import VEditor from '@/components/ui/v-editor/VEditor'
import VBtn from '@/components/ui/v-btn/VBtn'

// eslint-disable-next-line no-unused-vars
import faicons from '@/utils/fa-icons'

Vue.component('VCard', VCard)
Vue.component('VTextEditor', VTextEditor)
Vue.component('VToolbar', VToolbar)
Vue.component('VEditor', VEditor)
Vue.component('VBtn', VBtn)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
