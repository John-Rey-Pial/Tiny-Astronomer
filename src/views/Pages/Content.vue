<template>
	<div>
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
					>Start Course</v-btn
				>
				<section style="font-size: 11px; margin-top: 10px">
					Learn how our planet rotates and revolves.
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
	};
</script>

<style scoped></style>
