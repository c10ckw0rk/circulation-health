import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';
import Link from 'js/components/Link';
import cn from 'classnames';
import SearchInput from 'js/components/SearchInput';

export default class DesktopHeader extends React.Component {
	static defaultProps = {
		navItems: [],
		searchPlaceholder: '',
		sticky: false,
		changedSize: () => {}
	};

	static propTypes = {
		navItems: PropTypes.array,
		searchPlaceholder: PropTypes.string,
		sticky: PropTypes.bool,
		changedSize: PropTypes.func
	};

	timeout;
	width;
	isBigger = false;

	onRef = ref => {
		if (!this.props.sticky) return;
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			if (!ref) return;
			let width = 0;
			[...ref.parentNode.children].forEach(item => {
				width += item.offsetWidth;
			});
			this.width = width + 32 + 236;
			this.checkWidth();
		}, 10);
	};

	checkWidth = () => {
		requestAnimationFrame(() => {
			if (this.width < window.innerWidth && this.isBigger) {
				this.isBigger = false;
				this.props.changedSize(this.isBigger);
			} else if (this.width > window.innerWidth && !this.isBigger) {
				this.isBigger = true;
				this.props.changedSize(this.isBigger);
			}
		});
	};

	componentDidMount() {
		window.addEventListener('resize', this.checkWidth);
	}

	render() {
		const { searchPlaceholder, navItems } = this.props;

		return (
			<nav className={cn('desktop-header')}>
				<Container>
					<div className={'nav'}>{this.renderMenu(navItems)}</div>
					<SearchInput searchPlaceholder={searchPlaceholder} />
				</Container>
			</nav>
		);
	}

	renderMenu(navItems) {
		return (
			<ul>
				{navItems.map(({ url, title, ID: id, children }) => {
					return (
						<li ref={this.onRef} key={id}>
							<Link to={url.replace(location.origin, '') || '/'}>{title.toUpperCase()}</Link>
							{children && this.renderMenu(children)}
						</li>
					);
				})}
			</ul>
		);
	}
}
