import React from 'react';
import PropTypes from 'prop-types';
import Subscribe from 'js/components/Subscribe';
import Social from 'js/components/Social';
import ContactUs from 'js/components/ContactUs';
import ThirdsContainer from 'js/components/grid/ThirdsContainer';
import './Footer.scss';

export default class Footer extends React.Component {
	static propTypes = {
		contactDetails: PropTypes.array,
		subscribeTitle: PropTypes.string,
		subscribePlaceholder: PropTypes.string,
		subscribeButton: PropTypes.string,
		socialLinks: PropTypes.array,
		socialTitle: PropTypes.string,
		contactTitle: PropTypes.string
	};

	render() {
		const {
			contactDetails,
			subscribeTitle,
			subscribePlaceholder,
			subscribeButton,
			socialLinks,
			socialTitle,
			contactTitle
		} = this.props;

		console.log(this.props);

		return (
			<footer className={'footer'}>
				<ThirdsContainer colClass={'footer-cols'}>
					<Subscribe buttonText={subscribeButton} subscribePlaceholder={subscribePlaceholder} title={subscribeTitle} />
					<Social title={socialTitle} icons={socialLinks} />
					<ContactUs title={contactTitle} types={contactDetails || undefined} />
				</ThirdsContainer>
			</footer>
		);
	}
}
