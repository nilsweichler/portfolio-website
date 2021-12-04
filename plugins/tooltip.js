import Vue from 'vue'
import VTooltip from 'v-tooltip'

VTooltip.options.disposeTimeout = 50000000;

Vue.use(VTooltip, {
  themes: {
    'info-tooltip': {
      offset: [0, 24],
      delay: { show: 1000, hide: 0 },
    },
  },
})
