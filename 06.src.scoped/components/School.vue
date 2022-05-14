<template>
	<div class="student">
		<h2>{{name}}</h2>
		<h2>{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name: "School",
		data() {
			return {
				name: "sss",
				address: "bj",
			};
		},
	};
</script>

<style scoped>
	.student {
		background-color: skyblue;
	}
</style>