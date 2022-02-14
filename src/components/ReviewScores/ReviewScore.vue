<template>
	<div>
		<div class="loading" v-if="loading">
			<v-progress-circular
				:width="8"
				:size="80"
				color="blue"
				indeterminate
			></v-progress-circular>
		</div>

		<div class="err" v-if="error">
			<h2>An error has occured</h2>
			<v-btn x-large @click="reload">Reload</v-btn>
		</div>
		<div class="fetched" v-if="fetched">
			<div>
				<img
					class="design"
					src="../../../src/assets/materials/images.jpg"
					alt="Motions of the Earth"
				/>
				<h1 style="text-align: center">{{ this.testName }}</h1>
				<div style="text-align: center; margin-top: 10px">Score</div>

				<h1 style="text-align: center">{{ this.score }} / {{ this.items }}</h1>
				<v-btn
					class="purple white--text take-test-btn mt-5"
					:to="
						this.testName == 'Solar System Test'
							? '/quiz2/intro'
							: '/quiz1/intro'
					"
					v-if="!passed"
					>Retake Test</v-btn
				>
				<v-btn class="purple white--text take-test-btn mt-5" to="/progress"
					>Back To Progress</v-btn
				>
				<v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px">
				</v-spacer>
			</div>
		</div>
	</div>
</template>
<script>
	import testAPI from "../../api/testAPI";
	export default {
		components: {},

		data() {
			return {
				score: 0,
				testName: "",
				fetched: false,
				loading: true,
				error: false,
				items: 20,
				test: {},
				passed: true,
			};
		},
		methods: {},
		async created() {
			try {
				this.fetched = false;
				this.testName = this.$route.params.testname;
				console.log(this.testName);
				const test = await testAPI.prototype.getSpecificTest(this.testName);
				this.test = test.data.test[0];
				console.log(this.test);
				this.score = test.data.test[0].score;
				if (
					this.test.name == "Solar System Test" ||
					this.test.name == "Motions of the Earth Test"
				) {
					this.items = 15;
					if (this.score < 13) {
						this.passed = false;
					}
				}

				this.loading = false;
				this.fetched = true;
			} catch (error) {
				this.loading = false;
				this.error = error;
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

	.loading {
		height: 90%;
		margin-top: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
