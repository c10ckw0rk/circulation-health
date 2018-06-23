import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';
import MobileNav from 'js/components/MobileNav';
import { withConsumer } from 'js/store/Store';
import stripHtmlTags from 'js/util/stripHtmlTags';

const searchPage = {
	title: {
		rendered: 'Search'
	},
	excerpt: {
		rendered: 'Search Page'
	}
};

class Base extends React.Component {
	state = {
		mobileMenu: false,
		page: undefined,
		mobileMode: undefined
	};

	onClick = val => this.setState({ mobileMenu: val });

	changedSize = val => {
		this.setState({ mobileMode: val });
	};

	onLocationChange = () => {
		const { pages } = this.props;
		let page;
		if (location.pathname === '/search/') {
			page = searchPage;
		} else {
			page = pages.find(page => page.link === location.href);
		}
		this.setState({ page, mobileMenu: false });
	};

	componentDidMount() {
		const { history } = this.props;
		history.listen(this.onLocationChange);
		this.onLocationChange();
	}

	render() {
		const { children, primaryNavigation, header, footer } = this.props;
		const { page } = this.state;

		return (
			<>
				{page && (
					<Helmet>
						<title>{page.title.rendered}</title>
						<meta name="description" content={stripHtmlTags(page.excerpt.rendered)} />
					</Helmet>
				)}
				{this.state.mobileMenu &&
					this.state.mobileMode && <MobileNav navItems={primaryNavigation} closeMenu={this.onClick} />}
				<Header
					changedSize={this.changedSize}
					title={CONFIG.SITE_NAME.toUpperCase().split(' ')}
					showMobileMenu={this.onClick}
					navItems={primaryNavigation}
					{...header}
				/>
				<div className={'content-wrapper'}>{children}</div>
				<Footer {...footer} />
			</>
		);
	}
}

export default withRouter(withConsumer(Base));
