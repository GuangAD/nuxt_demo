import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Antd)
})