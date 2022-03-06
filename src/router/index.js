import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";
import Evaluation from "../views/Evaluation.vue";
import Intro from "../views/Pages/Intro.vue";
import Content from "../views/Pages/Content.vue";
import Progress from "../views/Pages/Progress.vue";
import References from "../views/Pages/References.vue";
import Survey from "../views/Pages/Survey.vue";
import Motions from "../views/FirstTopic/Motions.vue";
import Motions0 from "../views/FirstTopic/Motions0.vue";
import Motions1 from "../views/FirstTopic/Motions1.vue";
import Motions2 from "../views/FirstTopic/Motions2.vue";
import Motions3 from "../views/FirstTopic/Motions3.vue";
import QuizIntro from "../views/FirstTopic/QuizIntro.vue";
import Quiz1 from "../../src/components/Topic1/Quiz1/Quiz1.vue";

import Solar from "../views/SecondTopic/Solar.vue";
import Solar0 from "../views/SecondTopic/Solar0.vue";
import Solar1 from "../views/SecondTopic/Solar1.vue";
import Solar2 from "../views/SecondTopic/Solar2.vue";
import Solar3 from "../views/SecondTopic/Solar3.vue";
import Solar4 from "../views/SecondTopic/Solar4.vue";
import Solar5 from "../views/SecondTopic/Solar5.vue";
import Solar6 from "../views/SecondTopic/Solar6.vue";
import Solar7 from "../views/SecondTopic/Solar7.vue";
import Solar8 from "../views/SecondTopic/Solar8.vue";
import Solar9 from "../views/SecondTopic/Solar9.vue";
import Solar10 from "../views/SecondTopic/Solar10.vue";
import Solar11 from "../views/SecondTopic/Solar11.vue";
import Solar12 from "../views/SecondTopic/Solar12.vue";
import Solar13 from "../views/SecondTopic/Solar13.vue";
import Solar14 from "../views/SecondTopic/Solar14.vue";
import QuizIntro2 from "../views/SecondTopic/QuizIntro.vue";
import Quiz2 from "../../src/components/Topic2/Quiz2/Quiz2.vue";

import PreTestIntro from "../../src/components/Pre-test/QuizIntro.vue";
import PreTest from "../../src/components/Pre-test/Quiz1.vue";

import PostTestIntro from "../../src/components/Post-test/QuizIntro.vue";
import PostTest from "../../src/components/Post-test/Quiz1.vue";

import User from "../components/User.vue";
import Review from "../components/ReviewScores/ReviewScore.vue";
Vue.use(VueRouter);

const routes = [
	{
		path: "/login",
		name: "Login",
		component: Login,
	},

	{
		path: "/user",
		name: "User",
		component: User,
	},
	{
		path: "/",
		name: "",
		component: Main,
		redirect: "/pretest-intro",
		children: [
			{
				path: "/pretest-intro",
				name: "PreTest",
				component: PreTestIntro,
			},
			{
				path: "/reviewscore/:testname",
				component: Review,
			},
			{
				path: "/pretest",
				name: "PreTest",
				component: PreTest,
			},
			{
				path: "/posttest-intro",
				name: "PostTest",
				component: PostTestIntro,
			},
			{
				path: "/posttest",
				name: "PostTest",
				component: PostTest,
			},
			{
				path: "/intro",
				name: "Introduction",
				component: Intro,
			},
			{
				path: "/content",
				name: "Content",
				component: Content,
			},
			{
				path: "/progress",
				name: "Progress",
				component: Progress,
			},
			{
				path: "/references",
				name: "References",
				component: References,
			},
			{
				path: "/surveys",
				name: "Surveys",
				component: Survey,
			},
			{
				path: "/evaluation",
				name: "Evaluation",
				component: Evaluation,
			},
			{
				path: "/motions",
				name: "Motions of the Earth",
				component: Motions,
			},
			{
				path: "/motions/0",
				name: "Motions of the Earth",
				component: Motions0,
			},
			{
				path: "/motions/1",
				name: "Motions of the Earth",
				component: Motions1,
			},
			{
				path: "/motions/2",
				name: "Motions of the Earth",
				component: Motions2,
			},
			{
				path: "/motions/3",
				name: "Motions of the Earth",
				component: Motions3,
			},
			{
				path: "/quiz1/intro",
				name: "Quiz: Motions of the Earth",
				component: QuizIntro,
			},
			{
				path: "/quiz1/",
				name: "Quiz: Motions of the Earth",
				component: Quiz1,
			},
			{
				path: "/solar",
				name: "Solar System",
				component: Solar,
			},
			{
				path: "/solar/0",
				name: "Solar System",
				component: Solar0,
			},
			{
				path: "/solar/1",
				name: "Solar System",
				component: Solar1,
			},
			
			{
				path: "/solar/2",
				name: "Solar System",
				component: Solar2,
			},
			{
				path: "/solar/3",
				name: "Solar System",
				component: Solar3,
			},
			{
				path: "/solar/4",
				name: "Solar System",
				component: Solar4,
			},
			{
				path: "/solar/5",
				name: "Solar System",
				component: Solar5,
			},
			{
				path: "/solar/6",
				name: "Solar System",
				component: Solar6,
			},
			{
				path: "/solar/7",
				name: "Solar System",
				component: Solar7,
			},
			{
				path: "/solar/8",
				name: "Solar System",
				component: Solar8,
			},
			{
				path: "/solar/9",
				name: "Solar System",
				component: Solar9,
			},
			{
				path: "/solar/10",
				name: "Solar System",
				component: Solar10,
			},
			{
				path: "/solar/11",
				name: "Solar System",
				component: Solar11,
			},
			{
				path: "/solar/12",
				name: "Solar System",
				component: Solar12,
			},
			{
				path: "/solar/13",
				name: "Solar System",
				component: Solar13,
			},
			{
				path: "/solar/14",
				name: "Solar System",
				component: Solar14,
			},
			{
				path: "/quiz2/intro",
				name: "Quiz: The Solar System",
				component: QuizIntro2,
			},
			{
				path: "/quiz2/",
				name: "Quiz: The Solar System",
				component: Quiz2,
			},
		],
	},
];
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
