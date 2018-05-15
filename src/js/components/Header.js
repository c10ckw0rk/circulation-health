import React from 'react';
import { withConsumer } from 'js/store/Store';
import Logo from 'js/components/svg/Logo';
import { Link, NavLink } from 'react-router-dom';
import { Hamburger } from 'js/components/icon/Hamburger';
import './Header.scss';
import Container from 'js/components/grid/Container';
import { MagnifyingGlass } from 'js/components/icon/MagnifyingGlass';

class Header extends React.Component {
	state = {
		title: ['CIRCULATION', 'HEALTH'],
		phoneTitle: 'CONSULTATION',
		phone: '(02) 42 268 930',
		enquiryButton: 'Make an enquiry',
		enquiryLink: '/',
		navItems: [
			{
				title: 'HOME',
				link: '/'
			},
			{
				title: 'SAMPLE PAGE',
				link: '/sample-page'
			},
			{
				title: 'FAQS',
				link: '/faqs'
			}
		],
		searchPlaceholder: 'SEARCH'
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		const newState = {};

		if (nextProps.primaryNavigation !== prevState.primaryNavigation) {
			newState.navItems = nextProps.primaryNavigation.map(({ title, url }) => ({
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
		const { title, phone, phoneTitle, enquiryButton, enquiryLink, navItems, searchPlaceholder } = this.state;

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
								{enquiryButton}
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

export default withConsumer()(Header);
