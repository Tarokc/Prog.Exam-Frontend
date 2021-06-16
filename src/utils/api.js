import axios from "axios";

export const API_MAIN = axios.create({
	/*baseURL: "http://localhost:8080/jpareststarter/api/",*/
	baseURL: "https://tarokc.dk/prog-exam/api/",
	headers: {
		"Content-type": "application/json",
		Accept: "application/json",
	},
});
