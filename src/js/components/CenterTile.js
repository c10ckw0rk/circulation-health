import React from 'react';
import PropTypes from 'prop-types';
import Container from 'js/components/grid/Container';

import './CenterTile.scss';

export default class CenterTile extends React.Component {
	static defaultProps = {
		content: `<p>Our team led by highly trained vascular and endovascular surgeons offers 20 years of experience, the latest techniques and state-of-the-art equipment.</p>`
	};

	static propTypes = {
		content: PropTypes.string
	};

	render() {
		const { content } = this.props;
		return (
			<div className={'center-tile-wrapper'}>
				<Container className={'center-tile'} outerWrap>
					<div className={'content'} dangerouslySetInnerHTML={{ __html: content }} />
				</Container>
			</div>
		);
	}
}
