import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';
import Page from 'js/pages/Page';

// const templates = {
// 	home: Home,
// 	page: Page
// };

class App extends React.Component {
	static defaultProps = {
		home: [],
		pages: [],
		posts: []
	};

	pageRoutes = pages =>
		pages.map((page, i) => {
			return <Route key={i} component={() => <Page {...page} />} path={`/${page.slug}`} exact />;
		});

	homeRoutes = ({ state, actions }) =>
		state.pages.map((page, i) => <Route key={i} component={page} path={`/${page.slug}`} exact />);

	componentWillMount() {
		this.props.getPages();
		this.props.getHomes();
	}

	componentWillReceiveProps(nextProps, nextContext) {
		// console.log(nextProps);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					{this.pageRoutes(this.props.pages)}
					{/*<Route render={() => <Redirect to="/" />} />*/}
				</Switch>
			</Router>
		);
	}
}

export default withConsumer()(App);
