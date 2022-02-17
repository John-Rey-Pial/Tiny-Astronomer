<template>
	<div>
		<div>
			<img
				class="design"
				src="../../../src/assets/materials/SolarSystem.png"
				alt="The Solar System"
			/>
			<div style="text-align: center; margin-top: 10px">Score</div>

			<h1 style="text-align: center">{{ this.score }} / 15</h1>
			<v-btn
				class="purple white--text take-test-btn mt-10"
				@click="saveProgress"
				>Proceed and Save Progress</v-btn
			>
			<v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px">
			</v-spacer>
		</div>

		<v-dialog hide-overlay persistent width="300" v-model="signInDialog">
			<v-card color="white" light>
				<v-card-text>
					<h3 class="dialogText">Saving Progress. Please wait.</h3>
					<v-progress-linear
						indeterminate
						color="black"
						class="mb-0 mt-5"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<div class="text-center">
			<v-snackbar v-model="snackbar" :timeout="timeout">
				{{ errormessage }}

				<template v-slot:action="{ attrs }">
					<v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
		</div>
	</div>
</template>
<script>
	import userAPI from "../../api/userAPI";
	import testAPI from "../../api/testAPI";
	import lessonAPI from "../../api/lessonAPI";
	export default {
		components: {},
		props: ["score"],
		data() {
			return {
				learningLevel: "",
				status: "",
				signInDialog: false,
				snackbar: false,
				timeout: 2000,
				errormessage: "",
			};
		},
		methods: {
			async saveProgress() {
				try {
					this.signInDialog = true;
					if (this.score < 13) {
						this.status = "Failed";
						const updatedTest = await testAPI.prototype.updateTest(
							{
								status: this.status,
								score: this.score,
							},
							"Solar System Test"
						);
						console.log(updatedTest);
					} else if (this.score > 12) {
						this.status = "Passed";
						this.learningLevel =
							this.learningLevel == "Expert" ? "Expert" : "Intermediate";

						const updatedUser = await userAPI.prototype.updateUser({
							learningLevel: this.learningLevel,
						});
						const updatedTest = await testAPI.prototype.updateTest(
							{
								status: this.status,
								score: this.score,
							},
							"Solar System Test"
						);

						if (this.learningLevel != "Expert") {
							const updatedLesson = await lessonAPI.prototype.updateLesson(
								"Motions of the Earth",
								{
									status: "In Progress",
									progress: 0,
								}
							);
							console.log(updatedLesson);
						}

						console.log(updatedTest);

						console.log(updatedUser);
					}

					this.signInDialog = false;

					this.$router.push("/content");
				} catch (error) {
					this.signInDialog = false;
					this.snackbar = true;
					if (error.message == "Network Error") {
						this.errormessage = error.message;
					} else {
						this.errormessage = "An error has occured";
					}
				}
			},
		},

		async created() {
			const user = await userAPI.prototype.getSpecificUser();
			this.learningLevel = user.data.learningLevel;
			console.log(this.learningLevel);
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
