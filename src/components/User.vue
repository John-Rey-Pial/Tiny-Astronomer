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
				<div>
					<div style="display: flex">
						<v-card
							class="rounded-2 mt-2 ml-2 mb-0"
							style="width: 17%; height: 7rem"
						>
							<section
								class="heading-6 white--text rounded-bottom-0"
								style="
									text-align: center;
									padding-top: 5px;
									padding-bottom: 5px;
									width: 100%;
								"
							>
								{{ userData.name.firstName }} {{ userData.name.lastName }}
							</section>
							<v-flex class="flex-container">
								<v-icon class="user ml-2 mt-1" style="font-size: 70px"
									>mdi-account-circle</v-icon
								>
								<span class="learning-level">
									Learning Level:
									<v-spacer>{{ userData.learningLevel }}</v-spacer>
								</span>
							</v-flex>
						</v-card>

						<Avatar />
					</div>
				</div>
			</div>

			<div>
				<div>
					<div style="display: flex">
						<v-card
							class="rounded-2 mt-1 ml-2"
							style="width: 17%; height: 26.4rem"
						>
							<section
								class="purple heading-6 white--text rounded-bottom-0 pb-2 pt-1"
								style="text-align: center; width: 100%"
							>
								Topic
							</section>
							<nav v-if="userData.learningLevel != 'TBD'">
								<v-spacer style="margin-bottom: 40px"></v-spacer>
								<ul
									class="heading-3 black--text rounded-0"
									style="padding-left: 0px"
								>
									<li>
										<router-link to="/intro">Introduction</router-link>
									</li>
									<li>
										<router-link to="/content">Content</router-link>
									</li>
									<li>
										<router-link to="/progress">Progress</router-link>
									</li>
									<li>
										<router-link to="/surveys">Surveys</router-link>
									</li>
									<li>
										<router-link to="/references">References</router-link>
									</li>
								</ul>
							</nav>

							<h4
								style="text-align: center; margin: 20px 10px; font-size: 20px"
								v-if="userData.learningLevel == 'TBD'"
							>
								Unlock topics by taking the pre-test.
							</h4>
							<v-btn class="indigo white--text mt-7 ml-16" @click="logOut"
								>Logout</v-btn
							>
						</v-card>

						<div>
							<div class="content-section mt-2">
								<v-card>
									<section
										class="indigo darken-4 heading-6 white--text rounded-bottom-0"
										style="
											text-align: left;
											padding-top: 5px;
											padding-bottom: 2px;
										"
									>
										<span class="ml-4">{{ $route.name }}</span>
									</section>
									<section
										class="white"
										style="height: 388px; margin-bottom: 2px"
									>
										<router-view />
									</section>
								</v-card>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	</div>
</template>
<script>
	import Avatar from "../components/Avatar";
	import Footer from "../components/Footer";
	import userAPI from "../api/userAPI";
	export default {
		components: { Avatar, Footer },

		data() {
			return {
				userData: {},
				fetched: false,
				loading: true,
				error: false,
			};
		},
		methods: {
			logOut() {
				this.fetched = false;
				this.loading = true;
				setTimeout(() => {
					localStorage.removeItem("token");
					this.$router.push("/login");
					this.fetched = true;
					this.loading = false;
				}, 1000);
			},
		},

		async created() {
			if (!localStorage.getItem("token")) {
				this.$router.push("/login");
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
	section {
		background: purple;
	}

	.learning-level {
		text-align: left;
		margin-top: 10px;
		line-height: 30px;
	}
	.flex-container {
		display: flex;
		justify-content: space-evenly;
		text-align: center;
	}

	nav ul {
		display: block;
		text-decoration: none;
		list-style-type: none;
		text-align: center;
	}
	li a {
		text-decoration: none;
		color: inherit;
		border: solid rgb(240, 240, 240) 1px;
		border-radius: 10px;
		padding-top: 10px;
		padding-bottom: 4px;

		padding-left: 55px;
		padding-right: 55px;
	}
	nav li {
		margin-top: 30px;
	}

	a:hover {
		background-color: rgb(219, 194, 219);
		text-align: center;
		padding-top: 10px;
		padding-bottom: 4px;
		margin-bottom: 5px;
		margin-right: 5px;
		margin-left: 5px;
		padding-left: 55px;
		padding-right: 55px;
		transition-delay: 0.5ms;
		border-radius: 10px;
	}
	.router-link-exact-active {
		background-color: rgb(219, 194, 219);
		text-align: center;
		padding-top: 10px;
		padding-bottom: 4px;
		margin-bottom: 5px;
		margin-right: 5px;
		margin-left: 5px;
		padding-left: 55px;
		padding-right: 55px;
		border-radius: 10px;
	}
	.user-name {
		display: flex;
	}

	.content-section {
		width: 65rem;
		margin-left: 30px;
		background: blue;
	}

	.white {
		overflow-y: scroll;
	}

	.loading {
		height: 90%;
		margin-top: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
