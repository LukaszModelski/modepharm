import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    closeMenuMixin() {
      const menu = document.getElementById('menu');
      const content = document.getElementById('main-content');
      if(menu && content) {
          menu.classList.remove('active');
          content.classList.remove('menu-active');
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
