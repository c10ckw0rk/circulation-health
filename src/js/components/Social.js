import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'js/components/grid/Container';
import './Social.scss';

export default class Social extends React.Component {
	static defaultProps = {};

	static propTypes = {};

	render() {
		const {} = this.props;
		return <Container className={'social'} />;
	}
}
