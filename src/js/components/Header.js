import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'js/components/svg/Logo';
import Container from 'js/components/grid/Container';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from 'js/components/icon/Hamburger';
import MagnifyingGlass from 'js/components/icon/MagnifyingGlass';
import cn from 'classnames';

import './Header.scss';

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
	top = undefined;

	static getDerivedStateFromProps(nextProps, prevState) {
		const newState = {};

		if (nextProps.navItems !== prevState.navItems) {
			newState.navItems = nextProps.navItems.map(({ title, url }) => ({
				title: title.toUpperCase(),
				link: url.replace('http://localhost:8000', '')
			}));
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
			if (this.top > scrollPos && !this.state.sticky) {
				this.setState({ sticky: true });
			} else if (this.top < scrollPos && this.state.sticky) {
				this.setState({ sticky: false });
			}
		});
	};

	componentDidMount() {
		this.top = getPosition(this.nav.current).top;
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
					<nav className={cn('desktop-header', { sticky: !sticky })}>
						<Container>
							<ul className={'nav'}>
								{navItems.map(({ title, link }, i) => (
									<li key={i}>
										<NavLink exact to={link.replace(location.origin, '')}>
											{title}
										</NavLink>
									</li>
								))}
								<li className={'search'}>
									<MagnifyingGlass className={'icon'} />
									<input type={'text'} placeholder={searchPlaceholder} />
								</li>
							</ul>
						</Container>
					</nav>
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

export default Header;
