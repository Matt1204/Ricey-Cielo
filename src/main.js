import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3';
import AOS from 'aos';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'aos/dist/aos.css'; // Import the CSS file


const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(AOS.init());

app.mount('#app');
