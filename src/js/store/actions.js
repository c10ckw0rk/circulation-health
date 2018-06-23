import axios from 'axios';

const sitePath = location.origin;
const appUrl = `${sitePath}/?per_page=100&rest_route=/wp/v2`;

const api = async endPoint => {
	let response;
	try {
		response = await axios.get(endPoint);
	} catch (e) {
		throw new Error(e);
	}
	return response.data;
};

const actionTemplate = async (endPoint, key, context) =>
	context.setState({ [key]: falseToUndefined(await api(endPoint)) });

export async function getInit() {
	const primaryNavigation = formatNavigation(await api(`${sitePath}/wp-json/api/menu`));
	const pages = falseToUndefined(await api(`${appUrl}/pages`));
	const options = await api(`${sitePath}/wp-json/acf/v3/options/options`);
	const globalOptions = falseToUndefined([options.acf])[0];

	// const posts = await actionTemplate(`${appUrl}/posts`, 'posts', this);
	this.setState({ pages, primaryNavigation, globalOptions });
}

// util

let allChildren = [];

function getAllChildren(array) {
	array.forEach(item => {
		allChildren.push({ id: item.id, url: item.url });
		if (item.children) {
			getAllChildren(item.children);
		}
	});
}

function storeItem(item, array) {
	array.forEach(insideItem => {
		if (Number(item.menu_item_parent) === insideItem.ID) {
			if (!insideItem.children) insideItem.children = [];
			insideItem.children.push(item);
		} else if (insideItem.children) {
			storeItem(item, insideItem.children);
		}
	});

	array.forEach(item => {
		if (item.children) {
			getAllChildren(item.children);
			item.allChildren = allChildren;
			allChildren = [];
		}
	});
}

function formatNavigation(navItems) {
	const SubMenuItem = [];
	if (!navItems) return [];
	navItems.forEach((item, i) => {
		if (item.menu_item_parent !== '0') {
			SubMenuItem.push(item);
			storeItem(item, navItems);
			delete navItems[i];
		}
	});

	navItems = navItems.filter(item => !!item);

	return navItems;
}

function falseToUndefined(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null) falseToUndefined(obj[key]);
		else {
			obj[key] = !obj[key] ? undefined : obj[key];
		}
	}

	return obj;
}
