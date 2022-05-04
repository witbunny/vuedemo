<template>
	<div class="demo">
		<h2>{{ name }}</h2>
		<h2>{{ address }}</h2>
	</div>
</template>

<script>
	import Vue from "vue";
	export default Vue.extend({
		name: "School",
		data() {
			return {
				name: "gogo",
				address: "bj",
			};
		},
		methods: {},
	});
</script>

<style>
	.demo {
		background-color: cornflowerblue;
	}
</style>