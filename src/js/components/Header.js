import React from 'react';
import PropTypes from 'prop-types';
import Logo from 'js/components/svg/Logo';
import { Link, NavLink } from 'react-router-dom';
import { Hamburger } from 'js/components/icon/Hamburger';
import './Header.scss';
import Container from 'js/components/grid/Container';
import { MagnifyingGlass } from 'js/components/icon/MagnifyingGlass';

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
		navItems: []
	};

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

	render() {
		const { title, phone, phoneTitle, enquiryLink, enquiryTitle, searchPlaceholder } = this.props;
		const { navItems } = this.state;

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
				<div className={'desktop-header-wrapper'}>
					<nav className={'desktop-header'}>
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

export default Header;
