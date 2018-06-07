import React from 'react';
import { withConsumer } from 'js/store/Store';

const withMap = Component =>
	withConsumer(
		class extends React.Component {
			state = {
				news: []
			};

			componentDidMount() {
				const news = [];
				this.props.pages.forEach(page => {
					if (page.template === 'news-item.php') {
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
				const { globalOptions } = this.props;
				if (!globalOptions || !globalOptions.acf) return false;
				return <Component {...this.props} news={news} map={this.props.globalOptions.acf.googleMapsAddress} />;
			}
		}
	);

export default withMap;
