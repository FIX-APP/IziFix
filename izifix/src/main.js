import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Dropdown from 'primevue/dropdown';
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import './assets/main.css'
// Add Theme and Styles
import 'primevue/resources/themes/md-light-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import AutoComplete from 'primevue/autocomplete';
// Add PrimeFlex
import 'primeflex/primeflex.css';
const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.component('pv-dropdown',Dropdown)
app.component('pv-button',Button)
app.component('pv-tabmenu',TabMenu)
app.component('pv-autocomplete',AutoComplete)
app.mount('#app')
