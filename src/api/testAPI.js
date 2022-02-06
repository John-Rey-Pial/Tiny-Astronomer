import axios from "axios";
const url = "http://localhost:3000/api/tests";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllTests() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const tests = await axios.get(url + "/all");
		return tests;
	}

	async updateTest(testid, updatedTest) {
		const tests = await axios.patch(url + "/" + testid, updatedTest);
		return tests;
	}
}
