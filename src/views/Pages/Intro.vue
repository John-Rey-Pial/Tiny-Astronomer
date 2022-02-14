<template>
	<div>
		<div style="display: flex">
			<div>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/VG-2FYEU5jk"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="video"
				></iframe>
			</div>

			<div class="ml-15 mt-3">
				<div class="message">
					Meet the
					<v-spacer>Developers.</v-spacer>
				</div>
				<img
					class="design"
					src="../../assets/materials/Interface Text.png"
					alt="design"
				/>
				<div style="margin-top: 30px; margin-left: 50px; font-size: 14px">
					The creators that begun an initiative that
					<v-spacer></v-spacer>adapts to the new normal
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import userAPI from "../../api/userAPI";
	export default {
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
				} catch (error) {
					this.error = true;
				}
			}
		},
	};
</script>

<style scoped>
	.devs {
		border: rgba(133, 90, 133, 0.973) 5px solid;
		margin: 3px;
	}

	.message {
		font-size: 35px;
		margin-top: 20px;
		margin-left: 50px;
	}

	.design {
		width: 300px;
		height: 70px;
		margin: 0;
		padding: 0;
	}
	.video {
		margin-top: 40px;
		margin-left: 40px;
	}
</style>
