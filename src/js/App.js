import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';
import Home from 'js/pages/Home';

// import { getPages } from '@js/store/actions';
// import About from '@/js/pages/About.js';
// import Contact from '@/js/pages/Contact.js';
// import Header from '@/js/pages/Header.js';

// const templates = {
// 	about: About,
// 	contact: Contact
// };

class App extends React.Component {
	// pageRoutes = ({ state, actions }) => {
	// 	actions.getPages();
	// 	state.pages.map((page, i) => <Route key={i} component={templates[page.slug]} path={`/${page.slug}`} exact />);
	// };

	// buildRoutes = () => {
	// 	return <Consumer>{this.pageRoutes}</Consumer>;
	// };

	componentWillMount() {
		this.props.getPages();
		this.props.getHomes();
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					{/*{this.buildRoutes()}*/}
					<Route render={() => <Redirect to="/" />} />
				</Switch>
			</Router>
		);
	}
}

export default withConsumer()(App);
