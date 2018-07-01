import React from 'react';
import Banner from 'js/components/Banner';
import Accordion from 'js/components/Accordion';
import PropTypes from 'prop-types';

import './Faq.scss';

export default class Faq extends React.Component {
	static defaultProps = {
		faqs: []
	};

	static propTypes = {
		faqs: PropTypes.array
	};

	state = {
		page: {
			title: {
				rendered: ''
			}
		}
	};

	render() {
		const { title, faqs, mobileBanner = {}, desktopBanner = {} } = this.props;
		return (
			<>
				<Banner
					xs={mobileBanner.url}
					sm={mobileBanner.url}
					md={desktopBanner.url}
					lg={desktopBanner.url}
					xl={desktopBanner.url}
					short
					titleContent={title.rendered}
				/>
				<main className={'faq'}>{faqs.map((faq, i) => <Accordion open={i === 0} {...faq} key={i} />)}</main>
			</>
		);
	}
}
