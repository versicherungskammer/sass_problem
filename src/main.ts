import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Partner from './components/Partner.vue';

Vue.config.productionTip = false;
const CustomElement = wrap(Vue, Partner);
window.customElements.define('my-partner', CustomElement);
