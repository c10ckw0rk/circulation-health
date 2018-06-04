import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'js/components/svg/Logo';
import Container from 'js/components/grid/Container';
import { Link } from 'react-router-dom';
import Hamburger from 'js/components/icon/Hamburger';
import cn from 'classnames';

import './Header.scss';
import DesktopHeader from 'js/components/DesktopHeader';

class Header extends React.Component {
	static propTypes = {
		title: PropTypes.array,
		phoneTitle: PropTypes.string,
		phone: PropTypes.string,
		enquiryTitle: PropTypes.string,
		enquiryLink: PropTypes.string,
		navItems: PropTypes.array,
		searchPlaceholder: PropTypes.string
	};

	state = {
		navItems: [],
		sticky: true
	};

	nav = React.createRef();
	bottom = undefined;

	static getDerivedStateFromProps(nextProps, prevState) {
		const newState = {};

		if (nextProps.navItems !== prevState.navItems && typeof nextProps.navItems === 'object') {
			newState.navItems = format(nextProps.navItems);
			console.log(newState.navItems);
		}

		if (nextProps.home && nextProps.home.length > 0) {
			newState.title = nextProps.home[0].title.rendered.split(' ');
		}

		if (!Object.keys(newState).length) return null;

		return newState;
	}

	scrollEvent = () => {
		window.requestAnimationFrame(() => {
			const scrollPos = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
			if (this.bottom > scrollPos && !this.state.sticky) {
				this.setState({ sticky: true });
			} else if (this.bottom < scrollPos && this.state.sticky) {
				this.setState({ sticky: false });
			}
		});
	};

	componentDidMount() {
		this.bottom = getPosition(this.nav.current).top + this.nav.current.offsetHeight;
		addEventListener('scroll', this.scrollEvent);
	}

	componentWillUnmount() {
		removeEventListener('scroll', this.scrollEvent);
	}

	render() {
		const { title, phone, phoneTitle, enquiryLink, enquiryTitle, searchPlaceholder } = this.props;
		const { navItems, sticky } = this.state;

		return (
			<header className={'header'}>
				<div className={cn('sticky-header', { sticky: !sticky })}>
					<DesktopHeader navItems={navItems} searchPlaceholder={searchPlaceholder} />
				</div>
				<Container>
					<div className={'inner-header'}>
						<h1 className={'title'}>
							<Logo className={'logo'} />
							<div className={'text-wrapper'}>
								<span className={'title-section-1 h4'}>{title[0]}</span>
								<span className={'title-section-2'}>{title[1]}</span>
							</div>
						</h1>
						<button className={'menu'}>
							<Hamburger />
						</button>
						<div className={'enquiry'}>
							<p>
								{phoneTitle} <br /> <a href={`tel:${phone}`}>{phone}</a>
							</p>
						</div>
						<div className={'make-enquiry'}>
							<Link to={enquiryLink} className={'button'}>
								{enquiryTitle}
							</Link>
						</div>
					</div>
				</Container>
				<div className={'desktop-header-wrapper'} ref={this.nav}>
					<DesktopHeader navItems={navItems} searchPlaceholder={searchPlaceholder} />
				</div>
			</header>
		);
	}
}

//* Util *//

function getPosition(element) {
	let xPosition = 0;
	let yPosition = 0;

	while (element) {
		xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
		yPosition += element.offsetTop - element.scrollTop + element.clientTop;
		element = element.offsetParent;
	}

	return { left: xPosition, top: yPosition };
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
}

function format(navItems) {
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

export default Header;
