import React from 'react';
import PropTypes from 'prop-types';
import Link from 'js/components/Link';
import Container from 'js/components/grid/Container';
import MagnifyingGlass from 'js/components/icon/MagnifyingGlass';
import './MobileNav.scss';
import { Close } from 'js/components/icon/Close';

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
					<div className={'search'}>
						<MagnifyingGlass className={'icon'} />
						<input type={'text'} placeholder={searchPlaceholder} />
					</div>
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
							<Link to={url.replace(location.origin, '') || '/'}>{title.toUpperCase()}</Link>
							{children && this.renderMenu(children)}
						</li>
					);
				})}
			</ul>
		);
	}
}
