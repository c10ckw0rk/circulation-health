import React from 'react';
import Banner from 'js/components/Banner';
import './Faq.scss';
import Accordion from 'js/components/Accordion';
import PropTypes from 'prop-types';

export default class Faq extends React.Component {
	static defaultProps = {
		faqs: [
			{
				title: 'Frequently Asked Question',
				content: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat 
            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus
             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex 
             finibus.
            </p>
            <p>
            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget
            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia 
            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat
            </p>`
			},
			{
				title: 'Frequently Asked Question 2',
				content: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat 
            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus
             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex 
             finibus.
            </p>
            <p>
            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget
            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia 
            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat
            </p>`
			},
			{
				title: 'Frequently Asked Question 3',
				content: `<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat 
            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus
             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex 
             finibus.
            </p>
            <p>
            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget
            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia 
            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat
            </p>`
			}
		]
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
