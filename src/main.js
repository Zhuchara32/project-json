import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.directive('success', {
  handleScroll(evt, el) {
    if (window.scrollY > 0) {
      el.setAttribute(
        'style',
        'height: this.x * 8 + 2 + "rem"',
        'width: this.x * 8 + 7 + "rem"',
      );
    }
    return window.scrollY > 100;
  },
  x: document.body.scrollTop,
  bind(el) {
    this.handleScroll(el);
  },
});
