import React from 'react';
import PropTypes from 'prop-types';
import Subscribe from 'js/components/Subscribe';
import Social from 'js/components/Social';
import ContactUs from 'js/components/ContactUs';
import ThirdsContainer from 'js/components/grid/ThirdsContainer';
import './Footer.scss';

export default class Footer extends React.Component {
	static defaultProps = {};

	static propTypes = {};

	render() {
		const {} = this.props;
		return (
			<footer className={'footer'}>
				<ThirdsContainer colClass={'footer-cols'}>
					<Subscribe />
					<Social />
					<ContactUs />
				</ThirdsContainer>
			</footer>
		);
	}
}
