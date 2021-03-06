import React from 'react';
import './hamburger.scss';

export default class Hamburger extends React.Component {
	render() {
		return (
			<div {...this.props} className={'hamburger'}>
				<span className={'line'} />
				<span className={'line'} />
				<span className={'line'} />
			</div>
		);
	}
}
