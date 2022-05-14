<template>
	<div class="student">
		<h2 class="title">{{name}}</h2>
		<h2>{{age}}</h2>
	</div>
</template>

<script>
	export default {
		name: "Student",
		data() {
			return {
				name: "leo",
				age: 23,
			};
		},
	};
</script>

<style>
	.student {
		background-color: lightgreen;
	}
</style>