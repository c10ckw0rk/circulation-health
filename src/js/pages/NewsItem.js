import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import Footer from 'js/components/Footer';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NewsItem.scss';
import Container from 'js/components/grid/Container';
import ContactUsForm from 'js/components/ContactUsForm';

export default class NewsItem extends React.Component {
	static defaultProps = {
		shortExcerpt: `
		    <p>
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. 
		        Quisque in orci molestie, pellentesque orci sit amet, consectetur quam.
		    </p>
		`,
		description: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. Quisque in orci molestie, pellentesque orci sit amet, consectetur quam. Quisque efficitur ipsum luctus aliquet blandit. Etiam iaculis luctus nulla, non aliquet tortor luctus in. Morbi sollicitudin hendrerit aliquet. Mauris non mauris in neque pharetra luctus. Nam sit amet varius mauris. Aliquam turpis orci, dictum in cursus sit amet, sodales sit amet metus. Fusce ut felis eget mi facilisis facilisis vitae id risus. Curabitur a mollis lorem. Sed eu nibh leo. Quisque eget justo nec ipsum commodo aliquam. 
            </p>
            <p>
                Etiam ultrices arcu sit amet nisl eleifend, in iaculis massa auctor. Morbi pretium semper volutpat. Donec vel neque sagittis ante dictum mollis. Donec condimentum urna mi, faucibus hendrerit tortor fermentum sed. Maecenas id semper odio. Proin accumsan sollicitudin nisi, ut iaculis lorem hendrerit ac. Praesent sapien lectus, rhoncus id lectus vel, gravida iaculis sem. Proin vitae est sit amet sem rhoncus maximus vitae ut tortor.
            </p>
            <p>
            
            </p>
        `,
		itemDate: {
			day: '05',
			month: 'APRIL',
			year: '2018'
		},
		caption: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
	};

	static propTypes = {
		shortExcerpt: PropTypes.string,
		description: PropTypes.string
	};

	render() {
		const { title, shortExcerpt, description, itemDate: { day, month, year }, caption } = this.props;

		return (
			<>
				<Header />
				<Banner overlap />
				<main className={'news-item'}>
					<Container col={false}>
						<div className={'col-xs-12 col-md-4'}>
							<div className={'intro'}>
								<p className={'date'}>
									<span className={'day'}>{day}</span>{' '}
									<span>
										{month} {year}
									</span>
								</p>
								<div className={'intro-content'}>
									<h2 className={'title'}>{title.rendered}</h2>
									<div className={'short-excerpt'} dangerouslySetInnerHTML={{ __html: shortExcerpt }} />
								</div>
							</div>
						</div>
					</Container>
					<Container col={false} className={'description'}>
						<div className={'col-xs-12 col-md-9'} dangerouslySetInnerHTML={{ __html: description }} />
						<div className={'col-xs-12 col-md-3'}>
							<div className={'caption'} dangerouslySetInnerHTML={{ __html: caption }} />
							<ContactUsForm />
						</div>
					</Container>
				</main>
				<Footer />
			</>
		);
	}
}
