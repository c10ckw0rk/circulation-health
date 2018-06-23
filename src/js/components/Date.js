import React from 'react';
import PropTypes from 'prop-types';

import './Date.scss';

export default class Date extends React.Component {
	static defaultProps = {
		day: '',
		month: ''
	};

	static propTypes = {
		day: PropTypes.string,
		month: PropTypes.string
	};

	render() {
		const { day, month } = this.props;
		return (
			<span className={'date'}>
				<span className={'day'}>{day}</span>
				<span className={'month'}>{month}</span>
			</span>
		);
	}
}
