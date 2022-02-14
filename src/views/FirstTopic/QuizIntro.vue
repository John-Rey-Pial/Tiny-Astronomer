<template>
	<div>
		<div>
			<img
				class="design"
				src="../../../src/assets/materials/Motions.png"
				alt="Motions of the Earth"
			/>
			<div style="text-align: center; margin-top: 10px">
				NOW, Let's see what you have learned so far...
			</div>
			<h1 style="text-align: center">
				Are you ready to put that knowledge to the test?
			</h1>
			<v-btn
				class="purple white--text take-test-btn mt-10"
				@click="saveProgress"
				>LET'S GO!</v-btn
			>
			<v-spacer class="mt-3" style="font-size: 12px; margin-left: 450px">
				<span>Click 'LET'S GO' to Start</span>
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
	import lessonAPI from "../../api/lessonAPI";
	import testAPI from "../../api/testAPI";
	export default {
		components: {},
		data() {
			return {
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
					const updatedLesson = await lessonAPI.prototype.updateLesson(
						"Motions of the Earth",
						{
							status: "Completed",
							progress: 100,
						}
					);
					const updatedTest = await testAPI.prototype.updateTest(
						{ status: "Not Yet", score: 0 },
						"Motions of the Earth Test"
					);
					this.signInDialog = false;
					console.log(updatedTest);
					console.log(updatedLesson);
					this.$router.push("/quiz1");
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
