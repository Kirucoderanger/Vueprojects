import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vue3StarRatings from "vue3-star-ratings";

const app1 = createApp(App);

app1.component("vue3-star-ratings", vue3StarRatings);

createApp(App).mount('#app')
