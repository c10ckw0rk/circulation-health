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

const actionTemplate = async (endPoint, key, context) =>
	context.setState({ [key]: falseToUndefined(await api(endPoint)) });

export async function getInit() {
	const pages = falseToUndefined(await api(`${appUrl}/pages`));
	const primaryNavigation = formatNavigation(await api(`${sitePath}/wp-json/api/menu`));
	const globalOptions = falseToUndefined(await api(`${sitePath}/wp-json/acf/v3/options/options`));
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

function falseToUndefined(array) {
	if (array.map) {
		return array.map(item => {
			const { acf } = item;
			if (acf) {
				Object.keys(acf).forEach(field => {
					acf[field] = !acf[field] ? undefined : acf[field];
				});
				item.acf = acf;
			}
			return item;
		});
	}
}
