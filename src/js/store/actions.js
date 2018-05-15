import axios from 'axios';

const sitePath = location.origin;
const appUrl = `${sitePath}/?rest_route=/wp/v2`;

const api = async endPoint => {
	let response;
	try {
		response = await axios.get(endPoint);
	} catch (e) {
		throw new Error(e);
	}
	return response.data;
};

const actionTemplate = async (endPoint, key, context) => context.setState({ [key]: await api(endPoint) });

export async function getPages() {
	await actionTemplate(`${appUrl}/pages`, 'pages', this);
}

export async function getPosts() {
	await actionTemplate(`${appUrl}/posts`, 'posts', this);
}

export async function getPrimaryNavigation() {
	await actionTemplate(`${sitePath}/wp-json/api/menu`, 'primaryNavigation', this);
}
