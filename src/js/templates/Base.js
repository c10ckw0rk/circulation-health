import React from 'react';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

export default class Base extends React.Component {
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
				{
					<Header
						title={CONFIG.SITE_NAME.toUpperCase().split(' ')}
						phoneTitle={contactTitle}
						phone={headerPhoneNumber}
						enquiryTitle={enquiryTitle}
						enquiryLink={enquiryLink}
						navItems={primaryNavigation}
						searchPlaceholder={searchPlaceholder}
					/>
				}
				{children}
				{
					<Footer
						contactDetails={contactDetails}
						socialLinks={socialLinks}
						subscribeButton={subscribeButton}
						subscribePlaceholder={subscribePlaceholder}
						subscribeTitle={subscribeTitle}
						contactTitle={contactTitle}
						socialTitle={socialTitle}
					/>
				}
			</>
		);
	}
}
