import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faHighlighter,
  faBold,
  faItalic,
  faStrikethrough,
  faUnderline,
  faFont,
  faMinus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(faHighlighter)
library.add(faBold)
library.add(faItalic)
library.add(faStrikethrough)
library.add(faUnderline)
library.add(faFont)
library.add(faMinus)
library.add(faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
