import React from 'react';
import { withRouter, Link as ReactLink } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import cn from 'classnames';

class Link extends React.Component {
	state = {
		parentItem: false
	};

	static getDerivedStateFromProps(nextProps) {
		const { to, primaryNavigation } = nextProps;
		const currentUrl = location.href;

		console.log('currentUrl -----', currentUrl, '----- currentUrl');
		console.log('link for', to);
		let parentItem = undefined;

		// find parent item
		primaryNavigation.forEach(item => {
			if (item.allChildren) {
				item.allChildren.forEach(child => {
					if (currentUrl === child.url) {
						parentItem = item;
					}
				});
			}
		});

		if (parentItem && parentItem.url) {
			parentItem = parentItem.url.replace(location.origin, '') === to;
		}

		return {
			parentItem
		};
	}

	render() {
		const { to, children, className } = this.props;
		const { parentItem } = this.state;

		if (!to) return false;

		const active = to === location.pathname || parentItem;

		return <ReactLink className={cn(className, { active })} to={to} children={children} />;
	}
}

export default withRouter(withConsumer(Link));
