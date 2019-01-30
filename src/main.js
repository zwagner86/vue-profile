import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faBars,
    faExclamationCircle,
    faStar,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import App from './App';

library.add(fab, faBars, faExclamationCircle, faStar, faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App)
});
