import React from 'react';
import { withRouter, Link as ReactLink } from 'react-router-dom';

class Link extends React.Component {
	render() {
		const { to } = this.props;
		console.log(this.props);
		return <ReactLink {...this.props} />;
	}
}

export default withRouter(Link);
