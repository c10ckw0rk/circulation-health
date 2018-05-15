import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';
import Page from 'js/pages/Page';
import Faq from 'js/pages/Faq';
import News from 'js/pages/News';

const templates = {
	'home.php': Home,
	'faq.php': Faq,
	'news.php': News
};

class App extends React.Component {
	static defaultProps = {
		pages: [],
		posts: [],
		primaryNavigation: []
	};

	pageRoutes = pages =>
		pages.map((page, i) => {
			return (
				<Route
					key={i}
					component={() => {
						const Template = templates[page.template] || Page;
						return <Template {...page} />;
					}}
					exact
					path={`${page.link.replace(location.origin, '')}`}
				/>
			);
		});

	componentWillMount() {
		this.props.getPages();
		this.props.getPrimaryNavigation();
	}

	render() {
		return (
			<Router>
				<Switch>
					{this.pageRoutes(this.props.pages)}
					{/*<Route render={() => <Redirect to="/" />} />*/}
				</Switch>
			</Router>
		);
	}
}

export default withConsumer()(App);
