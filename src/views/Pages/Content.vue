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
			<div style="display: flex">
				<div style="margin-left: 100px">
					<section
						style="text-align: center; margin-top: 20px; margin-bottom: 10px"
					>
						<strong>Solar System</strong>
					</section>
					<img
						src="../../../src/assets/materials/SolarSystem.png"
						alt="Solar System"
						style="width: 240px"
					/>
					<v-spacer></v-spacer>
					<v-btn
						class="indigo darken-4 white--text"
						style="text-transform: capitalize; width: 240px"
						@click="$router.push('/solar')"
						>Start Course</v-btn
					>
					<section style="font-size: 11px; margin-top: 10px">
						Take an expedition across our neighbouring giants.
					</section>
				</div>
				<div style="margin-left: 200px">
					<section
						style="text-align: center; margin-top: 20px; margin-bottom: 10px"
					>
						<strong>Motions of the Earth</strong>
					</section>
					<img
						src="../../../src/assets/materials/Motions.png"
						alt="Solar System"
						style="width: 240px"
					/>
					<v-spacer></v-spacer>
					<v-btn
						class="indigo darken-4 white--text"
						style="text-transform: capitalize; width: 240px"
						@click="$router.push('/motions')"
						:disabled="user.learningLevel != 'Intermediate'"
						>Start Course</v-btn
					>
					<section style="font-size: 11px; margin-top: 10px">
						Learn how our planet rotates and revolves.
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import userAPI from "../../api/userAPI";
	export default {
		data: () => ({
			fetched: false,
			loading: true,
			error: false,
			user: {},
		}),

		async created() {
			try {
				this.loading = true;
				const user = await userAPI.prototype.getSpecificUser();
				console.log(user.data);
				this.user = user.data;
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
	.loading {
		height: 90%;
		margin-top: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
