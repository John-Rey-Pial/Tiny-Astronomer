import axios from "axios";
const url = "https://tiny-astro.herokuapp.com/api/lessons";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllLessons() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const lessons = await axios.get(url + "/all");
		return lessons;
	}

	async updateLesson(lessonName, updatedLesson) {
		const chapter = await axios.patch(url + "/" + lessonName, updatedLesson);
		return chapter;
	}
}
