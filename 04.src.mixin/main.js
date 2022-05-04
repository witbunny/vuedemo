import Vue from "vue";
import App from "./App.vue";

import {addHooks} from "./mixin";
Vue.mixin(addHooks);

new Vue({
	el: "#root",
	render: h => h(App)
});