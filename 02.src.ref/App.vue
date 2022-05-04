<template>
	<div>
		<School></School>
		<School />
		<School id="sch" ref="sch"></School>
		<button ref="btn" @click="getRef">获取ref</button>
	</div>
</template>

<script>
	import School from "./components/School.vue";

	export default {
		name: "App",
		components: {
			School,
		},
		methods: {
			getRef() {
				console.log(document.getElementById("sch"));
				console.log(this.$refs.btn);
				console.log(this.$refs.sch);
			}
		}
	};
</script>

<style>
</style>