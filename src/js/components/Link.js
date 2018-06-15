import React from 'react';
import { withRouter, Link as ReactLink } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import cn from 'classnames';

class Link extends React.Component {
	state = {
		parentItem: false,
		currentPage: undefined
	};

	static getDerivedStateFromProps(nextProps) {
		const { to, primaryNavigation } = nextProps;

		const currentUrl = location.href;

		let parentItem = undefined;

		if (primaryNavigation) {
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
		}

		if (parentItem && parentItem.url) {
			parentItem = parentItem.url.replace(location.origin, '') === to;
		}

		return {
			parentItem
		};
	}

	onClick = e => {
		const { onClick } = this.props;
		if (onClick) onClick(e);
	};

	render() {
		const { to, children, className } = this.props;
		const { parentItem } = this.state;

		if (!to) return false;

		const active = to === location.pathname || parentItem;

		return (
			<>
				<ReactLink className={cn(className, { active })} to={to} children={children} onClick={this.onClick} />
			</>
		);
	}
}

export default withRouter(withConsumer(Link));
