import React from 'react';
import Header from 'js/components/Header';
import Banner from 'js/components/Banner';
import Container from 'js/components/grid/Container';
import Footer from 'js/components/Footer';
import './Page.scss';

export default class Page extends React.Component {
	state = {
		page: {
			title: {
				rendered: ''
			},
			excerpt: {
				rendered: ''
			}
		}
	};

	componentWillMount() {}

	render() {
		const { title, content } = this.props;

		return (
			<>
				<Header />
				<main className={'page'}>
					<Banner short titleContent={title.rendered} />
					<Container className={'page-content'} dangerouslySetInnerHTML={{ __html: content.rendered }} />
					{/*TODO: Make footer own component */}
				</main>
				<Footer />
			</>
		);
	}
}
