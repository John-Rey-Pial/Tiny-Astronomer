import axios from "axios";
const url = "http://localhost:3000/api/lessons";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllLessons() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const lessons = await axios.get(url + "/all");
		return lessons;
	}

	async updateChapter(lessonid, chapnum, updatedChapter) {
		const chapter = await axios.patch(
			url + "/" + lessonid + "/" + chapnum,
			updatedChapter
		);
		return chapter;
	}

	async updateLesson(lessonid, updatedLesson) {
		const chapter = await axios.patch(url + "/" + lessonid, updatedLesson);
		return chapter;
	}
}
