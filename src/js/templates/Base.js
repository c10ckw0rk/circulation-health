import React from 'react';
import DesktopHeader from 'js/components/Header';
import Footer from 'js/components/Footer';
import MobileNav from 'js/components/MobileNav';

export default class Base extends React.Component {
	state = {
		mobileMenu: false
	};

	onClick = val => this.setState({ mobileMenu: val });

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
		return (
			<>
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
