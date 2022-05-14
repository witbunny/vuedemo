<template>
	<div>
		<h1 class="student">haha</h1>
		<School class="title"></School>
		<hr>
		<Student></Student>
	</div>
</template>

<script>
	import School from "./components/School.vue";
	import Student from "./components/Student.vue";

	export default {
		name: "App",
		components: {
			School,
			Student
		},
		methods: {
			
		}
	};
</script>

<style scoped>
	.title {
		color: red;
	}
</style>