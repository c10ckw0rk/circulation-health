import React from 'react';
import PropTypes from 'prop-types';
import Link from 'js/components/Link';
import Container from 'js/components/grid/Container';
import MagnifyingGlass from 'js/components/icon/MagnifyingGlass';
import cn from 'classnames';
import './MobileNav.scss';

export default class MobileNav extends React.Component {
	static defaultProps = {
		navItems: []
	};

	static propTypes = {
		navItems: PropTypes.array
	};

	render() {
		const { searchPlaceholder, navItems } = this.props;
		return (
			<nav className={cn('mobile-nav')}>
				<Container>
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
