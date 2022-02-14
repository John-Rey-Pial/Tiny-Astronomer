import axios from "axios";
const url = "https://tiny-astro.herokuapp.com/api/tests";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

export default class API {
	async getAllTests() {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const tests = await axios.get(url + "/all");
		return tests;
	}

	async getSpecificTest(name) {
		axios.defaults.headers.common["auth-token"] =
			"Bearer " + localStorage.getItem("token");
		const tests = await axios.get(url + "/getSpecific/" + name);
		return tests;
	}

	async updateTest(updatedTest, name) {
		const tests = await axios.patch(url + "/" + name, updatedTest);
		return tests;
	}
}
