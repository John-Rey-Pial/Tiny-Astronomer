<template>
	<div>
		<div style="display: flex">
			<section style="margin-top: 20px">
				<img
					src="../../../src/assets/materials/seasons.jpg"
					alt="Seasons"
					style="width: 300px; margin-left: 100px"
				/>
			</section>
			<section
				style="
					margin-right: 70px;
					margin-top: 5px;
					margin-left: 100px;
					text-align: justify;
				"
			>
				<span style="font-size: 30px">
					<strong>Seasons</strong>
				</span>
				<v-spacer></v-spacer>
				<span>
					It is winter where the Earth tilts away from the Sun. The days are
					short, and the Sun is low in the sky, even at noon. It is summer where
					the Earth tilts toward the Sun. The days are long, and the Sun is high
					in the sky at noon.
				</span>
				<v-spacer></v-spacer>
				<span>
					In December, it is summer in the South Hemisphere and winter in the
					North Hemisphere. In June, it is summer in the North Hemisphere and
					winter in the South Hemisphere. Days are shortest in the winter and
					longest in the summer.
				</span>
				<v-spacer class="mb-10"></v-spacer>
				<span style="font-size: 14px; margin-left: 100px; color: gray"
					>(Click 'Next' if you are done reading.)</span
				>
				<v-btn
					class="indigo darken-4 white--text"
					style="
						margin-top: 5px;
						margin-left: 300px;
						text-transform: capitalize;
						width: 100px;
					"
					@click="$router.push('/quiz1/intro')"
					>Next</v-btn
				>
			</section>
		</div>
	</div>
</template>
