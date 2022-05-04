import Vue from "vue";
// import Vue from "../node_modules/vue/dist/vue"
// import Vue from "vue/dist/vue"
import App from "./App.vue";

new Vue({
	el: "#root",
	render: h => h(App),
	// render: function (createElement, context) {
	// 	console.log(context);
	// 	return createElement(App);
	// }

	// template: `<App></App>`,
	// components: {App}
})
// .$mount('#root')
;