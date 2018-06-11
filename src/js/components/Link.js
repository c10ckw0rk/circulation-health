import React from 'react';
import { withRouter, Link as ReactLink } from 'react-router-dom';
import { withConsumer } from 'js/store/Store';

class Link extends React.Component {
	currentPage = undefined;

	state = {};

	static getDerivedStateFromProps(nextProps) {
		// const { location: { pathname }, primaryNavigation } = nextProps;
		//
		// primaryNavigation.forEach(() => {});
		return {};
	}

	render() {
		const { to, children, className } = this.props;
		if (!to) return false;

		return <ReactLink className={className} to={to} children={children} />;
	}
}

export default withRouter(withConsumer(Link));
