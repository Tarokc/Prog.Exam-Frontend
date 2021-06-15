import axios from "axios";

export const API_MAIN = axios.create({
	baseURL: "http://localhost:8080/jpareststarter/api/",
	/*baseURL: "https://3sem.dyrhoi.com/startcode-v2/api/",*/
	headers: {
		"Content-type": "application/json",
		Accept: "application/json",
	},
});
