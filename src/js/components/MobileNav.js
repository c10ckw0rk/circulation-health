import React from 'react';
import PropTypes from 'prop-types';
import Link from 'js/components/Link';
import { Close } from 'js/components/icon/Close';
import Container from 'js/components/grid/Container';
import SearchInput from 'js/components/SearchInput';

import './MobileNav.scss';

export default class MobileNav extends React.Component {
	static defaultProps = {
		navItems: [],
		searchPlaceholder: 'Search',
		closeMenu: () => {}
	};

	static propTypes = {
		navItems: PropTypes.array,
		searchPlaceholder: PropTypes.string,
		closeMenu: PropTypes.func
	};

	closeMenu = () => this.props.closeMenu(false);

	render() {
		const { searchPlaceholder, navItems } = this.props;
		return (
			<nav className={'mobile-nav'}>
				<Container>
					<div className={'close-wrapper'}>
						<button onClick={this.closeMenu} className={'button'}>
							<Close className={'close-icon'} />
						</button>
					</div>
					<SearchInput searchPlaceholder={searchPlaceholder} />
					{this.renderMenu(navItems)}
				</Container>
			</nav>
		);
	}

	renderMenu(navItems) {
		return (
			<ul>
				{navItems.map(({ url, title, ID: id, children }) => {
					return (
						<li key={id}>
							<Link to={url.replace(location.origin, '') || '/'} onClick={this.closeMenu}>
								{title.toUpperCase()}
							</Link>
							{children && this.renderMenu(children)}
						</li>
					);
				})}
			</ul>
		);
	}
}
