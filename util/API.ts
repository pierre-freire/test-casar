import axios from "axios";
const baseURL = "https://api.github.com";

/*const gitToken =
	"seu token aqui";
axios.defaults.headers.common["Authorization"] = `Bearer ${gitToken}`;*/

export async function listUsers() {
	const response = await axios.get(`${baseURL}/users`);
	return response.data;
}

export async function searchUser(user: string) {
	const response = await axios.get(`${baseURL}/users/${user}`);
	return response.data;
}

export async function getUserRepos(user: string) {
	const response = await axios.get(`${baseURL}/users/${user}/repos`);
	return response.data;
}

export async function getRepoInfo(user: string, repo: string) {
	const response = await axios.get(`${baseURL}/repos/${user}/${repo}`);
	return response.data;
}