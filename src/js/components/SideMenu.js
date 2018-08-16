import React from 'react';
import Link from 'js/components/Link';
import { ChevronDown } from 'js/components/icon/ChevronDown';
import { withConsumer } from 'js/store/Store';
import cn from 'classnames';

import './SideMenu.scss';

const sizes = {
	xs: {
		left: 12,
		right: 12
	},
	sm: {
		left: 3,
		right: 9
	},
	md: {
		left: 3,
		right: 9
	},
	lg: {
		left: 3,
		right: 9
	},
	xl: {
		left: 3,
		right: 9
	}
};

class SideMenu extends React.Component {
	state = {
		open: false,
		menu: {}
	};

	hasSection() {
		const { primaryNavigation } = this.props;
		let parentItem = {};

		primaryNavigation.forEach(navItem => {
			if (navItem.url === location.href) {
				parentItem = navItem;
			}

			if (navItem.allChildren) {
				navItem.allChildren.forEach(item => {
					if (item.url === location.href) {
						parentItem = navItem;
					}
				});
			}
		});

		if (parentItem.allChildren) {
			this.setState({ menu: parentItem });
		}
	}

	componentDidMount() {
		this.hasSection();
	}

	onClick = e => {
		e.preventDefault();
		this.setState(({ open }) => ({ open: !open }));
	};

	render() {
		const leftClasses = Object.keys(sizes).map(size => `col-${size}-${sizes[size].left}`);
		const { menu, open } = this.state;

		if (Object.keys(menu).length === 0) return false;

		return (
			<div className={cn(leftClasses, 'navigation')}>
				<nav className={'side-menu'}>
					<button className={'title-wrap'} onClick={this.onClick}>
						{menu.url !== 'http://undefined' && (
							<Link noParentMatch to={menu.url.replace(location.origin, '')}>
								<h2 className={'title'}>{menu.title}</h2>
							</Link>
						)}
						{menu.url === 'http://undefined' && <h2 className={'title title--no-link'}>{menu.title}</h2>}
						<div className={'icon-wrap'}>
							<ChevronDown className={'down-icon'} />
						</div>
					</button>
					<ul className={cn('nav-wrapper', { open })}>{this.renderMenu(menu.children)}</ul>
				</nav>
			</div>
		);
	}

	renderMenu(navItems) {
		return navItems.map(({ url, title, ID: id, children }) => {
			return (
				<li key={id}>
					<Link to={url.replace(location.origin, '') || '/'}>
						<span>{title}</span>
					</Link>
					{children && <ul> {this.renderMenu(children)} </ul>}
				</li>
			);
		});
	}
}

export default withConsumer(SideMenu);
