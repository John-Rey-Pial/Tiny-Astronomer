<template>
	<div>
		<div style="display: flex">
			<div style="width: 100%">
				<section class="heading">
					<strong>Question 17 out of 20</strong>
					<strong class="score">Score: {{ this.score }}</strong>
				</section>
				<v-spacer style="margin-bottom: 20px"></v-spacer>
				<div class="question">
						These are planets made of layers of gas and liquid around a small, rocky core, much bigger that the rocky planets.  
				</div>

				<nav>
					<ul>
						<li
							@click="chooseAnswer(1)"
							:class="
								submitted ? (chosen1 ? 'error' : '') : chosen1 ? 'clicked' : ''
							"
						>
							Plasma Dwarves
						</li>
						<li
							@click="chooseAnswer(2)"
							:class="
								submitted
									? chosen2
										? 'success'
										: 'success'
									: chosen2
									? 'clicked'
									: ''
							"
						>
							Gas Giants
						</li>
						<li
							@click="chooseAnswer(3)"
							:class="
								submitted ? (chosen3 ? 'error' : '') : chosen3 ? 'clicked' : ''
							"
						>
							Rocky Planets
						</li>
					</ul>
				</nav>
				<div style="margin-left: 530px" v-if="!submitted">
					<v-btn style="text-transform: capitalize" @click="clear"
						>Clear Choice</v-btn
					>
					<v-btn
						class="indigo darken-4 white--text ml-3"
						style="text-transform: capitalize"
						@click="submitAnswer"
						>Confirm Answer</v-btn
					>
				</div>

				<div v-if="submitted" style="display: flex; padding: 0px 220px">
					<v-spacer></v-spacer>
					<v-btn @click="next">Next</v-btn>
				</div>
			</div>
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["score"],
		data() {
			return {
				chosen1: false,
				chosen2: false,
				chosen3: false,
				correct: false,
				submitted: false,
			};
		},
		methods: {
			next() {
				if (this.correct) {
					this.$emit("notify", "correct");
				} else {
					this.$emit("notify", "wrong");
				}
			},
			chooseAnswer(chosen) {
				if (!this.submitted) {
					this.chosen1 = false;
					this.chosen2 = false;
					this.chosen3 = false;
					if (chosen == 1) {
						this.chosen1 = true;
					}

					if (chosen == 2) {
						this.chosen2 = true;
					}

					if (chosen == 3) {
						this.chosen3 = true;
					}
				}
			},
			clear() {
				this.chosen1 = false;
				this.chosen2 = false;
				this.chosen3 = false;
			},
			submitAnswer() {
				if (this.chosen1 || this.chosen2 || this.chosen3) {
					this.submitted = true;
					if (this.chosen2) {
						this.correct = true;
					} else {
						this.correct = false;
					}
				}
			},
		},
	};
</script>
<style scoped>
	.heading {
		font-size: 18px;
		margin-top: 30px;
		color: grey;
		margin-left: 210px;
		display: flex;
	}

	.score {
		margin-left: 370px;
	}
	.question {
		font-size: 23px;
		margin-bottom: 40px;
		margin-left: 210px;
	}
	nav ul {
		list-style-type: none;
	}
	li {
		font-size: 18px;
		padding: 10px;
		border: rgb(211, 204, 204) 1px solid;
		background: whitesmoke;
		margin-bottom: 10px;
		border-radius: 10px;
		margin-left: 190px;
		margin-right: 220px;
		padding-left: 30px;
		cursor: pointer;
	}

	.clicked {
		background-color: rgb(219, 194, 219);
		color: white;
	}

	li:hover {
		background-color: rgb(219, 194, 219);
		color: white;
	}
</style>
