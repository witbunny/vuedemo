<template>
	<div>
		<h2 @click="showName">{{name}}</h2>
		<h2>{{address}}</h2>
	</div>
</template>

<script>
	import { showName, publicData } from "../mixin";

	export default {
		name: "School",
		data() {
			return {
				name: "sss",
				address: "bj",
				x: 999
			};
		},
		mounted () {
			console.log("hello!!!!!!!!!!");
		},
		mixins: [showName, publicData],
	};
</script>

<style>
</style>