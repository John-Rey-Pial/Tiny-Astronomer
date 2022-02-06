<template>
	<div>
		<div>
			<div class="backdrop" @click.self="closeExplore">
				<v-card class="form rounded-2" style="width: 38%; height: 24rem">
					<section
						class="heading-6 white--text"
						style="
							text-align: center;
							padding-top: 10px;
							padding-bottom: 10px;
							height: 11%;
						"
					>
						Login
					</section>
					<v-spacer class="mb-10"></v-spacer>
					<div style="display: flex; margin-left: 20px">
						<div class="input-column pt-3">Username</div>
						<input
							class="user-name"
							type="text"
							required
							autocomplete="off"
							id="id.name"
							name="id.name"
							placeholder="Username"
							v-model="username"
						/>
						<br />
						<br />
					</div>

					<div
						style="
							display: flex;
							margin-top: 15px;
							margin-left: 20px;
							margin-bottom: 10px;
						"
					>
						<div class="input-column pt-3">Password</div>
						<input
							class="user-name"
							type="password"
							required
							autocomplete="off"
							id="id.name"
							name="id.name"
							placeholder="Password"
							v-model="password"
						/>
						<br />
						<br />
					</div>

					<span class="caption" style="padding-left: 340px"
						>Forgot your password?</span
					>
					<v-btn class="submit-btn purple white--text mt-3" @click="signIn"
						>Login</v-btn
					>
					<v-spacer class="mb-4"></v-spacer>
					<span style="margin-left: 46%">or</span>
					<v-spacer class="mb-2"></v-spacer>
					<v-btn class="depressed" style="margin-left: 37%">
						<strong @click="signUp">Sign Up</strong>
					</v-btn>
				</v-card>
			</div>
		</div>

		<v-dialog hide-overlay persistent width="300" v-model="signInDialog">
			<v-card color="white" light>
				<v-card-text>
					<h3 class="dialogText">Signing in. Please wait.</h3>
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
	import userAPI from "../api/userAPI";

	export default {
		data() {
			return {
				username: "",
				password: "",
				signInDialog: false,
				snackbar: false,
				timeout: 2000,
				errormessage: "",
			};
		},

		methods: {
			closeExplore() {
				this.$emit("close");
			},
			signUp() {
				this.$emit("signUp", "SignIn");
			},

			async signIn() {
				try {
					this.signInDialog = true;
					const user = {
						email: this.username,
						password: this.password,
					};
					const response = await userAPI.prototype.signInUser(user);
					this.signInDialog = false;
					localStorage.setItem("token", response.data.user.token);
					this.$router.push("/");
				} catch (error) {
					this.signInDialog = false;
					this.snackbar = true;
					if (error.message == "Network Error") {
						this.errormessage = error.message;
					} else {
						this.errormessage = "Username or Password is incorrect";
					}
				}
			},
		},
	};
</script>

<style scoped>
	.backdrop {
		top: 0;
		position: fixed;
		background: rgba(0, 0, 0, 0.3);
		width: 100%;
		height: 100%;
	}
	.form {
		margin-left: 35%;
		margin-right: 40%;
		margin-top: 8%;
		position: center;
	}
	section {
		background-color: purple;
		width: 100%;
		height: 30px;
	}
	.input-column {
		padding: 5px;
		width: 120px;
		margin-left: 15px;
		border: solid rgb(179, 173, 173) 2px;
		border-radius: 5px;
		background: rgb(207, 200, 200);
		text-align: center;
		vertical-align: center;
	}
	.user-name {
		padding: 5px;
		width: 300px;
		margin-left: 15px;
		border: solid rgb(179, 173, 173) 2px;
		border-radius: 5px;
	}

	.submit-btn {
		margin-left: 13%;
		width: 70%;
		text-transform: capitalize;
	}
	#paulo {
		display: flex;
		flex: 15%;
		width: 10%;
		margin-top: 1rem;
		margin-left: 4rem;
	}
	#paulo-message {
		flex: 90%;
	}
	.message {
		height: 40%;
		margin-right: 10%;
		margin-top: 5%;
		margin-left: 1rem;
		border-style: solid;
		border: blue 10px;
		border-radius: 3px;
	}
	.flex-container {
		display: flex;
		justify-content: space-evenly;
	}
	::placeholder {
		color: rgba(228, 187, 228, 0.911);
	}
	input:focus::placeholder {
		color: transparent;
	}
	input:focus {
		outline: none !important;
		border-color: violet;
		box-shadow: 0 0 1 0px #719ece;
	}
</style>
