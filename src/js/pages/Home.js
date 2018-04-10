import React from 'react';
import { withConsumer } from '@store/Store';

class Home extends React.Component {
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.pages[0]) {
			this.setState({ page: nextProps.pages[0] });
		}
	}

	render() {
		const { page } = this.state;
		return (
			<>
				<h2>Homepage template</h2>
				<h1>{page.title.rendered}</h1>

				<div dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
			</>
		);
	}
}

export default withConsumer()(Home);
