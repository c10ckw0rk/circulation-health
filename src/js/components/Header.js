import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'js/components/svg/Logo';
import Container from 'js/components/grid/Container';
import { Link } from 'react-router-dom';
import Hamburger from 'js/components/icon/Hamburger';
import DesktopHeader from 'js/components/DesktopHeader';
import cn from 'classnames';

import './Header.scss';

class Header extends React.PureComponent {
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
			newState.navItems = nextProps.navItems;
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
							{enquiryLink && (
								<Link to={enquiryLink} className={'button'}>
									{enquiryTitle}
								</Link>
							)}
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

export default Header;
