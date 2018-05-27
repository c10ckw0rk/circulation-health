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
			socialTitle
		} = this.props;
		return (
			<>
				<Header />
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
