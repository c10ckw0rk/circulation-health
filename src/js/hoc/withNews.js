import React from 'react';
import { withConsumer } from 'js/store/Store';

const withNews = Component =>
	withConsumer(
		class extends React.Component {
			state = {
				news: []
			};

			componentDidMount() {
				const news = [];
				this.props.pages.forEach(page => {
					if (page.template === 'news-post.php') {
						news.push({
							title: page.title.rendered,
							link: page.link,
							date: page.acf.date
						});
					}
				});
				this.setState({ news });
			}

			render() {
				const { news } = this.state;
				return <Component {...this.props} news={news} />;
			}
		}
	);

export default withNews;
