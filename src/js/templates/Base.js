import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DesktopHeader from 'js/components/Header';
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
		page: undefined
	};

	onClick = val => this.setState({ mobileMenu: val });

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
		const {
			children,
			contactDetails,
			socialLinks,
			subscribeButton,
			subscribePlaceholder,
			subscribeTitle,
			contactTitle,
			socialTitle,
			primaryNavigation,
			headerPhoneNumber,
			searchPlaceholder,
			enquiryTitle,
			enquiryLink
		} = this.props;
		const { page } = this.state;

		return (
			<>
				{page && (
					<Helmet>
						<title>{page.title.rendered}</title>
						<meta name="description" content={stripHtmlTags(page.excerpt.rendered)} />
					</Helmet>
				)}
				{this.state.mobileMenu && <MobileNav navItems={primaryNavigation} closeMenu={this.onClick} />}
				<DesktopHeader
					title={CONFIG.SITE_NAME.toUpperCase().split(' ')}
					phoneTitle={contactTitle}
					phone={headerPhoneNumber}
					enquiryTitle={enquiryTitle}
					enquiryLink={enquiryLink}
					navItems={primaryNavigation}
					searchPlaceholder={searchPlaceholder}
					showMobileMenu={this.onClick}
				/>
				{children}
				<Footer
					contactDetails={contactDetails}
					socialLinks={socialLinks}
					subscribeButton={subscribeButton}
					subscribePlaceholder={subscribePlaceholder}
					subscribeTitle={subscribeTitle}
					contactTitle={contactTitle}
					socialTitle={socialTitle}
				/>
			</>
		);
	}
}

export default withRouter(withConsumer(Base));
