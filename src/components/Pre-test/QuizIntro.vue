<template>
	<div>
		<div>
			<img
				class="design"
				src="../../../src/assets/materials/images.jpg"
				alt="Motions of the Earth"
			/>
			<div style="text-align: center; margin-top: 10px">Pre-Test</div>
			<h1 style="text-align: center">
				Objective: Determining your knowledge about Astronomy
			</h1>
			<v-btn
				class="purple white--text take-test-btn mt-10"
				@click="$router.push('/pretest/')"
				>Take Test</v-btn
			>
			<v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px">
				<span>Click 'Take Test' to Start</span>
			</v-spacer>
		</div>
	</div>
</template>
<script>
	import userAPI from "../../api/userAPI";

	export default {
		components: {},
		data() {
			return {
				userData: {},
			};
		},
		methods: {},
		async created() {
			if (localStorage.getItem("level")) {
				console.log(localStorage.getItem("level"));
				if (localStorage.getItem("level") != "TBD") {
					this.$router.push("/intro");
				}
			} else {
				try {
					const user = await userAPI.prototype.getSpecificUser();
					this.userData = user.data;
					this.loading = false;
					this.fetched = true;
					localStorage.setItem("level", this.userData.learningLevel);
					if (localStorage.getItem("level") != "TBD") {
						this.$router.push("/intro");
					}
				} catch (error) {
					this.error = true;
				}
			}
		},
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
