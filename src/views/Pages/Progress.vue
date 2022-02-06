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
			<div class="progress">
				<div class="progressHeader">
					<div class="left">Current Learning Level:</div>
					<div class="right">
						<b>{{ userData.learningLevel }}</b>
					</div>
				</div>
				<hr />
				<v-list>
					<v-list-item class="preTest">
						<div class="content">
							<div class="header">
								<div class="tit">
									<b>{{ tests[0].name }}</b>
								</div>

								<div class="percentage">
									<b v-if="tests[0].status != 'Not Yet'">{{ 100 }}%</b>
									<b v-if="tests[0].status == 'Not Yet'">{{ 0 }}%</b>
								</div>
							</div>
							<div class="progressbar">
								<v-progress-linear
									:v-model="tests[0].status == 'Not Yet' ? 0 : 100"
									color="#1a237e"
									height="25"
									rounded
								>
								</v-progress-linear>
							</div>
							<div class="status">
								<div>{{ tests[0].status }}</div>
							</div>
						</div>
						<div class="button">
							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="tests[0].status != 'Not Yet'"
								>View Score</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="tests[0].status == 'Not Yet'"
								>Take Test</v-btn
							>
						</div>
					</v-list-item>

					<hr />
					<v-list-item
						class="lesson1"
						:disabled="lessons[0].status == 'Locked'"
					>
						<div class="content">
							<div class="header">
								<div class="tit">
									<b>{{ lessons[0].name }}</b>
								</div>

								<div class="percentage">
									<b>{{ lessons[0].progress }}%</b>
								</div>
							</div>
							<div class="progressbar">
								<v-progress-linear
									:v-model="lessons[0].progress"
									color="#1a237e"
									height="25"
									rounded
								>
								</v-progress-linear>
							</div>
							<div class="status">
								<div>{{ lessons[0].status }}</div>
							</div>
						</div>
						<div class="button">
							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="lessons[0].status == 'Locked'"
								>Locked</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="
									tests[1].status == 'Passed' || tests[1].status == 'Failed'
								"
								>View Score</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="lessons[0].status == 'In Progress'"
								>Take Lecture</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="
									lessons[0].status == 'Completed' &&
									tests[2].status == 'Not Yet'
								"
								>Take Test</v-btn
							>
						</div>
					</v-list-item>
					<v-list-item
						class="lesson2"
						:disabled="lessons[1].status == 'Locked'"
					>
						<div class="content">
							<div class="header">
								<div class="tit">
									<b>{{ lessons[1].name }}</b>
								</div>

								<div class="percentage">
									<b>{{ lessons[1].progress }}%</b>
								</div>
							</div>
							<div class="progressbar">
								<v-progress-linear
									:v-model="lessons[1].progress"
									color="#1a237e"
									height="25"
									rounded
								>
								</v-progress-linear>
							</div>
							<div class="status">
								<div>{{ lessons[1].status }}</div>
							</div>
						</div>
						<div class="button">
							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="lessons[1].status == 'Locked'"
								>Locked</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="
									tests[2].status == 'Passed' || tests[2].status == 'Failed'
								"
								>View Score</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="lessons[1].status == 'In Progress'"
								>Take Lecture</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="
									lessons[1].status == 'Completed' &&
									tests[2].status == 'Not Yet'
								"
								>Take Test</v-btn
							>
						</div>
					</v-list-item>
					<hr />
					<v-list-item class="postTest" :disabled="tests[3].status == 'Locked'">
						<div class="content">
							<div class="header">
								<div class="tit">
									<b>{{ tests[3].name }}</b>
								</div>

								<div class="percentage">
									<b
										v-if="
											tests[3].status != 'Not Yet' &&
											tests[3].status != 'Locked'
										"
										>{{ 100 }}%</b
									>
									<b
										v-if="
											tests[3].status == 'Not Yet' ||
											tests[3].status == 'Locked'
										"
										>{{ 0 }}%</b
									>
								</div>
							</div>
							<div class="progressbar">
								<v-progress-linear
									:v-model="
										tests[3].status == 'Not Yet' || tests[3].status == 'Locked'
											? 0
											: 100
									"
									color="#1a237e"
									height="25"
									rounded
								>
								</v-progress-linear>
							</div>
							<div class="status">
								<div>{{ tests[3].status }}</div>
							</div>
						</div>
						<div class="button">
							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="tests[3].status == 'Locked'"
								>Locked</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="
									tests[3].status == 'Passed' || tests[2].status == 'Failed'
								"
								>View Score</v-btn
							>

							<v-btn
								color="#9c27b0"
								class="white--text"
								v-if="tests[3].status == 'Not Yet'"
								>Take Test</v-btn
							>
						</div>
					</v-list-item>
				</v-list>
			</div>
		</div>
	</div>
</template>

<script>
	import userAPI from "../../api/userAPI";
	import testAPI from "../../api/testAPI";
	import lessonAPI from "../../api/lessonAPI";
	export default {
		components: {},
		data: () => ({
			userData: {},
			tests: {},
			lessons: {},
			fetched: false,
			loading: true,
			error: false,
		}),
		async created() {
			if (!localStorage.getItem("token")) {
				this.$router.push("/login");
			} else {
				try {
					const user = await userAPI.prototype.getSpecificUser();
					this.userData = user.data;

					const tests = await testAPI.prototype.getAllTests();
					this.tests = tests.data.tests;

					const lessons = await lessonAPI.prototype.getAllLessons();
					this.lessons = lessons.data.lessons;

					this.loading = false;
					this.fetched = true;
				} catch (error) {
					this.error = true;
				}
			}
		},
	};
</script>

<style scoped>
	.progress {
		padding: 20px 20px;
	}
	.progressHeader,
	.preTest,
	.lesson1,
	.lesson2,
	.postTest {
		display: flex;
		align-items: center;

		padding: 10px 20px;
	}

	.left {
		font-size: 20px;
	}
	.right {
		font-size: 30px;
		padding-left: 20px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.content {
		width: 80%;
	}

	.progressbar {
		margin: 5px 0px;
	}

	.status {
		display: flex;
		justify-content: flex-end;
	}

	.button {
		width: 20%;
		margin: auto;
		text-align: center;
	}

	.status {
		font-size: 14px;
	}

	.loading {
		height: 90%;
		margin-top: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
