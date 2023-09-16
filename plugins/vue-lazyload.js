// plugins/vue-lazyload.js
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  // Configure the options here, such as loading images, error images, etc.
  // For example:
  loading: require('@/assets/icons/loading-image.png'),
  error: require('@/assets/icons/loading-image.png'),
})