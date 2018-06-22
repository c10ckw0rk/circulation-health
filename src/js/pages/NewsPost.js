import React from 'react';
import Banner from 'js/components/Banner';
import PropTypes from 'prop-types';
import './NewsPost.scss';
import Container from 'js/components/grid/Container';
import EnquiryForm from 'js/components/EnquiryForm';

export default class NewsPost extends React.Component {
	static defaultProps = {
		description: `
		    <p>
		        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. 
		        Quisque in orci molestie, pellentesque orci sit amet, consectetur quam.
		    </p>
		`,
		content: `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. Quisque in orci molestie, pellentesque orci sit amet, consectetur quam. Quisque efficitur ipsum luctus aliquet blandit. Etiam iaculis luctus nulla, non aliquet tortor luctus in. Morbi sollicitudin hendrerit aliquet. Mauris non mauris in neque pharetra luctus. Nam sit amet varius mauris. Aliquam turpis orci, dictum in cursus sit amet, sodales sit amet metus. Fusce ut felis eget mi facilisis facilisis vitae id risus. Curabitur a mollis lorem. Sed eu nibh leo. Quisque eget justo nec ipsum commodo aliquam. 
            </p>
            <p>
                Etiam ultrices arcu sit amet nisl eleifend, in iaculis massa auctor. Morbi pretium semper volutpat. Donec vel neque sagittis ante dictum mollis. Donec condimentum urna mi, faucibus hendrerit tortor fermentum sed. Maecenas id semper odio. Proin accumsan sollicitudin nisi, ut iaculis lorem hendrerit ac. Praesent sapien lectus, rhoncus id lectus vel, gravida iaculis sem. Proin vitae est sit amet sem rhoncus maximus vitae ut tortor.
            </p>
        `,
		date: '2018,May,17',
		caption: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
		desktopBanner: {
			url: undefined
		},
		mobileBanner: {
			url: undefined
		}
	};

	static propTypes = {
		shortExcerpt: PropTypes.string,
		content: PropTypes.object,
		date: PropTypes.string,
		caption: PropTypes.string
	};

	render() {
		const {
			title,
			description,
			content,
			date,
			caption,
			desktopBanner: { url: dUrl },
			mobileBanner: { url: mUrl },
			formTitle,
			firstNamePlaceholder,
			lastNamePlaceholder,
			emailPlaceholder,
			phonePlaceholder,
			messagePlaceholder,
			buttonText
		} = this.props;
		const parsedDate = date.split(',');

		return (
			<>
				<Banner titleContent={''} overlap xs={mUrl} sm={mUrl} md={dUrl} lg={dUrl} xl={dUrl} />
				<main className={'news-item'}>
					<Container col={false}>
						<div className={'col-xs-12 col-md-4'}>
							<div className={'intro'}>
								<p className={'date'}>
									<span className={'day'}>{parsedDate[2]}</span>{' '}
									<span>
										{parsedDate[1]} {parsedDate[0]}
									</span>
								</p>
								<div className={'intro-content'}>
									<h2 className={'title'}>{title.rendered}</h2>
									<div className={'short-excerpt'} dangerouslySetInnerHTML={{ __html: description }} />
								</div>
							</div>
						</div>
					</Container>
					<Container col={false} className={'description'}>
						<div className={'col-xs-12 col-md-9'} dangerouslySetInnerHTML={{ __html: content.rendered }} />
						<div className={'col-xs-12 col-md-3'}>
							<div className={'caption'} dangerouslySetInnerHTML={{ __html: caption }} />
							<EnquiryForm
								formTitle={formTitle}
								firstNamePlaceholder={firstNamePlaceholder}
								lastNamePlaceholder={lastNamePlaceholder}
								emailPlaceholder={emailPlaceholder}
								phonePlaceholder={phonePlaceholder}
								messagePlaceholder={messagePlaceholder}
								buttonText={buttonText}
							/>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
