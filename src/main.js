import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
createApp(App).use(store).use(router).mount('#app')
