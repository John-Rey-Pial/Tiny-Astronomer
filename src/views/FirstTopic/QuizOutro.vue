<template>
	<div>
		<div>
			<img
				class="design"
				src="../../../src/assets/materials/Motions.png"
				alt="Motions of the Earth"
			/>
			<div style="text-align: center; margin-top: 10px">Score</div>
			<h1 style="text-align: center">{{ this.score }} / 15</h1>
			<v-btn
				class="purple white--text take-test-btn mt-10"
				@click="$router.push('/progress')"
				>Proceed and Save Progress</v-btn
			>
			<v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px">
			</v-spacer>
		</div>
	</div>
</template>
<script>
	export default {
		components: {},
		props: ["score"],
		data() {
			return {};
		},
		methods: {},
	};
</script>
<style scoped>
	.design {
		width: 200px;
		height: 150px;
		margin-top: 30px;
		margin-left: 40%;
	}
	.take-test-btn {
		width: 450px;
		height: 30px;
		text-transform: capitalize;
		margin-left: 300px;
		margin-top: 10px;
	}
</style>
