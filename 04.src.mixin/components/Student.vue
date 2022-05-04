<template>
	<div>
		<h2 @click="showName">{{name}}</h2>
		<h2>{{age}}</h2>
	</div>
</template>

<script>
	import { showName } from "../mixin";

	export default {
		name: "Student",
		data() {
			return {
				name: "leo",
				age: 23,
			};
		},
		mixins: [showName],
	};
</script>

<style>
</style>