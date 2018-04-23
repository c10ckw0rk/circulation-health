import React from 'react';
import PropTypes from 'prop-types';

import './CenterTile.scss';

export default class CenterTile extends React.Component {
	static defaultProps = {
		content:
			'Our team led by highly trained vascular and endovascular surgeons offers 20 years of experience, the latest techniques and state-of-the-art equipment.'
	};

	static propTypes = {
		content: PropTypes.string
	};

	render() {
		const { content } = this.props;
		return (
			<div className={'container-fluid center-tile'}>
				<div className={'row'}>
					<p className={'col-xs-12'}>{content}</p>
				</div>
			</div>
		);
	}
}
