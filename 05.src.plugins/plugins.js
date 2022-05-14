export default {
	install(Vue) {
		// console.log("install", Vue);

		Vue.mixin({
			mounted() {
				console.log("hello!", this);
			}
		});

		Vue.prototype.hello = () => { alert("hello") };
	}
};