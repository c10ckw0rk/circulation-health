import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';
import Page from 'js/pages/Page';
import Faq from 'js/pages/Faq';
import News from 'js/pages/News';
import ContactUs from 'js/pages/ContactUs';
import NewsItem from 'js/pages/NewsItem';
import Base from 'js/templates/Base';

const templates = {
	'home.php': Home,
	'faq.php': Faq,
	'news.php': News,
	'contact-us.php': ContactUs,
	'news-item.php': NewsItem
};

class App extends React.Component {
	static defaultProps = {
		pages: [],
		posts: [],
		primaryNavigation: [],
		globalOptions: []
	};

	static propTypes = {
		getPages: PropTypes.func,
		getPrimaryNavigation: PropTypes.func,
		getGlobalOptions: PropTypes.func
	};

	pageRoutes = pages =>
		pages.map((page, i) => {
			const { acf, template, link, ...rest } = page;
			const { globalOptions, primaryNavigation } = this.props;
			// set false to undefined
			Object.keys(acf).forEach(field => {
				acf[field] = !acf[field] ? undefined : acf[field];
			});

			return (
				<Route
					key={i}
					component={() => {
						const Template = templates[template] || Page;
						return (
							<>
								<Base {...globalOptions.acf} primaryNavigation={primaryNavigation}>
									<Template {...rest} {...acf} />
								</Base>
							</>
						);
					}}
					exact
					path={`${link.replace(location.origin, '')}`}
				/>
			);
		});

	componentWillMount() {
		this.props.getPages();
		this.props.getPrimaryNavigation();
		this.props.getGlobalOptions();
	}

	render() {
		return (
			<Router>
				<Switch>{this.pageRoutes(this.props.pages)}</Switch>
			</Router>
		);
	}
}

export default withConsumer(App);
