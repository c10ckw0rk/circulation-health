import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends React.Component {
	static defaultProps = {};

	static propTypes = {};

	render() {
		const { children, ...rest } = this.props;
		return <button {...rest}>{children}</button>;
	}
}
