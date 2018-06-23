import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';
import Page from 'js/pages/Page';
import Faq from 'js/pages/Faq';
import News from 'js/pages/News';
import ContactUs from 'js/pages/ContactUs';
import NewsPost from 'js/pages/NewsPost';
import Base from 'js/templates/Base';
import Search from 'js/pages/Search';

const templates = {
	'home.php': Home,
	'faq.php': Faq,
	'news.php': News,
	'contact-us.php': ContactUs,
	'news-post.php': NewsPost,
	'case-study.php': Page
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
		getGlobalOptions: PropTypes.func,
		getInit: PropTypes.func
	};

	pageRoutes = pages => {
		return pages.map((page, i) => {
			let { acf, template, link, ...rest } = page;
			return (
				<Route
					key={i}
					component={() => {
						const Template = templates[template] || Page;
						return <Template {...rest} {...acf} />;
					}}
					exact
					path={`${link.replace(location.origin, '')}`}
				/>
			);
		});
	};

	componentDidMount() {
		this.props.getInit();
	}

	render() {
		const { globalOptions, primaryNavigation } = this.props;
		return (
			<Router>
				<Base {...globalOptions} primaryNavigation={primaryNavigation}>
					<Switch>
						{this.pageRoutes(this.props.pages)}
						<Route
							component={() => {
								return <Search {...globalOptions} />;
							}}
							exact
							path={'/search'}
						/>
					</Switch>
				</Base>
			</Router>
		);
	}
}

export default withConsumer(App);
