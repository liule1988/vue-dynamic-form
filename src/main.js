// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import './styles/index.css'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Validator } from 'vee-validate';
Vue.config.productionTip = false
Vue.use(ElementUI);

Validator.addLocale(zh_CN);

//自定义提示
const dictionary = {
  zh_CN: {
    message: {
      required: (field) => field + '不能为空'
    }
  }
};
Validator.updateDictionary(dictionary);
Vue.use(VeeValidate, {
  locale: 'zh_CN',
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
