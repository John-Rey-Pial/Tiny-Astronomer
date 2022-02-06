<template>
	<div>
		<div>
			<Item1 v-if="counter == 1" @notify="evaluate" :score="score" />
			<Item2 v-if="counter == 2" @notify="evaluate" :score="score" />
			<Item3 v-if="counter == 3" @notify="evaluate" :score="score" />
			<Item4 v-if="counter == 4" @notify="evaluate" :score="score" />
			<Item5 v-if="counter == 5" @notify="evaluate" :score="score" />
			<Item6 v-if="counter == 6" @notify="evaluate" :score="score" />
			<Item7 v-if="counter == 7" @notify="evaluate" :score="score" />
			<Item8 v-if="counter == 8" @notify="evaluate" :score="score" />
			<Item9 v-if="counter == 9" @notify="evaluate" :score="score" />
			<Item10 v-if="counter == 10" @notify="evaluate" :score="score" />
			<Item11 v-if="counter == 11" @notify="evaluate" :score="score" />
			<Item12 v-if="counter == 12" @notify="evaluate" :score="score" />
			<Item13 v-if="counter == 13" @notify="evaluate" :score="score" />
			<Item14 v-if="counter == 14" @notify="evaluate" :score="score" />
			<Item15 v-if="counter == 15" @notify="evaluate" :score="score" />
			<Item16 v-if="counter == 16" @notify="evaluate" :score="score" />
			<Item17 v-if="counter == 17" @notify="evaluate" :score="score" />
			<Item18 v-if="counter == 18" @notify="evaluate" :score="score" />
			<Item19 v-if="counter == 19" @notify="evaluate" :score="score" />
			<Item20 v-if="counter == 20" @notify="evaluate" :score="score" />
			<QuizOutro v-if="counter == 21" @notify="evaluate" :score="score" />
			<v-spacer class="mt-2"></v-spacer>
		</div>
	</div>
</template>
<script>
	import Item1 from "./Quiz1-1.vue";
	import Item2 from "./Quiz1-2.vue";
	import Item3 from "./Quiz1-3.vue";
	import Item4 from "./Quiz1-4.vue";
	import Item5 from "./Quiz1-5.vue";
	import Item6 from "./Quiz1-6.vue";
	import Item7 from "./Quiz1-7.vue";
	import Item8 from "./Quiz1-8.vue";
	import Item9 from "./Quiz1-9.vue";
	import Item10 from "./Quiz1-10.vue";
	import Item11 from "./Quiz1-11.vue";
	import Item12 from "./Quiz1-12.vue";
	import Item13 from "./Quiz1-13.vue";
	import Item14 from "./Quiz1-14.vue";
	import Item15 from "./Quiz1-15.vue";
	import Item16 from "./Quiz1-16.vue";
	import Item17 from "./Quiz1-17.vue";
	import Item18 from "./Quiz1-18.vue";
	import Item19 from "./Quiz1-19.vue";
	import Item20 from "./Quiz1-20.vue";
	import QuizOutro from "./QuizOutro.vue";
	export default {
		components: {
			Item1: Item1,
			Item2: Item2,
			Item3: Item3,
			Item4: Item4,
			Item5: Item5,
			Item6: Item6,
			Item7: Item7,
			Item8: Item8,
			Item9: Item9,
			Item10: Item10,
			Item11: Item11,
			Item12: Item12,
			Item13: Item13,
			Item14: Item14,
			Item15: Item15,
			Item16: Item16,
			Item17: Item17,
			Item18: Item18,
			Item19: Item19,
			Item20: Item20,
			QuizOutro: QuizOutro,
		},
		data() {
			return {
				score: 0,
				counter: 1,
			};
		},
		methods: {
			evaluate(value) {
				this.counter++;
				if (value == "correct") {
					this.score += 1;
				}
			},
		},
	};
</script>
<style scoped></style>
