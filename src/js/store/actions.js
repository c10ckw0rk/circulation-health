import axios from 'axios/index';

const appUrl = 'http://localhost:8000/?rest_route=/wp/v2';

const api = async endPoint => {
	let response;
	try {
		response = await axios.get(endPoint);
	} catch (e) {
		throw new Error(e);
	}
	return response.data;
};

const actionTemplate = async (endPoint, key) => this.setState({ [key]: await api(endPoint) });

export async function getPages() {
	await actionTemplate(`${appUrl}/pages`, 'pages');
}

export async function getPosts() {
	await actionTemplate(`${appUrl}/posts`, 'posts');
}

export async function getHomes() {
	await actionTemplate(`${appUrl}/home_template`, 'home');
}
